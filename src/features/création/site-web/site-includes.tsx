import {
  Paintbrush,
  Smartphone,
  Search,
  Zap,
  MessageSquare,
  GraduationCap,
} from "lucide-react";

type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
  badge?: string;
};

const FEATURES: Feature[] = [
  {
    icon: Paintbrush,
    title: "Design sur-mesure",
    description:
      "Maquette unique adaptée à votre activité, votre clientèle cible et votre image de marque. Aucun template générique.",
  },
  {
    icon: Smartphone,
    title: "Responsive & mobile-first",
    description:
      "Entre 70% et 80% de vos clients cherchent depuis leur mobile. Votre site est parfait sur tous les appareils : mobile, tablette et desktop.",
  },
  {
    icon: Search,
    title: "Optimisation SEO native",
    description:
      "Chaque page est construite pour être trouvée sur Google. Architecture, balises, vitesse, contenu — tout est pensé pour le référencement dès le départ.",
    badge: "Inclus SEO",
  },
  {
    icon: Zap,
    title: "Performances maximales",
    description:
      "Score Lighthouse 90+ en performance. Un site lent fait fuir vos clients — on optimise chaque image, chaque ressource pour une expérience fluide.",
  },
  {
    icon: MessageSquare,
    title: "Formulaires de contact",
    description:
      "Formulaires qui couvrent les demandes de vos clients, directement dans votre boîte mail — sans jamais perdre un seul lead.",
  },
  {
    icon: GraduationCap,
    title: "Formation à la gestion",
    description:
      "Vous savez modifier vos textes, ajouter des photos, gérer vos pages en totale autonomie. On vous forme et on reste disponibles.",
  },
];

export const SiteIncludes = () => {
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
            Ce qui est inclus
          </span>
          <h2
            className="mt-4 text-3xl font-semibold tracking-tight
                       text-balance text-foreground sm:text-4xl"
          >
            Un site complet, clé en main
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Chaque aspect de votre site est pensé pour convertir vos visiteurs
            en clients et vous positionner sur Google.
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
              data-testid="site-feature-card"
              className="relative flex flex-col gap-4 rounded-2xl
                         border border-border bg-card p-6 transition-all
                         hover:-translate-y-1 hover:shadow-md
                         hover:shadow-black/5 dark:hover:shadow-black/20"
            >
              {badge && (
                <span
                  data-testid="site-feature-badge"
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
                <p className="mt-2 text-sm leading-relaxed
                              text-muted-foreground">
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