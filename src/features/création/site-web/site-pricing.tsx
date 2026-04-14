import Link from "next/link";
import { Check } from "lucide-react";

const FEATURES_LEFT = [
  "Design sur-mesure responsive",
  "Performances maximales (Lighthouse 90+)",
  "Système de Contact Formulaire intégré",
  "Formation à la gestion du site",
] as const;

const FEATURES_RIGHT = [
  "Optimisation SEO native complète",
  "Hébergement & suivi de sécurité",
  "Hébergement & maintenance (non incluse)",
  "Support inclus pendant 30 jours",
] as const;

const CLE_EN_MAIN_FEATURES = [
  "Site web professionnel inclus",
  "SEO local déployé + GBP",
  "Création de contenu hebdomadaire",
  "Hébergement & maintenance inclus",
  "Suivi des performances mensuel",
  "Support prioritaire",
] as const;

export const SitePricing = () => {
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

          {/* ── Card 997€ — 2/3 ── */}
          <div
            data-testid="site-pricing-card"
            className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-card p-8 sm:p-10 lg:col-span-2"
          >
            {/* Blob déco */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 right-0 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl"
            />

            {/* Prix */}
            <div className="text-center">
              <div className="flex items-end justify-center gap-1">
                <span data-testid="site-price" className="text-6xl font-bold text-foreground">
                  997
                </span>
                <span className="mb-2 text-2xl font-normal text-orange-500">€</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-orange-500">
                Tarif adapté à la complexité de votre projet
              </p>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Votre site est un investissement rentable. Il travaille pour vous
                24h/24, attire des clients et renforce votre crédibilité professionnelle.
              </p>
            </div>

            {/* Features 2 colonnes */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[...FEATURES_LEFT, ...FEATURES_RIGHT].map((f) => (
                <div
                  key={f}
                  data-testid="site-pricing-feature"
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
                Créer mon site →
              </Link>
              <p className="mt-4 text-xs text-muted-foreground text-balance">
                Sans engagement. Devis personnalisé sous 24h.
                {/* <br />* hébergement non inclus, à partir de 9€/mois selon le trafic et les besoins de votre site. Maintenance optionnelle à 21€/mois. */}
              </p>
            </div>
          </div>

          {/* ── Card Clé en main — 1/3 ── */}
          <div className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-orange-500/5 p-8 lg:col-span-1 flex flex-col">

            {/* Badge */}
            <div className="absolute left-4">
              <span className="inline-block rounded-full bg-orange-500 px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider">
                Clé en main
              </span>
            </div>

            {/* Prix */}
            <div className="mt-8 text-center">
              <div className="flex items-end justify-center gap-1">
                <span className="text-5xl font-bold text-foreground">79</span>
                <span className="mb-1.5 text-xl font-normal text-orange-500">€/mois</span>
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">
                Premier paiement dans 15 jrs
              </p>
            </div>

            {/* Description */}
            <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
              Votre présence Google gérée de A à Z — site, SEO local, contenu et suivi chaque mois.
            </p>

            {/* Features */}
            <ul className="mt-6 flex flex-col gap-2.5 flex-1">
              {CLE_EN_MAIN_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check size={13} className="mt-0.5 shrink-0 text-orange-500" />
                  <span className="text-xs text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/cle-en-main"
                className="block w-full rounded-md border border-orange-500/40 px-6 py-3 text-center text-sm font-semibold text-orange-500 transition-all hover:bg-orange-500 hover:text-white active:scale-95"
              >
                Démarrer maintenant →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};