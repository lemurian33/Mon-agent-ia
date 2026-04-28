import {
  ScanSearch,
  Settings2,
  PackageCheck,
  LineChart,
} from "lucide-react";

type Step = {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    icon: ScanSearch,
    title: "Audit & cadrage",
    description:
      "On analyse vos process métier, vos outils existants et vos objectifs. En 30 minutes, on identifie exactement quels agents déployer et dans quel ordre pour un impact immédiat.",
  },
  {
    number: "02",
    icon: Settings2,
    title: "Setup & intégration",
    description:
      "Configuration de vos agents, connexion à vos outils (Gmail, CRM, Calendar…) et paramétrage des workflows automatisés. Tout est adapté à votre métier, rien de générique.",
  },
  {
    number: "03",
    icon: PackageCheck,
    title: "Livraison & formation",
    description:
      "Déploiement en production, tests end-to-end et prise en main guidée. Vous maîtrisez votre écosystème IA dès le premier jour — opérationnel en moins de 7 jours.",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Suivi & optimisation",
    description:
      "Reporting mensuel des performances, ajustements continus et intégration des nouvelles opportunités IA. Votre système s'améliore dans le temps, pas le contraire.",
  },
];

export const ProProcess = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="inline-flex items-center rounded-full
                       border border-orange-200 bg-orange-50 px-4 py-1.5
                       text-xs font-semibold tracking-widest text-orange-700
                       uppercase dark:border-orange-800/60
                       dark:bg-orange-950/60 dark:text-orange-300"
          >
            Processus
          </span>
          <h2
            className="mt-4 text-3xl font-semibold tracking-tight
                       text-balance text-foreground sm:text-4xl"
          >
            De l'audit à l'automatisation
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Un déploiement structuré en 4 étapes pour que vos agents soient
            opérationnels — vite et sans friction.
          </p>
        </div>

        {/* Grille 4 étapes */}
        <div
          className="mx-auto mt-16 grid max-w-7xl grid-cols-1
                     gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STEPS.map(({ number, icon: Icon, title, description }) => (
            <div
              key={number}
              className="relative flex flex-col rounded-2xl border
                         border-border bg-card px-4 pb-8 pt-6
                         transition-all hover:-translate-y-1
                         hover:shadow-md hover:shadow-black/5
                         dark:hover:shadow-black/20"
            >
              {/* Numéro filigrane */}
              <span
                className="absolute right-4 top-3 font-mono text-5xl
                           font-bold leading-none text-orange-500/20
                           select-none"
              >
                {number}
              </span>

              {/* Icône */}
              <div
                className="relative z-10 mb-4 flex size-10 items-center
                           justify-center rounded-xl border
                           border-orange-200 bg-orange-50
                           dark:border-orange-800/60 dark:bg-orange-950/40"
              >
                <Icon size={18} className="text-orange-500" />
              </div>

              <h3 className="text-base font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};