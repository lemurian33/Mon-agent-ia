import { Typography } from "@/components/nowts/typography";
import { CalendarCheck, Bot, ShieldCheck, DatabaseBackup , BarChart2, Server  } from "lucide-react";

type Step = {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  { 
    number: "01",
    icon: CalendarCheck,
    title: "Réservez votre audit I.A. gratuit",
    description:
      "On analyse vos process métier ensemble : tâches répétitives, points de friction, opportunités d'automatisation. 30 min chrono. Pas de blabla — on identifie concrètement où l'I.A. peut vous faire gagner du temps et de l'argent.",
  },
  {
    number: "02",
    icon: Bot,
    title: "Votre feuille de route I.A. sur mesure",
    description:
      "Vous repartez avec un plan d'intégration concret et priorisé, adapté à votre métier. On vous explique quels outils, quels modèles, et dans quel ordre les déployer pour un impact immédiat.",
  },
  {
    number: "03",
    icon: Server,
    title: "Déploiement de votre écosystème I.A.",
    description:
      "On met en place vos agents, automatisations et workflows I.A. — intégrés directement dans vos outils existants. Opérationnel rapidement, sans friction pour vos équipes.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Intégration RGPD & sécurisée",
    description:
      "Chaque solution est configurée pour respecter le RGPD et rester souveraine. Vos données restent les vôtres — on vous guide sur l'hébergement, les droits d'accès et la conformité dès le départ.",
  },
  {
    number: "05",
    icon: BarChart2,
    title: "Formation & montée en compétences",
    description:
      "Vous apprenez à utiliser, piloter et faire évoluer l'écosystème en autonomie. Sessions pratiques, cas concrets issus de votre métier — pas de théorie inutile.",
  },
  {
    number: "06",
    icon: DatabaseBackup  ,
    title: "Optimisation & accompagnement continu",
    description:
      "L'I.A. évolue vite. On reste à vos côtés pour ajuster, améliorer et intégrer les nouvelles opportunités — pour que vous gardez toujours une longueur d'avance.",
  },
];

export const HowItWorks = () => {
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
            Processus
          </span>

          <Typography
            variant="h2"
            className="mt-4 text-3xl font-semibold tracking-tight
                       text-balance sm:text-4xl"
          >
            Comment ça marche
          </Typography>

          <Typography
            variant="large"
            className="text-muted-foreground mt-4 text-lg text-pretty"
          >
            De l'appel à la livraison — voici comment ça se passe
          </Typography>
        </div>

        {/* ── Étapes ── */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1
                        gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>

      </div>
    </section>
  );
};

const StepCard = ({ number, icon: Icon, title, description }: Step) => {
  return (
    <div
      data-testid="step-card"
      className="relative flex flex-col rounded-2xl border border-border
                 bg-card px-6 pb-8 pt-6 transition-all
                 hover:-translate-y-1 hover:shadow-md
                 hover:shadow-black/5 dark:hover:shadow-black/20"
    >
      {/* Numéro en filigrane */}
      <span className="absolute right-5 top-4 font-mono text-6xl
                       font-bold leading-none text-orange-500/20
                       select-none">
        {number}
      </span>

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
      <h3 className="text-base font-semibold text-foreground">
        {title}
      </h3>
      <p
        data-testid="step-description"
        className="text-muted-foreground mt-2 text-sm leading-relaxed"
      >
        {description}
      </p>

    </div>
  );
};