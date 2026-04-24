"use client";

import { Typography } from "@/components/nowts/typography";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Offer = {
  id: string;
  badge?: string;
  badgeStyle?: React.CSSProperties;
  title: string;
  price: string;
  priceUnit: string;
  description: string;
  features: string[];
  strongFeatures?: string[];
  roi: { value: string; label: string };
  cta: string;
  href: string;
  featured?: boolean;
};

const OFFERS: Offer[] = [
  {
    id: "audit",
    badge: "",
    title: "Audit",
    price: "Gratuit",
    priceUnit: "",
    description:
      "test On installe et configure Claude pour vous, et on vous forme à l'utiliser au quotidien dans votre activité.",
    strongFeatures: [
      "Configuration Claude sur mesure pour votre métier",
      "Formation complète à votre rythme",
    ],
    features: [
      "Routines IA pour votre quotidien artisan",
      "Accompagnement pas à pas",
      "Support WhatsApp inclus",
    ],
    roi: { value: "+5h", label: "récupérées dès la première semaine" },
    cta: "Démarrer",
    href: "/#audit-form",
  },
  {
    id: "essentiel",
    badge: "Propulsé par Claude",
    title: "Essentiel",
    price: "79€",
    priceUnit: "/mois HT",
    description:
      "On installe et configure Claude pour vous, et on vous forme à l'utiliser au quotidien dans votre activité.",
    strongFeatures: [
      "Configuration Claude sur mesure pour votre métier",
      "Formation complète à votre rythme",
    ],
    features: [
      "Routines IA pour votre quotidien artisan",
      "Accompagnement pas à pas",
      "Support WhatsApp inclus",
    ],
    roi: { value: "+5h", label: "récupérées dès la première semaine" },
    cta: "Démarrer",
    href: "#",
  },
  {
    id: "pro",
    badge: "Populaire",
    title: "Pro",
    price: "208€",
    priceUnit: "/mois HT",
    description:
      "Vos agents IA travaillent pour vous pendant que vous êtes sur le chantier.",
    strongFeatures: [
      "Devis relancés automatiquement",
      "Photos chantier publiées sur vos réseaux",
      "Factures impayées relancées sans vous",
    ],
    features: [
      "Référencement local (plombier à X…)",
      "Hébergé en France — RGPD",
      "Agents disponibles 24h/24",
    ],
    roi: { value: "8–12h", label: "récupérées par semaine" },
    cta: "Découvrir",
    href: "#",
  },
  {
    id: "entreprise",
    title: "Entreprise",
    price: "Sur devis",
    priceUnit: "",
    description:
      "Votre propre écosystème IA, dédié à votre entreprise. Vos données restent chez vous.",
    strongFeatures: [
      "Tout le pack Pro",
      "Environnement IA 100% privé — vos données chez vous",
      "Tom avec voix naturelle personnalisée (votre ton, votre métier)",
      "CRM chantiers connecté",
    ],
    features: [
      "Séquences email commerciales automatiques",
      "Connexion à vos outils métier",
      "Support prioritaire dédié",
    ],
    roi: { value: "+2 500€", label: "économisés vs embauche secrétariat" },
    cta: "Choisir ce pack",
    href: "#",
    featured: true,
  },
  {
    id: "elite",
    badge: "Multi-équipes",
    title: "Elite",
    price: "Sur devis",
    priceUnit: "",
    description:
      "Pour les groupes BTP ou franchises avec plusieurs équipes terrain à coordonner.",
    strongFeatures: [
      "Tout le pack Entreprise",
      "Gestion multi-dépôts et multi-équipes",
      "Agents entraînés sur votre catalogue de services",
    ],
    features: [
      "Reporting commercial par chantier",
      "Zéro interruption de service garantie",
      "Suivi et optimisation continue inclus",
    ],
    roi: { value: "+3 500€", label: "économisés vs équipe admin dédiée" },
    cta: "En savoir plus",
    href: "#",
  },
];

