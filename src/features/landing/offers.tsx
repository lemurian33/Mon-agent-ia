"use client";

import { Typography } from "@/components/nowts/typography";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Offer = {
  id: string;
  badge?: string;
  title: string;
  price: string;
  priceUnit: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  popular?: boolean;
};

const OFFERS: Offer[] = [
  {
    id: "audit",
    badge: "GRATUIT",
    title: "Audit I.A.",
    price: "0€",
    priceUnit: "sans engagement",
    description:
      "En 30 minutes, on identifie exactement quels process de votre business peuvent être automatisés avec l'I.A. — et combien ça vous ferait gagner.",
    features: [
      "Analyse de vos process métier",
      "Identification des opportunités I.A.",
      "Estimation des gains concrets",
      "Feuille de route personnalisée",
      "conseil expertise IA",
    ],
    cta: "Réserver mon audit",
    href: "/#audit-form",
    popular: false,
  },
  {
    id: "essentiel",
    badge: "PROPULSER PAR CLAUDE",
    title: "Essentiel",
    price: "79€",
    priceUnit: "/mois",
    description:
      "Accompagnement pour intégrer eco système Claude dans votre quotidien. Formation complète sur cowork ou management agent. Idéal pour les indépendants et solopreneurs.",
    features: [
      "On configure ensemble et pas à pas tous vos besoins",
      "Formation Claude, Cowork, Routine",
      "Claude Agent management",
      "Accompagnement et intégration personnalisé",
      "Support client",
      "Coût API claude (non-inclus)",
    ],
    cta: "Démarrer",
    href: "/essentiel",
    popular: false,
  },
  {
    id: "pro",
    title: "Pro",
    badge: "Mutualisé",
    price: "208€",
    priceUnit: "/mois",
    description:
      "Une équipe d'agents I.A. qui collaborent entre eux pour piloter vos process — comme avoir des collaborateurs disponibles en permanence.",
    features: [
      "Configuration sur mesure",
      "Modèle open sources",
      "Vos agents I.A. disponibles 24h/24",
      "Automatisation de vos tâches répétitives",
      "Mise en place accompagnée",
      "Support prioritaire dédié",
      "Vos données hébergées en France",
      "100% conforme RGPD",
    ],
    cta: "Découvrir",
    href: "/pro",
    popular: false,
  },
  {
    id: "entreprise",
    badge: "Privatiser",
    title: "Entreprise",
    price: "349€",
    priceUnit: "/mois",
    description:
          "Votre propre écosystème I.A. hébergé en France, indépendant des Big Tech. Vos données restent chez vous, vos agents travaillent pour vous.",
    features: [
      "Audit complet de votre organisation",
      "Architecture I.A. 100% sur mesure",
      "Intégration à tous vos outils métier",
      "Agents entraînés sur votre secteur",
      "Formation avancée de vos équipes",
      "Accompagnement sur la durée",
      "ROI mesuré et suivi",
    ],
    cta: "En savoir plus",
    href: "/entreprise",
    popular: true,
  },
  {
    id: "premium",
    badge: "Privatiser",
    title: "Premium",
    price: "Sur devis",
    priceUnit: "Configuration sur mesure",
    description:
      "L'I.A. taillée exactement pour votre business, souverain. Architecture pensée de A à Z selon vos process, vos équipes et vos objectifs.",
    features: [
      "Configuration sur mesure",
      "Agents I.A. spécialisés par métier",
      "Modèle open sources",
      "Un agent pilote qui coordonne les autres",
      "Traitement de gros volumes de données",
      "Connexion à vos outils existants",
      "Formation et prise en main équipe",
      "Support prioritaire dédié",
    ],
    cta: "Nous contacter",
    href: "/premium",
    popular: false,
  },
];

export const Offers = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
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
            Nos offres
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
            De l'accompagnement solo à l'écosystème I.A d'entreprise — souverain, conforme RGPD et taillé pour votre métier.
          </Typography>
        </div>

        {/* ── Flèches ── */}
        <div className="mt-8 flex justify-end gap-2">
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
          className="mt-4 flex gap-4 overflow-x-auto pb-4
                     [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {OFFERS.map((offer) => (
            <OfferCard key={offer.id} {...offer} />
          ))}
        </div>

        {/* ── Bloc bas — différentiateur fort ── */}
        <div
          className="mx-auto mt-8 max-w-6xl rounded-2xl border
                      border-orange-500/20 bg-orange-500/5 px-8 py-6"
        >
          <div
            className="flex flex-col items-center justify-between
                        gap-4 text-center sm:flex-row sm:text-left"
          >
            <div>
              <p className="text-sm font-bold text-foreground">
                Premiers résultats en moins de 30 jours
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Ou on ajuste jusqu'à ce que ce soit le cas
              </p>
            </div>
            <Link
              href="#audit-form"
              className="shrink-0 rounded-md bg-orange-500 px-6 py-2.5
                          text-sm font-semibold text-white transition-all
                          hover:bg-orange-400 hover:shadow-lg
                          hover:shadow-orange-500/20 active:scale-95"
            >
              Réserver mon audit gratuit →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

const OfferCard = ({
  id,
  badge,
  title,
  price,
  priceUnit,
  description,
  features,
  cta,
  href,
  // popular,
}: Offer) => {
  const isAudit = id === "audit";     // ✅ CORRIGÉ — était "solo"
  const isPremium = id === "premium";

  return (
    <div
      data-testid="offer-card"
      className={cn(
        "relative flex w-[280px] shrink-0 flex-col rounded-2xl",
        "p-6 transition-all overflow-visible",
        "hover:-translate-y-1 hover:shadow-md hover:shadow-black/5",
        "dark:hover:shadow-black/20",
        isAudit
          ? "border border-orange-500/50 bg-orange-500/5"
          : isPremium
            ? "border border-border bg-gradient-to-b from-card to-muted/30"
            : "border border-border bg-card"
      )}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 right-4 pt-4">
          <span
            data-testid="offer-badge"
            className="rounded-full bg-orange-500 px-2 py-1
                       text-xs font-bold text-white uppercase
                       tracking-wider"
          >
            {badge}
          </span>
        </div>
      )}

      {/* Titre */}
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>

      {/* Prix */}
      <div className="mt-2">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-foreground">
            {price}
          </span>
        </div>
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

      {/* Features */}
      <ul className="mt-4 flex flex-col gap-2">
        {features.map((f) => (
          <li
            key={f}
            data-testid="offer-feature"
            className="flex items-start gap-2 text-xs text-muted-foreground"
          >
            <Check size={13} className="mt-0.5 shrink-0 text-orange-500" />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-auto pt-6">
        <Link
          href={href}
          className={cn(
            "block w-full rounded-md py-2.5 text-center",
            "text-sm font-semibold transition-all",
            isAudit
              ? "bg-orange-500 text-white hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/30"
              : isPremium
                ? "bg-foreground text-background hover:opacity-80"
                : "border border-border text-foreground hover:border-orange-500/50 hover:text-orange-500"
          )}
        >
          {cta} →
        </Link>
      </div>
    </div>
  );
};