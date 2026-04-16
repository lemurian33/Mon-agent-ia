/**
 * RealisationsHero
 *
 * Section hero de la page Réalisations.
 * Design : badge pill orange, titre centré, sous-titre, 2 CTAs arrondis.
 * Pas d'image / illustration.
 */
import Link from "next/link";

export const RealisationsHero = () => {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

        {/* Badge pill */}
        <span className="inline-flex items-center rounded-full
                      border border-orange-200 bg-orange-50 px-4 py-1.5
                      text-xs font-semibold tracking-widest text-orange-700
                      uppercase dark:border-orange-800/60 dark:bg-orange-950/60
                      dark:text-orange-300">
          Cas clients I.A. — résultats réels
        </span>

        {/* Titre */}
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
          Des automatisations I.A. qui{" "}
          <span className="text-orange-500">tournent pour de vrai.</span>
        </h1>

        {/* Sous-titre */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Pas de démos. Pas de promesses. Ces entreprises ont intégré l'I.A.
          dans leurs process — et mesurent aujourd'hui un gain de temps
          et de revenus concrets.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#audit-form"
            className="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/30 active:scale-95"
          >
            Commander mon audit →
          </Link>
          <Link
            href="/solutions"
            className="border-border bg-muted/30 text-foreground hover:bg-muted rounded-md border px-6 py-3 text-sm font-semibold transition-all active:scale-95"
          >
            Voir nos solutions
          </Link>
        </div>

      </div>
    </section>
  );
};