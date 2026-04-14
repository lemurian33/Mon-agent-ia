import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const CtaBannerKey = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl border
                     border-orange-500/20 bg-orange-500/5 px-8 py-14
                     text-center sm:px-16"
        >
          {/* Blob déco */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 left-1/2
                       h-64 w-64 -translate-x-1/2 rounded-full
                       bg-orange-500/10 blur-3xl"
          />

          {/* Badge */}
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full
                       border border-orange-200 bg-orange-50 px-4 py-1.5
                       text-xs font-semibold tracking-widest text-orange-700
                       uppercase dark:border-orange-800/60
                       dark:bg-orange-950/60 dark:text-orange-300"
          >
            Premier paiement dans 15 jours
          </div>

          {/* Titre */}
          <h2
            className="text-3xl font-bold tracking-tight text-balance
                       text-foreground sm:text-4xl"
          >
            Lancez votre présence Google{" "}
            <span className="text-orange-500">sans rien avancer</span>
          </h2>

          {/* Sous-titre */}
          <p
            className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground
                       sm:text-lg"
          >
            On crée votre site, on déploie votre SEO local et on gère tout chaque mois.
            Vous payez le premier mois uniquement après avoir vu les premiers résultats.
          </p>

          {/* Prix pill */}
          <div className="mt-6 inline-flex items-baseline gap-1.5 rounded-2xl border border-orange-500/20 bg-card px-5 py-2.5">
            <span className="text-2xl font-bold text-foreground">79</span>
            <span className="text-base text-orange-500">€/mois</span>
            <span className="ml-1.5 text-sm text-muted-foreground">— sans engagement</span>
          </div>

          {/* CTAs */}
          <div
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="#audit-form"
              className="inline-flex items-center gap-2 rounded-md
                         bg-orange-500 px-8 py-3.5 text-sm font-semibold
                         text-white transition-all hover:bg-orange-400
                         hover:shadow-lg hover:shadow-orange-500/30
                         active:scale-95"
            >
              Démarrer maintenant
              <ArrowRight size={16} />
            </Link>
            <Link
              href="#"
              className="rounded-md border border-border px-8 py-3.5
                         text-sm font-semibold text-foreground
                         transition-all hover:bg-muted"
            >
              Voir toute la FAQ →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};