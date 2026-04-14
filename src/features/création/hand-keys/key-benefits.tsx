import { CheckCircle } from "lucide-react";

const BENEFITS = [
  "Un site web professionnel créé et hébergé sans rien avancer",
  "Votre fiche Google optimisée pour apparaître dans le top 3 local",
  "Du contenu publié chaque semaine pour nourrir votre référencement",
  "Un SEO local déployé dès le premier mois pour capter vos futurs clients",
  "Un suivi mensuel avec rapport détaillé — vous savez exactement ce qui progresse",
  "Un interlocuteur unique qui gère tout, pendant que vous faites votre métier",
] as const;

export const KeyBenefits = () => {
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
            Résultats
          </span>
          <h2
            className="mt-4 text-3xl font-semibold tracking-tight
                       text-balance text-foreground sm:text-4xl"
          >
            Pourquoi le clé en main change tout
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Fini la dispersion — un seul partenaire gère votre présence Google de A à Z, chaque mois.
          </p>
        </div>

        {/* Layout 2 colonnes */}
        <div
          className="mx-auto mt-16 grid max-w-6xl grid-cols-1
                     gap-8 lg:grid-cols-[1fr_auto]"
        >
          {/* Gauche — liste bénéfices */}
          <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-8">
            <p className="mb-6 text-sm font-bold text-foreground">
              Ce que vous gagnez concrètement :
            </p>
            <ul className="flex flex-col gap-3">
              {BENEFITS.map((b) => (
                <li
                  key={b}
                  data-testid="clé-en-main-benefit"
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <CheckCircle size={15} className="mt-0.5 shrink-0 text-orange-500" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Droite — métriques */}
          <div className="flex flex-col gap-4 lg:w-52">

            {/* Délai résultats */}
            <div
              data-testid="clé-en-main-metric"
              className="flex flex-col items-center justify-center
                         rounded-2xl border border-border bg-card p-8
                         text-center"
            >
              <span className="text-5xl font-bold text-orange-500">
                30j
              </span>
              <span className="mt-2 text-xs leading-relaxed text-muted-foreground">
                premiers résultats visibles
              </span>
            </div>

            {/* Tout inclus */}
            <div
              data-testid="clé-en-main-metric"
              className="flex flex-col items-center justify-center
                         rounded-2xl border border-border bg-card p-8
                         text-center"
            >
              <span className="text-4xl font-bold text-orange-500">
                79€
              </span>
              <span className="mt-2 text-xs font-semibold text-foreground">
                tout inclus
              </span>
              <span className="mt-1 text-xs text-muted-foreground">
                /mois, sans engagement
              </span>
            </div>

            {/* Zéro avance */}
            <div
              data-testid="clé-en-main-metric"
              className="flex flex-col items-center justify-center
                         rounded-2xl border border-orange-500/20
                         bg-orange-500/5 p-8 text-center"
            >
              <span className="text-4xl font-bold text-orange-500">
                0€
              </span>
              <span className="mt-2 text-xs font-semibold text-foreground">
                à avancer
              </span>
              <span className="mt-1 text-xs text-muted-foreground">
                1er paiement dans 15j
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};