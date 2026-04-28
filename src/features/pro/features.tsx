import { Typography } from "@/components/nowts/typography";
import {
  Users,
  Mail,
  CalendarClock,
  BarChart3,
  Repeat2,
  BrainCircuit,
} from "lucide-react";

type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
  badge?: string;
};

const FEATURES: Feature[] = [
  {
    icon: Users,
    title: "Génération de leads automatique",
    description:
      "Votre agent détecte, qualifie et enrichit des prospects en continu — selon vos critères métier, votre zone géographique et vos priorités. Fini la prospection manuelle.",
    badge: "Acquisition",
  },
  {
    icon: Mail,
    title: "Campagnes email multi-step",
    description:
      "Séquences personnalisées déclenchées automatiquement selon le comportement de chaque prospect. Relances, suivi, prise de rendez-vous — tout roule sans vous.",
    badge: "Engagement",
  },
  {
    icon: CalendarClock,
    title: "Planification & rappels intelligents",
    description:
      "L'agent gère votre agenda, envoie des invitations, relance les contacts silencieux et adapte les priorités en temps réel. Vous ne ratez plus aucune opportunité.",
    badge: "Organisation",
  },
  {
    icon: BarChart3,
    title: "Dashboard de performance en temps réel",
    description:
      "Leads générés, taux de contact, devis envoyés, CA potentiel — tout est visible en un coup d'œil. Pilotez votre activité avec des données fraîches, pas des intuitions.",
    badge: "Pilotage",
  },
  {
    icon: Repeat2,
    title: "Synchronisation avec vos outils existants",
    description:
      "CRM, Gmail, Google Calendar, Notion, Slack — votre agent s'intègre dans ce que vous utilisez déjà. Pas de migration, pas de friction, pas de double saisie.",
    badge: "Intégration",
  },
  {
    icon: BrainCircuit,
    title: "Agents IA multi-rôles coordonnés",
    description:
      "Marketing, opérations, support, qualification — chaque fonction dispose de son propre agent spécialisé, coordonné par un orchestrateur central. Une vraie équipe IA.",
    badge: "Architecture",
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
            Fonctionnalités
          </span>

          <Typography
            variant="h2"
            className="mt-4 text-3xl font-semibold tracking-tight
                       text-balance sm:text-4xl"
          >
            Ce que ça fait concrètement
          </Typography>

          <Typography
            variant="large"
            className="text-muted-foreground mt-4 text-lg text-pretty"
          >
            Des agents spécialisés qui travaillent pour vous — 24h/24, 7j/7,
            sans erreur ni oubli.
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