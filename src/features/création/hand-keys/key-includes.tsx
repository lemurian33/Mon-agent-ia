import {
  Globe,
  MapPin,
  FileText,
  BarChart2,
  Server,
  Headphones,
} from "lucide-react";

type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
  badge?: string;
};

const FEATURES: Feature[] = [
  {
    icon: Globe,
    title: "Site web professionnel",
    description:
      "Design sur-mesure, responsive et optimisé SEO dès la mise en ligne. Hébergement inclus, zéro frais cachés.",
    badge: "Inclus",
  },
  {
    icon: MapPin,
    title: "SEO local + Fiche Google",
    description:
      "Votre fiche Google Business optimisée et votre SEO local déployé pour apparaître en tête sur les recherches de votre zone.",
  },
  {
    icon: FileText,
    title: "Contenu hebdomadaire",
    description:
      "Un article, un post Google ou une mise à jour publiée chaque semaine pour nourrir votre référencement en continu.",
  },
  {
    icon: Server,
    title: "Hébergement & maintenance",
    description:
      "Votre site est hébergé, mis à jour et surveillé chaque mois. Aucune intervention technique de votre côté.",
    badge: "Inclus",
  },
  {
    icon: BarChart2,
    title: "Suivi des performances",
    description:
      "Rapport mensuel détaillé : positions, appels, itinéraires, trafic organique. Vous savez exactement ce qui progresse.",
  },
  {
    icon: Headphones,
    title: "Support prioritaire",
    description:
      "Accès direct par email et WhatsApp. Un interlocuteur unique qui connaît votre dossier et répond dans la journée.",
    badge: "Inclus",
  },
];

export const KeyIncludes = () => {
  return (
    <section id="included" className="py-24 sm:py-32">
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
            Ce qui est inclus
          </span>
          <h2
            className="mt-4 text-3xl font-semibold tracking-tight
                       text-balance text-foreground sm:text-4xl"
          >
            Tout ce dont vous avez besoin, rien de superflu
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Un seul abonnement couvre l'intégralité de votre présence Google —
            site, SEO, contenu, suivi et support.
          </p>
        </div>

        {/* Grille 3×2 */}
        <div
          className="mx-auto mt-16 grid max-w-6xl grid-cols-1
                     gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map(({ icon: Icon, title, description, badge }) => (
            <div
              key={title}
              data-testid="cle-en-main-feature-card"
              className="relative flex flex-col gap-4 rounded-2xl
                         border border-border bg-card p-6 transition-all
                         hover:-translate-y-1 hover:shadow-md
                         hover:shadow-black/5 dark:hover:shadow-black/20"
            >
              {badge && (
                <span
                  data-testid="cle-en-main-feature-badge"
                  className="absolute right-4 top-4 rounded-full
                             bg-orange-500 px-2.5 py-0.5 text-xs
                             font-bold text-white"
                >
                  {badge}
                </span>
              )}
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

      </div>
    </section>
  );
};