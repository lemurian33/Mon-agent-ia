import { Typography } from "@/components/nowts/typography";
import Link from "next/link";
import {
  Phone, MapPin, MousePointerClick,
  TrendingUp, Star, Navigation,
  Calendar, Activity, Zap,
} from "lucide-react";

type Metrique = {
  icon: React.ElementType;
  label: string;
  delta: string;
  highlight?: boolean;
};

type ResultCard = {
  client: string;
  ville: string;
  metriques: Metrique[];
  tags: string[];
};

const RESULTS: ResultCard[] = [
  {
    client: "Unlcoaching | Coaching sportif ",
    ville: "Gradignan",
    metriques: [
      { icon: Phone,            label: "Appels",      delta: "+202%", highlight: true },
      { icon: Navigation,       label: "Itinéraires", delta: "+116%", highlight: true },
      { icon: MousePointerClick, label: "Clics site",  delta: "+285%", highlight: true },
    ],
    tags: ["Création site","SEO local", "Google Business", "I.A"],
  },
  {
    client: "Segment.C | Artisan menuisier",
    ville: "Bordeaux",
    metriques: [
      { icon: TrendingUp, label: "Demandes", delta: "+340%", highlight: true },
      { icon: Phone,      label: "Appels",   delta: "+189%", highlight: true },
      { icon: Star,       label: "Position", delta: "Top 10", highlight: false },
    ],
    tags: ["Création site", "SEO local", "Google Business","I.A"],
  },
  {
    client: "Cabinet Medical | Dr Campagne F. ",
    ville: "Vendays-Montalivet",
    metriques: [
      { icon: Calendar, label: "RDV en ligne",  delta: "+487%", highlight: true },
      { icon: Activity, label: "Visites site",  delta: "+334%", highlight: true },
      { icon: Phone,    label: "Appels",        delta: "+195%", highlight: true },
    ],
    tags: ["Création site","Google Business","I.A"],
  },
];

export const Results = () => {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">

        {/* ── Header ── */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full
                           border border-orange-200 bg-orange-50 px-4 py-1.5
                           text-xs font-semibold tracking-widest
                           text-orange-700 uppercase
                           dark:border-orange-800/60 dark:bg-orange-950/60
                           dark:text-orange-300">
            Résultats
          </span>

          <Typography
            variant="h2"
            className="mt-4 text-3xl font-semibold tracking-tight
                       text-balance sm:text-4xl"
          >
            On traque vos résultats 
          </Typography>

          <Typography
            variant="large"
            className="text-muted-foreground mt-4 text-lg text-pretty"
          >
            Ce que nos clients ont gagné en passant à la vitesse supérieure sur Google.
          </Typography>
        </div>

        {/* ── Grille ── */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1
                        gap-4 sm:grid-cols-3">
          {RESULTS.map((result) => (
            <ResultCardItem key={result.client} {...result} />
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="mt-12 text-center">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-1.5 text-sm
                       font-semibold text-orange-500 transition-colors
                       hover:text-orange-400"
          >
            Voir nos réalisations →
          </Link>
        </div>
      </div>
    </section>
  );
};

const ResultCardItem = ({ client, ville, metriques, tags }: ResultCard) => {
  return (
    <div
      data-testid="result-card"
      className="flex flex-col rounded-2xl border border-border
                 bg-card p-6 transition-all
                 hover:-translate-y-1 hover:shadow-md
                 hover:shadow-black/5 dark:hover:shadow-black/20"
    >
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-foreground">{client}</h3>
        <p className="text-xs text-muted-foreground">{ville}</p>
      </div>

      {/* Métriques */}
      <div className="flex flex-col gap-2.5">
        {metriques.map((m) => (
          <div
            key={m.label}
            data-testid="result-metric"
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2 text-xs
                            text-muted-foreground">
              <m.icon size={13} className="shrink-0" />
              {m.label}
            </div>
            <span
              className={
                m.highlight
                  ? "text-xs font-semibold text-orange-500"
                  : "text-xs font-semibold text-muted-foreground"
              }
            >
              {m.delta}
            </span>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            data-testid="result-tag"
            className="rounded-md border border-border bg-muted/50
                       px-1 py-0.5 text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};