"use client";

import Link from "next/link";
import { Typography } from "@/components/nowts/typography";
import { useState } from "react";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

type Offer = {
  id: string;
  tag: string;
  title: string;
  price: string;
  priceUnit: string;
  description: string;
  features: string[];
  roi: { value: string; label: string };
  cta: string;
  href: string;
};

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const OFFERS: Offer[] = [
  {
    id: "essentiel",
    tag: "Essentiel",
    title: "Formation & configuration Claude",
    price: "79€",
    priceUnit: "/mois HT",
    description:
      "On installe Claude pour votre activité et on vous forme à l'utiliser au quotidien — sans aucune compétence technique requise.",
    features: [
      "Configuration Claude sur mesure pour votre métier",
      "Formation complète à votre rythme (sessions 1h)",
      "Routines IA pour devis, relances, réponses clients",
      "Accompagnement pas à pas, support WhatsApp",
			"20€ crédits API offers",
    ],
    roi: { value: "+5h", label: "récupérées dès la première semaine" },
    cta: "Démarrer",
    href: "/essentiel",
  },
  {
    id: "pro",
    tag: "Pro",
    title: "Agents I.A. actifs pendant que vous êtes sur le chantier",
    price: "208€",
    priceUnit: "/mois HT",
    description:
      "Vos agents relancent les devis, publient vos photos chantier et gèrent les impayés — sans vous.",
    features: [
      "Devis relancés automatiquement après X jours",
      "Photos chantier publiées sur vos réseaux sociaux",
      "Factures impayées relancées sans intervention",
      "Référencement local Google My Business",
      "Hébergé en France — 100% RGPD",
    ],
    roi: { value: "8–12h", label: "récupérées par semaine" },
    cta: "Déployer mes agents",
    href: "/pro",
  },
  {
    id: "entreprise",
    tag: "Entreprise",
    title: "Écosystème I.A. privé, hébergé en France",
    price: "Sur devis",
    priceUnit: "Setup + Plan Pro",
    description:
      "Votre propre infrastructure IA dédiée — CRM chantiers, Tom votre assistant vocal, données chez vous.",
    features: [
      "Tout le pack Pro inclus",
      "Environnement IA 100% privé — vos données restent chez vous",
      "Donna: assistant vocal avec votre ton et vocabulaire métier",
			"Communications: 0.20€/min",
      "CRM chantiers connecté à vos outils",
      "Séquences commerciales automatiques",
      "Support prioritaire dédié",
    ],
    roi: { value: "+2 500€", label: "économisés vs embauche secrétariat" },
    cta: "Déployer mon écosystème",
    href: "/entreprise",
  },
  {
    id: "elite",
    tag: "Elite",
    title: "Coordination multi-équipes et multi-dépôts",
    price: "Sur devis",
    priceUnit: "Setup + Plan Entreprise",
    description:
      "Pour les groupes BTP ou franchises avec plusieurs équipes terrain. Agents entraînés sur votre catalogue, reporting par chantier.",
    features: [
      "Tout le pack Entreprise inclus",
      "Gestion multi-dépôts et multi-équipes",
      "Agents entraînés sur votre catalogue de services",
      "Reporting commercial par chantier (tableau de bord temps réel)",
      "Zéro interruption de service garantie",
      "Suivi et optimisation continue inclus",
    ],
    roi: { value: "+3 500€", label: "économisés vs équipe admin dédiée" },
    cta: "Nous contacter",
    href: "/elite",
  },
];

// ─────────────────────────────────────────────
// Offer Panel (right side)
// ─────────────────────────────────────────────

