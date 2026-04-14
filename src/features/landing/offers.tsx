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
    id: "site",
    badge: "POPULAIRE",
    title: "Création de site web",
    price: "À partir de 997€",
    priceUnit: "",
    description:
      "Site web professionnel qui attire, convainc et convertit — pas juste beau, mais conçu pour ramener des clients.",
    features: [
      "Design sur-mesure responsive",
      "Optimisation SEO native",
      "Performances maximales",
      "+ de 5 pages selon votre activité",
    ],
    cta: "En savoir plus",
    href: "/site-web",
    popular: true,
  },
  {
    id: "clé-en-main",
    title: "Clé en main",
    badge: "NOUVEAU",
    price: "49€",
    priceUnit: "Premier paiement dans 15 jrs",
    description:
      "Votre présence Google gérée de A à Z, avec site web, SEO local et CRM pour le suivi suivi.",
    features: [
      "Site web professionnel inclus",
      "Stratégie SEO local déployée",
      "Création de contenu mensuel",
      "Hébergement & maintenance inclus",
    ],
    cta: "Démarrer maintenant",
    href: "/cle-en-main",
    popular: false,
  },
  {
    id: "seo",
    title: "Référencement web (SEO)",
    price: "À partir de 497€",
    priceUnit: "",
    description:
      "Stratégie SEO complète pour améliorer votre positionnement sur Google.",
    features: [
      "Audit SEO technique complet",
      "Recherche de mots-clés stratégiques",
      "Optimisation on-page",
      "Startégie de contenu",
    ],
    cta: "En savoir plus",
    href: "/seo",
  },
  {
    id: "fiche-google",
    title: "Optimisation Fiche Google",
    price: "À partir de 247€",
    priceUnit: "",
    description:
      "Optimisation complète de votre Fiche Google Business Profile pour plus de visibilité locale.",
    features: [
      "Optimisation complète du profil",
      "Stratégie de catégories & attributs",
      "Gestion des avis & réponses",
    ],
    cta: "En savoir plus",
    href: "/gmb",
  },
  {
    id: "audit",
    title: "Audit de visibilité",
    price: "97€",
    priceUnit: "remboursés à la signature*",
    description:
      "Analyse complète de votre présence Google avec plan d'action priorisé.",
    features: [
      "Analyse mots-clés & positions",
      "Audit Fiche Google Business",
      "Analyse concurrence locale",
    ],
    cta: "En savoir plus",
    href: "/audit",
  },
  {
    id: "partenariat",
    title: "Partenariat leads",
    price: "0€",
    priceUnit: "à avancer — paiement au résultat",
    description:
      "On génère vos clients qualifiés via Google, vous ne payez que les leads reçus. Zone exclusive, zéro risque.",
    features: [
      "SEO local & fiche Google déployés",
      "Landing page dédiée à votre activité",
      "Tracking des appels & formulaires",
    ],
    cta: "En savoir plus",
    href: "/partenariat",
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
            Choisissez comment on travaille ensemble
          </Typography>

          <Typography
            variant="large"
            className="text-muted-foreground mt-4 text-lg text-balance"
          >
            Site web, SEO local, fiche Google — chaque levier activé pour vous rendre incontournable.
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
  popular,
}: Offer) => {
  const isSite = id === "site";

  return (
    <div
      data-testid="offer-card"
      className={cn(
        "relative flex w-[280px] shrink-0 flex-col rounded-2xl",
        "p-6 transition-all overflow-visible",
        "hover:-translate-y-1 hover:shadow-md hover:shadow-black/5",
        "dark:hover:shadow-black/20",
        isSite
          ? "border border-orange-500/20 bg-orange-500/5"
          : popular
            ? "border border-orange-500/50 bg-card"
            : "border border-border bg-card"
      )}
    >
      {/* Badge populaire */}
      {badge && (
        <div className="absolute -top-3 right-4 pt-4">
          <span
            data-testid="offer-badge"
            className="rounded-full bg-orange-500 px-3 py-1
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
            {price.replace("€", "")}
          </span>
          <span className="text-sm font-normal text-orange-500">
            {title.toLowerCase().includes("clé en main") ? "€/mois" : "€"}
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
            <Check
              size={13}
              className="mt-0.5 shrink-0 text-orange-500"
            />
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
            popular
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