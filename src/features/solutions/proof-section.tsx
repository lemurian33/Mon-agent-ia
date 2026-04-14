import { Clock, BotMessageSquare ,FileText ,Star } from "lucide-react";

type Proof = {
  icon: React.ElementType;
  value: string;
  label: string;
  sub: string;
};

const PROOFS: Proof[] = [
  {
    icon: Clock,
    value: "-68%",
    label: "de temps admin",
    sub: "Tâches automatisées sur nos clients actifs",
  },
  {
    icon: BotMessageSquare,
    value: "+487%",
    label: "de RDV automatisés",
    sub: "Cabinet médical — Dr Campagne F.",
  },
  {
    icon: FileText,
    value: "+340%",
    label: "de devis générés",
    sub: "Artisan menuisier — Segment.C",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "satisfaction client",
    sub: "Basé sur les avis Google",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "En quelques semaines, mes devis sont générés automatiquement et mes relances tournent 24h/24. Andy a tout mis en place, je me concentre sur mon métier.",
    author: "Rui De Carvalho",
    role: "Artisan menuisier — Segment.C, Bordeaux",
    growth: "+340% de devis",
  },
  {
    quote:
      "La gestion des rendez-vous est entièrement automatisée et 100% conforme RGPD. La charge de travail de mon secrétariat a été divisée par deux.",
    author: "Dr Campagne F.",
    role: "Médecin généraliste — Cabinet Vendays-Montalivet",
    growth: "+487% de RDV",
  },
  {
    quote:
      "Je suivais 3x moins de clients avant. Maintenant les tâches répétitives sont automatisées et je peux enfin me concentrer sur l'accompagnement.",
    author: "Jeremy P.",
    role: "Coach sportif — Unlcoaching, Gradignan",
    growth: "-68% tâches admin",
  },
];

export const ProofSection = () => {
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
            Preuves
          </span>
          <h2
            className="mt-4 text-3xl font-semibold tracking-tight
                       text-balance text-foreground sm:text-4xl"
          >
            Des chiffres, pas des promesses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Moyennes constatées sur l'ensemble de nos clients actifs sur 90 jours.
          </p>
        </div>

        {/* Stats */}
        <div
          className="mx-auto mt-16 grid max-w-5xl grid-cols-2
                     gap-4 sm:grid-cols-4"
        >
          {PROOFS.map(({ icon: Icon, value, label, sub }) => (
            <div
              key={label}
              data-testid="proof-stat"
              className="flex flex-col rounded-2xl border border-border
                         bg-card p-6 text-center"
            >
              <div
                className="mx-auto mb-3 flex size-10 items-center
                           justify-center rounded-xl border
                           border-orange-200 bg-orange-50
                           dark:border-orange-800/60 dark:bg-orange-950/40"
              >
                <Icon size={18} className="text-orange-500" />
              </div>
              <span className="text-3xl font-bold text-orange-500">
                {value}
              </span>
              <span className="mt-1 text-sm font-semibold text-foreground">
                {label}
              </span>
              <span className="mt-1 text-xs text-muted-foreground">{sub}</span>
            </div>
          ))}
        </div>

        {/* Témoignages */}
        <div
          className="mx-auto mt-12 grid max-w-5xl grid-cols-1
                     gap-4 sm:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.author}
              data-testid="proof-testimonial"
              className="flex flex-col rounded-2xl border border-border
                         bg-card p-6"
            >
              {/* Étoiles */}
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className="fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              <blockquote className="flex-1 text-sm leading-relaxed
                                     text-muted-foreground">
                "{t.quote}"
              </blockquote>

              <figcaption className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.author}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                <span
                  className="rounded-md bg-orange-500/10 py-1
                             text-xs font-bold text-orange-500"
                >
                  {t.growth}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
};