export const Offers = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  const onScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
  };

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full
                           border border-orange-200 bg-orange-50 px-4 py-1.5
                           text-xs font-semibold tracking-widest
                           text-orange-700 uppercase
                           dark:border-orange-800/60 dark:bg-orange-950/60
                           dark:text-orange-300">
            Artisans & BTP
          </span>

          <Typography
            variant="h2"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Choisissez votre niveau d'intégration I.A.
          </Typography>

          <Typography
            variant="large"
            className="text-muted-foreground mt-4 text-lg text-balance"
          >
            De la formation solo à l'écosystème I.A. d'entreprise — souverain, conforme RGPD et taillé pour votre métier.
          </Typography>
        </div>

        {/* ── Pain points ── */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {["devis non relancés", "appels manqués sur chantier", "agenda mal géré", "zéro visibilité en ligne", "factures impayées"].map((pain) => (
            <span
              key={pain}
              className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
            >
              {pain}
            </span>
          ))}
        </div>

        {/* ── Flèches ── */}
        <div className="mt-6 flex justify-end gap-2">
          <button
            data-testid="scroll-left"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Précédent"
            className={cn(
              "flex size-8 items-center justify-center rounded-full",
              "border border-border bg-card transition-all",
              "hover:border-orange-500/50 hover:text-orange-500",
              "disabled:cursor-not-allowed disabled:opacity-30"
            )}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            data-testid="scroll-right"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Suivant"
            className={cn(
              "flex size-8 items-center justify-center rounded-full",
              "border border-border bg-card transition-all",
              "hover:border-orange-500/50 hover:text-orange-500",
              "disabled:cursor-not-allowed disabled:opacity-30"
            )}
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* ── Carousel ── */}
        <div
          ref={scrollRef}
          onScroll={onScroll}
          data-testid="offers-carousel"
          className="mt-4 flex gap-4 pb-4
                     [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {OFFERS.map((offer) => (
            <OfferCard key={offer.id} {...offer} />
          ))}
        </div>

        {/* ── Stats ── */}
        <div className="mt-6 max-w-6xl grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { num: "24/7", lbl: "Agents actifs" },
            { num: "France", lbl: "Données sécurisées" },
            { num: "< 1j", lbl: "Premiers résultats" },
            { num: "0 impayé", lbl: "Oublié sans relance" },
          ].map(({ num, lbl }) => (
            <div key={lbl} className="rounded-xl bg-muted px-4 py-3 text-center">
              <p className="text-lg font-semibold text-foreground">{num}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{lbl}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const OfferCard = ({
  badge,
  badgeStyle,
  title,
  price,
  priceUnit,
  description,
  features,
  strongFeatures = [],
  roi,
  cta,
  href,
  featured,
}: Offer) => {
  return (
    <div
      data-testid="offer-card"
      className={cn(
        "relative flex w-[280px] shrink-0 flex-col rounded-2xl",
        "p-6 transition-all overflow-visible",
        "hover:-translate-y-1 hover:shadow-md hover:shadow-black/5",
        "dark:hover:shadow-black/20",
        featured
          ? "border-2 border-orange-500/50 bg-card"
          : "border border-border bg-card"
      )}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 right-4">
          <span
            data-testid="offer-badge"
            className="rounded-full px-2 py-1 text-xs font-bold uppercase tracking-wider bg-orange-100 text-orange-500 dark:bg-orange-950 dark:text-orange-400"
          >
            {badge}
          </span>
        </div>
      )}

      {/* Titre */}
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>

      {/* Prix */}
      <div className="mt-2">
        <span className="text-2xl font-bold text-foreground">{price}</span>
        {priceUnit && (
          <p className="mt-0.5 text-xs text-muted-foreground">{priceUnit}</p>
        )}
      </div>

      {/* Description */}
      <p
        data-testid="offer-description"
        className="mt-3 text-xs leading-relaxed text-muted-foreground"
      >
        {description}
      </p>

      <hr className="my-3 border-border" />

      {/* Features */}
      <ul className="flex flex-col gap-2">
        {strongFeatures.map((f) => (
          <li key={f} className="flex items-start gap-2 text-xs font-medium text-foreground">
            <Check size={13} className="mt-0.5 shrink-0 text-blue-500" />
            {f}
          </li>
        ))}
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
            <Check size={13} className="mt-0.5 shrink-0 text-orange-500" />
            {f}
          </li>
        ))}
      </ul>

      {/* ROI */}
      <div className="mt-4 rounded-xl bg-muted px-3 py-2.5">
        <p className="text-lg font-semibold text-foreground">{roi.value}</p>
        <p className="text-xs text-muted-foreground">{roi.label}</p>
      </div>

      {/* CTA */}
      <div className="mt-auto pt-4">
        <Link
          href={href}
          className={cn(
            "block w-full rounded-md py-2.5 text-center",
            "text-sm font-semibold transition-all",
            featured
              ? "bg-orange-500 text-white hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/30"
              : "border border-border text-foreground hover:border-orange-500/50 hover:text-orange-500"
          )}
        >
          {cta} →
        </Link>
      </div>
    </div>
  );
};