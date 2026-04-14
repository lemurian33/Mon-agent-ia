import { Phone, Navigation, MousePointerClick, Star } from "lucide-react";

type Proof = {
  icon: React.ElementType;
  value: string;
  label: string;
  sub: string;
};

const PROOFS: Proof[] = [
  {
    icon: Phone,
    value: "+280%",
    label: "d'appels en moyenne",
    sub: "Sur nos clients GBP actifs",
  },
  {
    icon: Navigation,
    value: "+240%",
    label: "d'itinéraires",
    sub: "Demandes depuis Google Maps",
  },
  {
    icon: MousePointerClick,
    value: "+310%",
    label: "de clics vers le site",
    sub: "Trafic organique qualifié",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "satisfaction client",
    sub: "Basé sur les avis Google",
  },
];

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  growth: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "En 6 semaines, mes appels ont triplé. Andy a tout géré de A à Z, je me suis concentré sur mon métier.",
    author: "Rui De Carvalho",
    role: "Artisant menuisier — Bordeaux",
    growth: "+156% d'appels",
  },
  {
    quote:
      "Ma fiche Google était invisible. Maintenant je refuse des clients. Le ROI est dingue pour le prix.",
    author: "Dr Campagne F.",
    role: "Médecin Généraliste — Montalivet",
    growth: "+314% de rdv",
  },
  {
    quote:
      "J'avais essayé seul pendant 1 an. En 2 mois avec Andy , j'ai atteint le top 5 sur mes mots-clés.",
    author: "Jérémy Prat",
    role: "Coach sportif — Gradignan",
    growth: "Top 5 Google",
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