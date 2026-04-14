"use client";

import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export type PortfolioKey = {
  id: string;
  client: string;
  category: string;
  tags: string[];
  description: string;
  highlights: string[];
  href: string;
  ctaLabel?: string;
  ctaHref?: string;
  images: [string, string, string, string];
  alts: [string, string, string, string];
};

const PORTFOLIO_KEYS: PortfolioKey[] = [
  {
    id: "segment-c",
    client: "Segment.C Menuiserie",
    category: "Artisanat · Bordeaux",
    tags: ["Site vitrine", "SEO", "GBP"],
    description:
      "Un site pensé pour convertir les visiteurs en demandes de devis, avec une optimisation SEO locale poussée.",
    highlights: [
      "Design sur-mesure responsive et rapide",
      "Pages services optimisées pour chaque mot-clé",
      "Intégration Google Business Profile",
      "Formulaire de devis haute conversion",
    ],
    href: "https://www.segment-c.com",
    ctaLabel: "+ d'info",
    ctaHref: "/site-web/segment-c",
    images: [
      "/images/segment-hero.webp",
      "/images/dashboard-admin-articles.webp",
      "/images/dashboard-admin-devis.webp",
      "/images/dashboard-admin-produits.webp",
    ],
    alts: [
      "Page d'accueil site Segment.C Menuiserie Bordeaux",
      "Page admin gestion articles Segment.C",
      "page admin gestion devis Segment.C",
      "page admin gestion produits Segment.C",
    ],
  },
  {
    id: "lemurian-agency",
    client: "Lemurian Agency",
    category: "Agence · Bordeaux",
    tags: ["Site vitrine", "Design", "SEO"],
    description:
      "Site vitrine premium pour une agence créative — identité forte, animations soignées et positionnement haut de gamme.",
    highlights: [
      "Direction artistique distinctive & mémorable",
      "Animations d'entrée et transitions fluides",
      "Architecture SEO pensée pour l'acquisition",
      "Expérience desktop & mobile irréprochable",
    ],
    href: "https://www.lemurian-agency.com",
    images: [
      "/images/lemurian-agency-hero.webp",
      "/images/lemurian-agency-service.webp",
      "/images/lemurian-agency-service1.webp",
      "/images/lemurian-agency-formulaire.webp",
    ],
    alts: [
      "Page d'accueil Lemurian Agency Bordeaux",
      "Page services agence audit Bordeaux",
      "Page services agence Agent IA Bordeaux",
      "Formulaire de contact agence Bordeaux",
    ],
  },
  {
    id: "dr-ramaroson",
    client: "Cabinet Dr Ramaroson",
    category: "Santé · Bordeaux",
    tags: ["Site RDV", "SEO local", "GBP"],
    description:
      "Site médical moderne avec système de prise de rendez-vous en ligne et optimisation locale pour capter de nouveaux patients.",
    highlights: [
      "Prise de RDV en ligne via Doctolib intégrée",
      "Optimisation GBP profil médecin généraliste",
      "SEO local ciblé quartier & spécialité",
      "Design épuré rassurant pour les patients",
    ],
    href: "/realisations/dr-ramaroson",
    images: [
      "/portfolio/dr-ramaroson-1.jpg",
      "/portfolio/dr-ramaroson-2.jpg",
      "/portfolio/dr-ramaroson-3.jpg",
      "/portfolio/dr-ramaroson-4.jpg",
    ],
    alts: [
      "Page d'accueil cabinet Dr Ramaroson Bordeaux",
      "Prise de rendez-vous en ligne Dr Ramaroson",
      "Services médecin généraliste Bordeaux",
      "Fiche Google Business Dr Ramaroson",
    ],
  },
  // {
  //   id: "dr-campagne",
  //   client: "Cabinet Dr Campagne F.",
  //   category: "Santé · Médoc",
  //   tags: ["Site RDV", "Agent I.A", "GBP"],
  //   description:
  //     "Site médical avec prise de rendez-vous en ligne et agent vocal I.A pour gérer le planning automatiquement.",
  //   highlights: [
  //     "Prise de RDV en ligne intégrée",
  //     "Agent I.A vocal pour le calendrier",
  //     "Optimisation GBP spécialités médicales",
  //     "Design sobre et rassurant pour les patients",
  //   ],
  //   href: "/realisations/dr-campagne",
  //   images: [
  //     "/portfolio/dr-campagne-1.jpg",
  //     "/portfolio/dr-campagne-2.jpg",
  //     "/portfolio/dr-campagne-3.jpg",
  //     "/portfolio/dr-campagne-4.jpg",
  //   ],
  //   alts: [
  //     "Page d'accueil cabinet médical Dr Campagne Médoc",
  //     "Prise de rendez-vous en ligne Dr Campagne",
  //     "Services médicaux cabinet Dr Campagne F.",
  //     "Contact cabinet médical Médoc",
  //   ],
  // },
];

