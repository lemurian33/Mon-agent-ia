import { Typography } from "@/components/nowts/typography";
import {
  ServerCog,
  ShieldCheck,
  Infinity,
  Puzzle,
  HeadphonesIcon,
  Building2,
} from "lucide-react";

type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
  badge?: string;
};

const FEATURES: Feature[] = [
  {
    icon: Infinity,
    title: "Agents IA illimités & sur-mesure",
    description:
      "Déployez autant d'agents que votre organisation en a besoin — marketing, finance, RH, support, ops. Chaque agent est conçu spécifiquement pour vos process, vos données et vos objectifs.",
    badge: "Sur-mesure",
  },
  {
    icon: ServerCog,
    title: "LLM local hébergé chez vous",
    description:
      "Votre modèle IA tourne sur votre propre infrastructure. Zéro dépendance cloud externe, zéro donnée qui sort de votre périmètre. Vous gardez la maîtrise totale.",
    badge: "Souveraineté",
  },
  {
    icon: ShieldCheck,
    title: "Conformité RGPD & souveraineté des données",
    description:
      "Architecture pensée pour les exigences réglementaires les plus strictes. Données hébergées en EU, traçabilité complète, isolation garantie. Audit-ready dès le départ.",
    badge: "Conformité",
  },
  {
    icon: Puzzle,
    title: "Intégrations API avancées & webhooks",
    description:
      "Connectez n'importe quel outil métier via API REST, webhooks ou connecteurs natifs. ERP, CRM, SIRH, BI — votre infrastructure existante devient le socle de votre écosystème IA.",
    badge: "Intégration",
  },
  {
    icon: Building2,
    title: "Orchestrateur central multi-départements",
    description:
      "Un coordinateur IA supervise l'ensemble de vos agents en temps réel. Priorisation, routage, escalade — chaque flux est orchestré intelligemment à l'échelle de votre entreprise.",
    badge: "Architecture",
  },
  {
    icon: HeadphonesIcon,
    title: "SLA garanti & support prioritaire dédié",
    description:
      "Un interlocuteur dédié, des engagements de disponibilité contractuels et un reporting mensuel des performances. Vous n'êtes jamais seul face à votre infrastructure IA.",
    badge: "Support",
  },
];

export const Features = () => {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="inline-flex items-center rounded-full
                       border border-orange-200 bg-orange-50 px-4 py-1.5
                       text-xs font-semibold tracking-widest
                       text-orange-700 uppercase
                       dark:border-orange-800/60 dark:bg-orange-950/60
                       dark:text-orange-300"
          >
            Fonctionnalités Premium
          </span>

          <Typography
            variant="h2"
            className="mt-4 text-3xl font-semibold tracking-tight
                       text-balance sm:text-4xl"
          >
            Une infrastructure IA à la hauteur de votre entreprise
          </Typography>

          <Typography
            variant="large"
            className="text-muted-foreground mt-4 text-lg text-pretty"
          >
            Souveraineté des données, agents illimités, LLM hébergé chez vous.
            Tout est conçu sur-mesure — rien n'est générique.
          </Typography>
        </div>

        {/* ── Grid ── */}
        <div
          className="mx-auto mt-16 grid max-w-6xl grid-cols-1
                     gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>

      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description, badge }: Feature) => {
  return (
    <div
      className="relative flex flex-col rounded-2xl border border-border
                 bg-card px-6 pb-8 pt-6 transition-all
                 hover:-translate-y-1 hover:shadow-md
                 hover:shadow-black/5 dark:hover:shadow-black/20"
    >
      {/* Badge métier en filigrane */}
      {badge && (
        <span
          className="absolute right-5 top-4 font-mono text-xs
                     font-semibold uppercase tracking-widest
                     text-orange-500/25 select-none"
        >
          {badge}
        </span>
      )}

      {/* Icône */}
      <div
        className="relative z-10 mb-4 flex size-10 items-center
                   justify-center rounded-xl border border-orange-200
                   bg-orange-50 dark:border-orange-800/60
                   dark:bg-orange-950/40"
      >
        <Icon size={18} className="text-orange-500" />
      </div>

      {/* Contenu */}
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};