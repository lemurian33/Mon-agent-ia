import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export const CtaBannerSolutions = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
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
            <Calendar size={12} />
            Appel gratuit · 30 min
          </div>

          {/* Titre */}
          <h2
            className="text-3xl font-bold tracking-tight text-balance
                       text-foreground sm:text-4xl"
          >
            Prêt à faire travailler{" "}
            <span className="text-orange-500">l'I.A. pour votre business ?</span>
          </h2>

          {/* Sous-titre */}
          <p
            className="mx-auto mt-4 max-w-xl text-base text-muted-foreground
                       sm:text-lg"
          >
            Réservez un audit gratuit de 30 min. On analyse vos process, on identifie
            ce qui peut être automatisé et on vous remet une feuille de route concrète
            — sans engagement.
          </p>

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
              Réserver mon appel gratuit
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/realisations"
              className="rounded-md border border-border px-8 py-3.5
                         text-sm font-semibold text-foreground transition-all
                         hover:bg-muted"
            >
              Voir les résultats clients
            </Link>
          </div>

          {/* Micro-preuves */}
          <p className="mt-6 text-xs text-muted-foreground">
            +15 audits I.A. réalisés · Réponse en moins de 24h · Conforme RGPD · Bordeaux,Nouvelle-Aquitaine
          </p>
        </div>
      </div>
    </section>
  );
};