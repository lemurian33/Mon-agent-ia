import {
  ClipboardList,
  ServerCog,
  GraduationCap,
  BarChart2,
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
    icon: ClipboardList,
    title: "Audit & architecture",
    description:
      "On cartographie vos processus critiques, vos contraintes techniques et vos exigences de conformité. En une session de travail, on conçoit l'architecture exacte de votre écosystème IA — agents, LLM, infrastructure.",
  },
  {
    number: "02",
    icon: ServerCog,
    title: "Déploiement & intégration",
    description:
      "Installation du LLM sur votre infrastructure, configuration des agents sur-mesure et connexion à vos outils métier via API. Tout est isolé dans votre périmètre — aucune donnée ne sort.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Livraison & formation équipe",
    description:
      "Déploiement en production, tests end-to-end et formation complète de vos équipes. Vos collaborateurs maîtrisent leur écosystème IA dès le premier jour — autonomes et opérationnels.",
  },
  {
    number: "04",
    icon: BarChart2,
    title: "Suivi, SLA & évolution",
    description:
      "Reporting mensuel des performances, support prioritaire dédié et ajustements continus selon vos besoins. Votre infrastructure IA évolue avec votre organisation — pas l'inverse.",
  },
];

export const EntProcess = () => {
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
            De l'audit à l'infrastructure souveraine
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Un déploiement structuré en 4 étapes pour une infrastructure IA
            sur-mesure — robuste, conforme et opérationnelle rapidement.
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