const INITIAL_COUNT = 1;

const SLIDE_DURATION = 3000;

const ImageSlider = ({
  images,
  alts,
}: {
  images: [string, string, string, string];
  alts: [string, string, string, string];
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative order-1 lg:order-2 aspect-[4/3] overflow-hidden bg-muted">
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={alts[i]}
            fill
            className="object-fill rounded-t-md"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={alts[i]}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-5 bg-orange-500" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const PortfolioCard = ({ site, isFirst }: { site: PortfolioKey; isFirst: boolean }) => {
  return (
    <div
      className={`rounded-md border p-4 sm:p-10 transition-all ${
        isFirst
          ? "border-orange-500/20 bg-orange-500/5"
          : "border-border bg-card"
      }`}
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

        {/* ── Colonne gauche : texte ── */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {site.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-orange-500 uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Titre */}
          <div>
            <h3 className="text-2xl font-bold text-foreground">{site.client}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{site.category}</p>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-muted-foreground">
            {site.description}
          </p>

          {/* Bullet points */}
          <ul className="flex flex-col gap-3">
            {site.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-orange-500">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {h}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-1 pt-2">
            <Link
              href={site.href}
              className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-6 py-3 text-sm font-bold text-white uppercase tracking-wider transition-all hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/20 active:scale-95"
            >
              Voir le site
              <ExternalLink size={14} />
            </Link>
            {site.ctaHref && site.ctaLabel && (
              <Link
                href={site.ctaHref}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-3 text-sm font-semibold text-muted-foreground transition-all hover:border-orange-500/50 hover:text-orange-500 active:scale-95"
              >
                {site.ctaLabel} →
              </Link>
            )}
          </div>
        </div>

        {/* ── Colonne droite : slider ── */}
        <ImageSlider images={site.images} alts={site.alts} />

      </div>
    </div>
  );
};

const STEPS = [1, 3, PORTFOLIO_KEYS.length] as const;

export const PortfolioShowcase = () => {
  const [step, setStep] = useState(0);
  const visibleSites = PORTFOLIO_KEYS.slice(0, STEPS[step]);

  const nextStep = () => setStep((s) => (s + 1) % STEPS.length);

  const btnLabel = () => {
    if (step === STEPS.length - 1) return "Réduire";
    return `Voir les ${STEPS[step + 1]} réalisations`;
  };

  const BtnIcon = step === 2 ? ChevronUp : ChevronDown;

  return (
    <section id="portfolio" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold tracking-widest text-orange-700 uppercase dark:border-orange-800/60 dark:bg-orange-950/60 dark:text-orange-300">
            Réalisations
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Des sites qui travaillent pour vous
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Chaque projet est conçu pour attirer, convaincre et convertir — pas juste pour être beau.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {visibleSites.map((site, index) => (
            <PortfolioCard key={site.id} site={site} isFirst={index === 0} />
          ))}
        </div>

        {/* Toggle btn */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={nextStep}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-orange-500/50 hover:text-orange-500 active:scale-95"
          >
            {btnLabel()} <BtnIcon size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};