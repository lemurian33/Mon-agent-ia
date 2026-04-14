import { Typography } from "@/components/nowts/typography";
import { ClipboardList, Compass, Rocket, BarChart2, HeartHandshake, Globe } from "lucide-react";

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
    title: "Réservez votre appel stratégique",
    description:
      "On analyse votre situation ensemble: concurrents, mots-clés, opportunités manquées. 30 min chrono. Pas de blabla, que du concret pour identifier vos leviers de croissance sur Google.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Élaboration de votre stratégie",
    description:
      "Vous repartez avec un plan concret, pas des promesses, mais des actions précises et priorisées. On vous explique pourquoi chaque levier est important et comment il va booster votre visibilité locale.",
  },
  {
    number: "03",
    icon: Globe,
    title: "Création de votre site web*",
    description:
      "Votre site deviendra un aiment à client avec des leads. Existant ? On l'optimise. Absent ? On en crée un rapidement et prêt à convertir dès le premier jour.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Mise en application + suivi",
    description:
      "Nous mettons en œuvre les optimisations et suivons l'évolution de vos positions et leads générés chaque mois.",
  },
  {
    number: "05",
    icon: BarChart2,
    title: "Suivi & reporting mensuel",
    description:
      "Chaque mois, des chiffres qui parlent. Positions, trafic, leads : vous savez exactement ce que ça rapporte.",
  },
  {
    number: "06",
    icon: HeartHandshake,
    title: "Optimisation continue",
    description:
      "Google change. On s'adapte avant vous. La stratégie évolue pour que vous gardiez toujours une longueur d'avance sur vos concurrents .",
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
            De l'appel au premier lead — voici comment ça se passe
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