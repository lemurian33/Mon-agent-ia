import {
  Target,
  BarChart3,
  ShieldCheck,
  Users,
  Clock,
  MapPin,
} from "lucide-react";
import Link from "next/link";

type Reason = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const REASONS: Reason[] = [
  {
    icon: Target,
    title: "Uniquement le SEO local",
    description:
      "On ne fait pas tout — on fait une chose parfaitement. Pas de SEO national, pas de pub payante : 100% de notre énergie sur le local.",
  },
  {
    icon: BarChart3,
    title: "Résultats mesurables",
    description:
      "Chaque action est trackée : appels, itinéraires, positions, trafic. Vous voyez l'impact réel, pas des métriques de vanité.",
  },
  {
    icon: ShieldCheck,
    title: "Zéro bullshit",
    description:
      "Pas de contrats longs si les résultats ne suivent pas. Si ça ne marche pas, vous ne payez pas. Simple.",
  },
  {
    icon: Users,
    title: "Interlocuteur unique",
    description:
      "Andy gère votre dossier du début à la fin. Pas de junior qui tâtonne, pas de turnover, pas de Chinese whispers.",
  },
  {
    icon: Clock,
    title: "Réponse en moins de 24h",
    description:
      "Vous avez une question à 22h ? Vous avez une réponse le lendemain matin. L'agilité d'un indépendant, l'expertise d'une agence.",
  },
  {
    icon: MapPin,
    title: "Ancré en Nouvelle-Aquitaine",
    description:
      "On connaît le terrain : les villes, les habitudes de recherche, les concurrents locaux. C'est un vrai avantage stratégique.",
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
            Beaucoup d'agences promettent le top 1 Google. On préfère vous
            montrer comment on y arrive — et pourquoi ça dure.
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
                Garantie résultats 
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Amélioration mesurable dans les 90 premiers jours.
              </p>
            </div>
            <Link
              href="#audit-form"
              className="shrink-0 rounded-md bg-orange-500 px-6 py-2.5
                         text-sm font-semibold text-white transition-all
                         hover:bg-orange-400 hover:shadow-lg
                         hover:shadow-orange-500/20 active:scale-95"
            >
              Tester sans risque →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};