import {
  ShieldCheck,
  Users,
  Clock,
  Bot,
  Fingerprint,
  Gauge,
} from "lucide-react";

type Reason = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const REASONS: Reason[] = [
  {
    icon: Bot,
    title: "Experts Claude & LLM",
    description:
      "On ne revend pas des outils grand public — on maîtrise les modèles de fond : Claude, Gemma, RAG, n8n. Chaque solution est pensée pour votre métier, pas copiée d'un template.",
  },
  {
    icon: ShieldCheck,
    title: "100% conforme RGPD",
    description:
      "Vos données ne quittent pas votre périmètre. Hébergement souverain, droits d'accès documentés, conformité intégrée dès la conception — pas en option.",
  },
  {
    icon: Fingerprint,
    title: "Sur mesure, pas du prêt-à-porter",
    description:
      "Chaque agent, chaque automatisation est construit sur votre contexte réel. Pas de solution générique revendue à 50 clients — on part de vos process, pas des nôtres.",
  },
  {
    icon: Users,
    title: "Interlocuteur unique",
    description:
      "Andy gère votre projet du premier audit au déploiement final. Pas de junior qui tâtonne, pas de turnover, pas de perte d'information entre deux interlocuteurs.",
  },
  {
    icon: Clock,
    title: "Résultats rapides et mesurables",
    description:
      "Premiers agents opérationnels en quelques semaines. Chaque automatisation est trackée : temps gagné, tâches traitées, impact métier réel — pas des métriques de vanité.",
  },
  {
    icon: Gauge,
    title: "Formation & autonomie incluses",
    description:
      "On ne vous rend pas dépendants. Vos équipes sont formées pour piloter, faire évoluer et tirer le maximum de l'écosystème — même sans nous.",
  },
];

export const WhyUs = () => {
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
            Pourquoi nous
          </span>
          <h2
            className="mt-4 text-3xl font-semibold tracking-tight
                       text-balance text-foreground sm:text-4xl"
          >
            Ce qui nous rend différents
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Beaucoup parlent d'I.A. On préfère vous montrer comment on l'intègre concrètement — et pourquoi ça dure.
          </p>
        </div>

        {/* Grille 3×2 */}
        <div
          className="mx-auto mt-16 grid max-w-6xl grid-cols-1
                     gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {REASONS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              data-testid="why-us-card"
              className="flex flex-col gap-4 rounded-2xl border border-border
                         bg-card p-6 transition-all hover:-translate-y-1
                         hover:shadow-md hover:shadow-black/5
                         dark:hover:shadow-black/20"
            >
              <div
                className="flex size-10 items-center justify-center
                           rounded-xl border border-orange-200 bg-orange-50
                           dark:border-orange-800/60 dark:bg-orange-950/40"
              >
                <Icon size={18} className="text-orange-500" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bloc bas — différentiateur fort */}
        <div
          className="mx-auto mt-8 max-w-6xl rounded-2xl border
                     border-orange-500/20 bg-orange-500/5 px-8 py-6"
        >
          <div
            className="flex flex-col items-center justify-between
                       gap-4 text-center sm:flex-row sm:text-left"
          >
            <div>
              <p className="text-sm font-bold text-foreground">
                Premiers résultats en moins de 30 jours
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Ou on ajuste jusqu'à ce que ce soit le cas
              </p>
            </div>
            <Link
              href="#audit-form"
              className="shrink-0 rounded-md bg-orange-500 px-6 py-2.5
                         text-sm font-semibold text-white transition-all
                         hover:bg-orange-400 hover:shadow-lg
                         hover:shadow-orange-500/20 active:scale-95"
            >
              Réserver mon audit gratuit →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};