"use client";

import { Typography } from "@/components/nowts/typography";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

type Pillar = {
  id: string;
  num: string;
  tag: string;
  tagColor: string;
  accentColor: string;
  title: string;
  description: string;
  features: string[];
};

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const PILLARS: Pillar[] = [
  {
    id: "installer",
    num: "01",
    tag: "Installer",
    tagColor: "text-orange-700 dark:text-orange-400",
    accentColor: "bg-orange-500",
    title: "Formation & prise en main",
    description:
      "Vous maîtrisez Claude dans votre quotidien d'artisan — sans aucune compétence technique requise.",
    features: [
      "Configuration Claude sur mesure pour votre métier",
      "Routines IA pour chantier & admin",
      "Support WhatsApp inclus",
      "Premiers résultats en moins d'une semaine",
    ],
  },
  {
    id: "automatiser",
    num: "02",
    tag: "Automatiser",
    tagColor: "text-orange-700 dark:text-orange-400",
    accentColor: "bg-orange-500",
    title: "Agents I.A. actifs 24h/24",
    description:
      "Vos agents relancent, publient et gèrent les impayés pendant que vous êtes sur le terrain.",
    features: [
      "Devis & factures relancés automatiquement",
      "Photos chantier → réseaux sociaux",
      "Hébergé en France, RGPD",
      "8–12h récupérées par semaine",
    ],
  },
  {
    id: "souverainete",
    num: "03",
    tag: "Souveraineté",
    tagColor: "text-orange-700 dark:text-orange-400",
    accentColor: "bg-orange-500",
    title: "Infrastructure privée & maîtrisée",
    description:
      "Votre propre écosystème IA hébergé en France. Vos données ne quittent jamais votre infrastructure.",
    features: [
      "VPS dédié, données chez vous",
      "Donna — votre assistant vocal sur-mesure",
      "CRM chantiers connecté",
      "+2 500€ économisés vs secrétariat",
    ],
  },
];

// ─────────────────────────────────────────────
// Pillar Card
// ─────────────────────────────────────────────

const PillarCard = ({ pillar: p }: { pillar: Pillar }) => (
  <div className="relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-5">
    {/* Accent bar */}
    <div className={cn("absolute inset-x-0 top-0 h-0.5", p.accentColor)} />

    {/* Corner number */}
    <span className="absolute right-4 top-2 text-3xl font-medium leading-none text-border select-none">
      {p.num}
    </span>

    {/* Tag */}
    <span className={cn("mb-3 text-[10px] font-bold uppercase tracking-widest", p.tagColor)}>
      {p.tag}
    </span>

    {/* Title */}
    <h3 className="text-sm font-semibold text-foreground leading-snug mb-2">
      {p.title}
    </h3>

    {/* Description */}
    <p className="text-xs leading-relaxed text-muted-foreground mb-4">
      {p.description}
    </p>

    {/* Features */}
    <ul className="mt-auto flex flex-col gap-2">
      {p.features.map((f) => (
        <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
          <span className="mt-0.5 text-orange-500 font-semibold shrink-0">+</span>
          {f}
        </li>
      ))}
    </ul>
  </div>
);

// ─────────────────────────────────────────────
// Main export
// ─────────────────────────────────────────────

export const Approach = () => (
  <section className="py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">

      {/* Header */}
      <div className="mx-auto max-w-3xl text-center mb-10">
        <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold tracking-widest text-orange-700 uppercase dark:border-orange-800/60 dark:bg-orange-950/60 dark:text-orange-300">
          Notre approche
        </span>
        <Typography
          variant="h2"
          className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Trois piliers pour votre transformation I.A.
        </Typography>
        <Typography
          variant="large"
          className="mt-4 text-lg text-muted-foreground text-balance"
        >
          Pour récupérer des heures chaque semaine, il faut les trois : comprendre l'IA, l'automatiser, et garder le contrôle de vos données.
        </Typography>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {PILLARS.map((p) => (
          <PillarCard key={p.id} pillar={p} />
        ))}
      </div>

    </div>
  </section>
);