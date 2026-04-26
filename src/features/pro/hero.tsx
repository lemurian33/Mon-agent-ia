import Link from "next/link";
import { Monitor, Smartphone, Mail, MessageSquare, Globe, Zap, BarChart2, Clock, Shield, ArrowRight } from "lucide-react";
import { SectionDivider } from "@/features/landing/section-divider";

export const Hero = () => {
  return (
    <div className="relative isolate flex flex-col">
      <GradientBackground />

      <div className="relative py-24 sm:py-32 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Mobile: org chart en haut, texte en bas — Desktop: texte à gauche, org à droite */}
          <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:gap-16">

            {/* ── Colonne texte (gauche sur desktop, bas sur mobile) ── */}
            <div className="flex flex-col items-start text-left w-full lg:flex-1">

              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full
                              border border-orange-200 bg-orange-50 px-4 py-1.5
                              text-xs font-semibold tracking-widest
                              text-orange-700 uppercase
                              dark:border-orange-800/60 dark:bg-orange-950/60
                              dark:text-orange-300">
                Orchestration multi-agents
              </div>

              {/* Titre */}
              <h1 className="text-4xl font-bold tracking-tight text-balance
                             text-foreground sm:text-5xl lg:text-6xl
                             lg:leading-tight">
                Vos agents IA,{" "}
                <span className="text-orange-500">
                  une seule plateforme.
                </span>
              </h1>

              {/* Sous-titre */}
              <p className="mt-6 max-w-xl text-base leading-relaxed
                            text-muted-foreground sm:text-lg">
                Connectez vos outils métier existants sous une structure unifiée,
                pilotée par l'IA. Zéro compétence technique requise — déployé en quelques jours.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="#demo"
                  className="rounded-md bg-orange-500 px-8 py-3.5 text-sm
                             font-semibold text-white transition-all
                             hover:bg-orange-400 hover:shadow-lg
                             hover:shadow-orange-500/30 active:scale-95"
                >
                  Voir une démo →
                </Link>
                <Link
                  href="#contact"
                  className="rounded-md border border-border px-8 py-3.5
                             text-sm font-semibold text-foreground
                             transition-all hover:bg-muted"
                >
                  Prendre rendez-vous
                </Link>
              </div>

              {/* Badges inline */}
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                {BADGES.map(({ icon: Icon, label }) => (
                  <span key={label} className="flex items-center gap-1.5">
                    <Icon size={14} className="text-muted-foreground/60" />
                    {label}
                  </span>
                ))}
              </div>

              {/* Canaux compatibles */}
              <div className="mt-10">
                <p className="mb-3 text-xs font-semibold tracking-widest text-muted-foreground/60 uppercase">
                  Compatible avec vos canaux
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {CHANNELS.map(({ icon: Icon, label }) => (
                    <span
                      key={label}
                      className="flex items-center gap-2 rounded-full border border-border
                                 bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground
                                 transition-colors hover:border-orange-200 hover:text-foreground"
                    >
                      <Icon size={12} className="text-muted-foreground/50" />
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Colonne org chart (droite sur desktop, haut sur mobile) ── */}
            <div className="w-full lg:flex-1">
              <OrgChart />
            </div>

          </div>
        </div>
      </div>

      <SectionDivider />

      {/* Stats bar */}
      <div className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-5xl px-6 py-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map(({ icon: Icon, value }) => (
              <div key={value} className="flex items-center gap-3">
                <Icon size={18} className="shrink-0 text-muted-foreground/60" />
                <span className="text-sm font-semibold text-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Org chart ─────────────────────────────────────────────────────

const OrgChart = () => (
  <div className="rounded-xl border border-border bg-muted/20 p-8">
    {/* Level 1 */}
    <div className="flex justify-center">
      <OrgNode
        label="Coordinateur central"
        sub="Piloté par l'IA"
        accent
      />
    </div>

    {/* Connector */}
    <div className="flex justify-center">
      <div className="h-6 w-px bg-border" />
    </div>
    <div className="mx-16 border-t border-border" />

    {/* Level 2 */}
    <div className="relative mt-0 grid grid-cols-3 gap-3">
      {/* left connector */}
      <div className="absolute left-[16.5%] top-0 h-5 w-px bg-border" />
      <div className="absolute left-1/2 top-0 h-5 w-px bg-border" />
      <div className="absolute right-[16.5%] top-0 h-5 w-px bg-border" />

      {[
        { label: "Marketing", sub: "Agent contenu" },
        { label: "Opérations", sub: "Agent process", active: true },
        { label: "Support client", sub: "Agent réponse" },
				// { label: "Qualifications", sub: "Agent leads" },
      ].map((n) => (
        <div key={n.label} className="mt-5">
          <OrgNode {...n} />
        </div>
      ))}
    </div>

    {/* Connector from Opérations */}
    <div className="flex justify-center">
      <div className="h-5 w-px bg-border" />
    </div>
    <div className="mx-40 border-t border-border" />

    {/* Level 3 */}
    <div className="relative mt-0 flex justify-center gap-3">
      <div className="absolute left-[calc(50%-3.5rem)] top-0 h-5 w-px bg-border" />
      <div className="absolute right-[calc(50%-3.5rem)] top-0 h-5 w-px bg-border" />

      {[
        { label: "Analyse data", sub: "Sous-agent", active: true },
        { label: "Automatisation", sub: "Sous-agent", active: true },
      ].map((n) => (
        <div key={n.label} className="mt-5 w-40">
          <OrgNode {...n} />
        </div>
      ))}
    </div>

    {/* Footer */}
    <div className="mt-6 flex items-center justify-center gap-2 border-t border-border pt-4">
      <span className="h-2 w-2 rounded-full bg-green-500" />
      <span className="text-xs text-muted-foreground">
        Infrastructure gérée — aucune compétence technique requise
      </span>
    </div>
  </div>
);

const OrgNode = ({
  label,
  sub,
  active,
  accent,
}: {
  label: string;
  sub: string;
  active?: boolean;
  accent?: boolean;
}) => (
  <div
    className={[
      "relative rounded-lg border px-4 py-3 text-left transition-all",
      accent
        ? "border-orange-300 bg-orange-50 dark:border-orange-800/60 dark:bg-orange-950/40"
        : active
        ? "border-green-400 bg-background dark:border-green-700"
        : "border-border bg-background",
    ].join(" ")}
  >
    {active && (
      <span className="absolute -top-2.5 right-2 rounded-full bg-background px-1.5 text-[10px] font-semibold text-green-600 dark:text-green-400">
        En cours
      </span>
    )}
    <p className={`text-xs font-semibold ${accent ? "text-orange-700 dark:text-orange-300" : "text-foreground"}`}>
      {label}
    </p>
    <p className="mt-0.5 text-[11px] text-muted-foreground">{sub}</p>
  </div>
);

// ── Data ──────────────────────────────────────────────────────────

const BADGES = [
  { icon: Shield,  label: "Clé en main" },
  { icon: Clock,   label: "Déploiement rapide" },
  { icon: Zap,     label: "Résultats mesurables" },
] as const;

const CHANNELS = [
  { icon: Monitor,       label: "Web app" },
  { icon: Smartphone,    label: "Mobile" },
  { icon: Monitor,       label: "Dashboard personalisé" },
  { icon: MessageSquare, label: "Chat intégré" },
  // { icon: Globe,         label: "API REST" },
  // { icon: Zap,           label: "Webhook" },
] as const;

const STATS = [
  { icon: BarChart2, value: "Vos outils existants"     },
  { icon: Clock,     value: "Opérationnel < 7 jours"   },
  { icon: Zap,       value: "Automatisation 24/7"      },
  { icon: Shield,    value: "Données hébergées en EU"  },
] as const;

// ── Background ────────────────────────────────────────────────────

const GradientBackground = () => (
  <>
    <div
      aria-hidden="true"
      className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    >
      <div
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem]
                   -translate-x-1/2 rotate-[30deg]
                   bg-gradient-to-tr from-orange-300/20 to-[#9089fc]/20
                   opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      />
    </div>
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu
                 overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    >
      <div
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem]
                   -translate-x-1/2
                   bg-gradient-to-tr from-orange-400/10 to-[#9089fc]/20
                   opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
      />
    </div>
  </>
);