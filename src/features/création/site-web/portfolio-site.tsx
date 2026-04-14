"use client";

import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

type PortfolioSite = {
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

const PORTFOLIO_SITES: PortfolioSite[] = [
   {
    id: "unlcoaching",
    client: "Unlcoaching",
    category: "Coach sportif · Gradignan",
    tags: ["Site vitrine", "SEO local", "Leads"],
    description:
      "Site orienté capture de leads pour un coach sportif face à une forte concurrence locale sur Google.",
    highlights: [
      "Landing page optimisée pour la prise de contact",
      "Stratégie SEO local marque & mots-clés",
      "Création de contenu I.A thématique",
      "Campagne d'avis clients automatisée",
    ],
    href: "https://www.unlcoaching.com",
    images: [
      "/images/unl-home.webp",
      "/images/unl-blog.webp",
      "/images/unl-dashboard.webp",
      "/images/unl-pricing.webp",
    ],
    alts: [
      "Page d'accueil site Unlcoaching coach sportif Gradignan",
      "page articles de blog Unlcoaching Gradignan",
      "Formulaire de contact coach sportif Gradignan",
      "Page services coaching sportif personnalisé",
    ],
  },
  {
    id: "mon-agent-ai",
    client: "Mon Agent I.A",
    category: "Intelligence Artificielle · Bordeaux",
    tags: ["Site vitrine", "Agent I.A", "SEO"],
    description:
      "Site vitrine pour une agence spécialisée en agents I.A — conçu pour démontrer l'expertise et générer des demandes de démo.",
    highlights: [
      "Design moderne axé crédibilité tech",
      "Pages cas d'usage par secteur d'activité",
      "SEO ciblé requêtes agent I.A & automatisation",
      "Formulaire de demande de démo optimisé",
    ],
    href: "https://www.mon-agent-ai.com",
    images: [
      "/images/mon-agent-ai-hero.webp",
      "/images/mon-agent-ai-service.webp",
      "/images/mon-agent-ai-pricing.webp",
      "/images/dashboard-admin.webp",
    ],
    alts: [
      "Page d'accueil Mon Agent I.A Bordeaux",
      "Page services Mon Agent I.A Bordeaux",
      "Page tarifs Mon Agent I.A Bordeaux",
      "Page admin général Mon Agent I.A Bordeaux",
    ],
  },
  {
    id: "expresse-depanage",
    client: "Expresse Dépannage",
    category: "Dépannage · Gironde",
    tags: ["Site vitrine", "SEO urgence", "Leads"],
    description:
      "Site d'urgence optimisé pour capter des appels immédiats — conçu pour apparaître en premier sur les recherches de dépannage.",
    highlights: [
      "CTA appel direct visible en haut de page",
      "SEO local hyper-ciblé requêtes d'urgence",
      "Pages villes pour toute la Gironde",
      "Temps de chargement < 1s pour mobile",
    ],
    href: "/realisations/expresse-depanage",
    images: [
      "/images/express-home.webp",
      "/images/express-services.webp",
      "/images/express-services1.webp",
      "/images/express-actualité.webp",
    ],
    alts: [
      "Page d'accueil Expresse Dépannage",
      "Services dépannage urgence Bordeaux",
      "Contact dépannage urgent Gironde",
      "Actulité intervention courante Gironde",
    ],
  },
  {
    id: "dr-campagne",
    client: "Cabinet Dr Campagne F.",
    category: "Santé · Médoc",
    tags: ["Site RDV", "Agent I.A", "GBP"],
    description:
      "Site médical avec prise de rendez-vous en ligne et agent vocal I.A pour gérer le planning automatiquement.",
    highlights: [
      "Prise de RDV en ligne intégrée",
      "Agent I.A vocal pour le calendrier",
      "Optimisation GBP spécialités médicales",
      "Design sobre et rassurant pour les patients",
    ],
    href: "/realisations/dr-campagne",
    images: [
      "/portfolio/dr-campagne-1.jpg",
      "/portfolio/dr-campagne-2.jpg",
      "/portfolio/dr-campagne-3.jpg",
      "/portfolio/dr-campagne-4.jpg",
    ],
    alts: [
      "Page d'accueil cabinet médical Dr Campagne Médoc",
      "Prise de rendez-vous en ligne Dr Campagne",
      "Services médicaux cabinet Dr Campagne F.",
      "Contact cabinet médical Médoc",
    ],
  },
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

const PortfolioCard = ({ site, isFirst }: { site: PortfolioSite; isFirst: boolean }) => {
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

const STEPS = [1, 3, PORTFOLIO_SITES.length] as const;

export const PortfolioShowcase = () => {
  const [step, setStep] = useState(0);
  const visibleSites = PORTFOLIO_SITES.slice(0, STEPS[step]);

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