const OfferPanel = ({ offer: o }: { offer: Offer }) => (
  <div className="rounded-2xl border border-border bg-card p-5">
    <p className="text-[10px] font-bold tracking-widest text-orange-500 uppercase mb-1">
      {o.tag} — {o.price}{o.priceUnit}
    </p>
    <h4 className="text-sm font-semibold text-foreground leading-snug mb-2">
      {o.title}
    </h4>
    <p className="text-xs leading-relaxed text-muted-foreground mb-4">
      {o.description}
    </p>

    {/* Features */}
    <ul className="flex flex-col gap-2 mb-4">
      {o.features.map((f) => (
        <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
          <span className="text-orange-500 shrink-0 mt-0.5">→</span>
          {f}
        </li>
      ))}
    </ul>

    {/* ROI chip */}
    <div className="flex items-center gap-3 rounded-xl bg-muted px-3 py-2.5 mb-4">
      <span className="text-base font-semibold text-foreground">{o.roi.value}</span>
      <span className="text-xs text-muted-foreground">{o.roi.label}</span>
    </div>

    {/* CTAs */}
    <div className="flex flex-wrap gap-2">
      <Link
        href="/#audit-form"
        className="inline-flex items-center gap-1 rounded-lg border border-border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:bg-muted"
      >
        En savoir plus
      </Link>
      <Link
        href={o.href}
        className="inline-flex items-center gap-1 rounded-lg bg-orange-500 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-orange-400"
      >
        {o.cta} →
      </Link>
    </div>
  </div>
);

// ─────────────────────────────────────────────
// Timeline Step (left side)
// ─────────────────────────────────────────────

const TimelineStep = ({
  offer,
  active,
  onClick,
}: {
  offer: Offer;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="group relative flex flex-col items-end pr-5 py-3 text-right"
  >
    {/* Dot */}
    <span
      className={cn(
        "absolute right-0 top-4 size-2 translate-x-[4.5px] rounded-full border transition-colors",
        active
          ? "border-orange-500 bg-orange-500"
          : "border-border bg-card group-hover:border-orange-400"
      )}
    />

    <span
      className={cn(
        "text-xs font-semibold leading-snug transition-colors",
        active ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
      )}
    >
      {offer.tag}
    </span>
    <span className="text-[11px] text-muted-foreground">
      {offer.price}{offer.priceUnit}
    </span>
  </button>
);

// ─────────────────────────────────────────────
// Main export
// ─────────────────────────────────────────────

export const Offers = () => {
  const [activeId, setActiveId] = useState(OFFERS[0].id);
  const active = OFFERS.find((o) => o.id === activeId) ?? OFFERS[0];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold tracking-widest text-orange-700 uppercase dark:border-orange-800/60 dark:bg-orange-950/60 dark:text-orange-300">
            Nos offres
          </span>
          <Typography
            variant="h2"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            4 niveaux — du démarrage au déploiement complet
          </Typography>
          <Typography
            variant="large"
            className="mt-4 text-lg text-muted-foreground text-balance"
          >
            Choisissez votre niveau d'intégration I.A. — souverain, conforme RGPD et taillé pour votre métier.
          </Typography>
        </div>

        {/* Timeline layout */}
        <div className="mx-auto max-w-3xl">
          <div className="grid grid-cols-[140px_1fr] gap-0">

            {/* Left — step labels */}
            <div className="relative flex flex-col">
              {/* Vertical line */}
              <div className="absolute right-0 top-6 bottom-6 w-px bg-border" />

              {OFFERS.map((o) => (
                <TimelineStep
                  key={o.id}
                  offer={o}
                  active={o.id === activeId}
                  onClick={() => setActiveId(o.id)}
                />
              ))}
            </div>

            {/* Right — active panel */}
            <div className="pl-6">
              <OfferPanel offer={active} />
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-orange-500/20 bg-orange-500/5 px-8 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-sm font-bold text-foreground">
                Premiers résultats en moins de 30 jours
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Ou on ajuste jusqu'à ce que ce soit le cas
              </p>
            </div>
            <Link
              href="/#audit-form"
              className="shrink-0 rounded-md bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/20 active:scale-95"
            >
              Réserver mon audit gratuit →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};