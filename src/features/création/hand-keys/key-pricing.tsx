import Link from "next/link";
import { Check } from "lucide-react";

const CLE_EN_MAIN_FEATURES_LEFT = [
  "Site web professionnel inclus",
  "SEO local déployé + GBP",
  "Création de contenu hebdomadaire",
  "Hébergement & maintenance inclus",
] as const;

const CLE_EN_MAIN_FEATURES_RIGHT = [
  "Suivi des performances mensuel",
  "Support prioritaire",
  "Rapport mensuel détaillé",
  "Interlocuteur unique dédié",
] as const;

const SITE_FEATURES = [
  "Design sur-mesure responsive",
  "Optimisation SEO native",
  "Formulaire de contact",
  "Support 30 jours inclus",
] as const;

export const KeyPricing = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold tracking-widest text-orange-700 uppercase dark:border-orange-800/60 dark:bg-orange-950/60 dark:text-orange-300">
            Tarif unique
          </span>
        </div>

        {/* Grid 2/3 + 1/3 */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

          {/* ── Card Clé en main — 2/3 ── */}
          <div
            data-testid="cle-en-main-pricing-card"
            className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-orange-500/5 p-8 sm:p-10 lg:col-span-2 flex flex-col"
          >
            {/* Blob déco */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 right-0 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl"
            />

            {/* Badge */}
            <div className="absolute left-4">
              <span className="inline-block rounded-full bg-orange-500 px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider">
                Clé en main
              </span>
            </div>

            {/* Prix */}
            <div className="mt-6 text-center">
              <div className="flex items-end justify-center gap-1">
                <span data-testid="cle-en-main-price" className="text-6xl font-bold text-foreground">
                  79
                </span>
                <span className="mb-2 text-2xl font-normal text-orange-500">€/mois</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-orange-500">
                Premier paiement le mois suivant
              </p>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Votre présence Google gérée de A à Z — site, SEO local, contenu et suivi chaque mois. Zéro effort de votre côté.
              </p>
            </div>

            {/* Features 2 colonnes */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[...CLE_EN_MAIN_FEATURES_LEFT, ...CLE_EN_MAIN_FEATURES_RIGHT].map((f) => (
                <div
                  key={f}
                  data-testid="cle-en-main-pricing-feature"
                  className="flex items-start gap-2.5"
                >
                  <Check size={14} className="mt-0.5 shrink-0 text-orange-500" />
                  <span className="text-sm text-muted-foreground">{f}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <Link
                href="#audit-form"
                className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-10 py-3.5 text-sm font-semibold text-white transition-all hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/30 active:scale-95"
              >
                Démarrer maintenant →
              </Link>
              <p className="mt-4 text-xs text-muted-foreground text-balance">
                Sans engagement. Résiliable à tout moment avec 30 jours de préavis.
              </p>
            </div>
          </div>

          {/* ── Card Site web — 1/3 ── */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 lg:col-span-1 flex flex-col">

            {/* Badge */}
            <div className="absolute left-4">
              <span className="inline-block rounded-full bg-muted px-4 py-1.5 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Site web seul
              </span>
            </div>

            {/* Prix */}
            <div className="mt-8 text-center">
              <div className="flex items-end justify-center gap-1">
                <span className="text-5xl font-bold text-foreground">997</span>
                <span className="mb-1.5 text-xl font-normal text-orange-500">€</span>
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">
                Tarif unique, devis sous 24h
              </p>
            </div>

            {/* Description */}
            <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
              Un site professionnel optimisé SEO, livré clé en main sans abonnement.
            </p>

            {/* Features */}
            <ul className="mt-6 flex flex-col gap-2.5 flex-1">
              {SITE_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check size={13} className="mt-0.5 shrink-0 text-orange-500" />
                  <span className="text-xs text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/site-web"
                className="block w-full rounded-md border border-border px-6 py-3 text-center text-sm font-semibold text-muted-foreground transition-all hover:border-orange-500/50 hover:text-orange-500 active:scale-95"
              >
                En savoir plus →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};