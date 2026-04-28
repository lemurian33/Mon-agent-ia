import Link from "next/link";
import { Check } from "lucide-react";

const FEATURES_ENTERPRISE = [
  "Agents IA illimités & sur-mesure",
  "LLM local hébergé chez vous",
  "Intégrations API avancées & webhooks",
  "Orchestrateur central multi-départements",
  "Infrastructure dédiée & scalable",
  "Conformité RGPD & souveraineté des données",
  "SLA garanti & support prioritaire dédié",
  "Formation équipe incluse",
] as const;

const FEATURES_PRO = [
  "Jusqu'à 5 agents IA spécialisés",
  "Orchestrateur central multi-rôles",
  "Intégration Gmail, Calendar, CRM",
  "Campagnes email automatisées",
  "Dashboard ultra performance",
  "Conformité RGPD & données en EU",
] as const;

export const EntPricing = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold tracking-widest text-orange-700 uppercase dark:border-orange-800/60 dark:bg-orange-950/60 dark:text-orange-300">
            Tarif
          </span>
        </div>

        {/* Grid 2/3 + 1/3 */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

          {/* ── Card Entreprise — 2/3 ── */}
          <div className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-card p-8 sm:p-10 lg:col-span-2">

            {/* Blob déco */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 right-0 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl"
            />

            {/* Prix */}
            <div className="text-center">
              <div className="flex items-end justify-center gap-1">
                <span className="text-6xl font-bold text-foreground">Sur devis</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-orange-500">
                Infrastructure dédiée — solution 100% sur-mesure
              </p>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Agents illimités, LLM hébergé chez vous, intégrations avancées.
                On construit l'écosystème IA exact dont votre entreprise a besoin.
              </p>
            </div>

            {/* Features 2 colonnes */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {FEATURES_ENTERPRISE.map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <Check size={14} className="mt-0.5 shrink-0 text-orange-500" />
                  <span className="text-sm text-muted-foreground">{f}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-10 py-3.5 text-sm font-semibold text-white transition-all hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/30 active:scale-95"
              >
                Demander un devis →
              </Link>
              <p className="mt-4 text-xs text-muted-foreground text-balance">
                Réponse sous 24h. Audit offert. Déploiement accompagné de A à Z.
              </p>
            </div>
          </div>

          {/* ── Card Pro — 1/3 ── */}
          <div className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-orange-500/5 p-8 lg:col-span-1 flex flex-col">

            {/* Badge */}
            <div className="absolute left-4">
              <span className="inline-block rounded-full bg-orange-500 px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider">
                Pro
              </span>
            </div>

            {/* Prix */}
            <div className="mt-8 text-center">
              <div className="flex items-end justify-center gap-1">
                <span className="text-4xl font-bold text-foreground">208</span>
                <span className="mb-1 text-lg font-normal text-orange-500">€/mois</span>
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">
                Serveur mutualisé — infrastructure gérée
              </p>
            </div>

            {/* Description */}
            <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
              Besoin d'un écosystème IA opérationnel rapidement, sans infrastructure lourde ? La formule Pro est faite pour vous.
            </p>

            {/* Features */}
            <ul className="mt-6 flex flex-col gap-2.5 flex-1">
              {FEATURES_PRO.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check size={13} className="mt-0.5 shrink-0 text-orange-500" />
                  <span className="text-xs text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/pro"
                className="block w-full rounded-md border border-orange-500/40 px-6 py-3 text-center text-sm font-semibold text-orange-500 transition-all hover:bg-orange-500 hover:text-white active:scale-95"
              >
                Voir la formule Pro →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};