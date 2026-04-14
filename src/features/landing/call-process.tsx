import { Typography } from "@/components/nowts/typography";
import {
  Search,
  Map,
  Users,
  Globe,
  CalendarRange,
} from "lucide-react";

type ProcessCard = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const PROCESS_CARDS: ProcessCard[] = [
  {
    icon: Search,
    title: "Diagnostic de votre visibilité",
    description:
      "Analyse en direct de votre positionnement Google et identification des opportunités rapides.",
  },
  {
    icon: CalendarRange,
    title: "Stratégie personnalisée",
    description:
      "Élaboration d'un plan d'action sur-mesure adapté à vos objectifs et votre budget.",
  },
  {
    icon: Users,
    title: "Analyse concurrentielle",
    description:
      "Vue d'ensemble de votre marché local et des leviers utilisés par vos concurrents.",
  },
  {
    icon: Globe,
    title: "Conseils actionnables",
    description:
      "Recommandations immédiates que vous pouvez appliquer dès la fin de l'appel.",
  },
  {
    icon: Map,
    title: "Feuille de route prioritaire",
    description:
      "Plan d'action clair avec les étapes à suivre pour développer votre visibilité.",
  },
];

export const CallProcess = () => {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full
                           border border-orange-200 bg-orange-50 px-4 py-1.5
                           text-xs font-semibold tracking-widest
                           text-orange-700 uppercase
                           dark:border-orange-800/60 dark:bg-orange-950/60
                           dark:text-orange-300">
            Déroulement de l'appel
          </span>

          <Typography
            variant="h2"
            className="mt-4 text-3xl font-semibold tracking-tight
                       text-balance sm:text-4xl"
          >
            Ce qui vous attend lors de notre échange
          </Typography>

          <Typography
            variant="large"
            className="text-muted-foreground mt-4 text-lg text-pretty"
          >
            30 minutes pour analyser votre situation et élaborer ensemble
            la stratégie qui vous fera gagner en visibilité.
          </Typography>
        </div>

        {/* ── Grille 3 + 2 ── */}
        <div className="mx-auto mt-16 max-w-5xl space-y-4">

          {/* Ligne 1 — 3 cartes */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {PROCESS_CARDS.slice(0, 3).map((card) => (
              <ProcessCardItem key={card.title} {...card} />
            ))}
          </div>

          {/* Ligne 2 — 2 cartes centrées */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2
                          sm:mx-auto sm:max-w-[calc(66.666%+0.5rem)]">
            {PROCESS_CARDS.slice(3).map((card) => (
              <ProcessCardItem key={card.title} {...card} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const ProcessCardItem = ({ icon: Icon, title, description }: ProcessCard) => {
  return (
    <div
      data-testid="process-card"
      className="flex flex-col gap-4 rounded-2xl border border-border
                 bg-card p-6 transition-all
                 hover:-translate-y-1 hover:shadow-md
                 hover:shadow-black/5 dark:hover:shadow-black/20"
    >
      {/* Icône */}
      <div
        data-testid="process-card-icon"
        className="flex size-10 items-center justify-center
                   rounded-xl border border-orange-200 bg-orange-50
                   dark:border-orange-800/60 dark:bg-orange-950/40"
      >
        <Icon size={18} className="text-orange-500" />
      </div>

      {/* Contenu */}
      <div>
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        <p
          data-testid="process-card-description"
          className="text-muted-foreground mt-2 text-sm leading-relaxed"
        >
          {description}
        </p>
      </div>
    </div>
  );
};