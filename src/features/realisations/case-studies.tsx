"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type CaseStudy = {
  tags: string[];
  title: string;
  cat: string;
  ctx: string;
  actions: string[];
  custom: string[];
  results: { l: string; v: string }[];
  stack: string[];
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const CASE_STUDIES: CaseStudy[] = [
  {
    tags: ["Agent I.A", "Automatisation", "Bordeaux"],
    title: "Segment.C | Menuiserie",
    cat: "Artisanat",
    ctx: "Menuisier bordelais sans présence digitale, dépendant du bouche-à-oreille. Les devis étaient traités manuellement avec des délais de 48h.",
    actions: [
      "Agent I.A de pré-qualification des demandes",
      "Génération automatique de devis par prestation",
      "Création d'un site vitrine optimisé SEO",
      "Optimisation de la fiche Google Business",
    ],
    custom: [
      "Hébergement self-hosting souverain",
      "Stratégie de contenu I.A mensuelle",
    ],
    results: [
      { l: "Devis générés", v: "+1200%" },
      { l: "Appels entrants", v: "+512%" },
      { l: "Temps de réponse", v: "-96%" },
    ],
    stack: ["Next.js", "Agent Claude", "GBP", "SEO local", "GSC"],
  },
  {
    tags: ["Agent Vocal I.A", "RGPD", "Médoc"],
    title: "Cabinet Dr F. Campagne",
    cat: "Santé",
    ctx: "Cabinet médical souhaitant décharger le secrétariat de la gestion des RDV. Un agent vocal prend les rendez-vous directement dans le calendrier, en conformité RGPD.",
    actions: [
      "Agent vocal I.A pour prise de RDV",
      "Intégration cal.com pour le calendrier",
      "Site avec prise de RDV en ligne",
      "Conformité RGPD complète des données patients",
    ],
    custom: [
      "Synchronisation calendrier temps réel",
      "Hébergement sécurisé souverain",
    ],
    results: [
      { l: "RDV automatisés", v: "+320%" },
      { l: "Appels traités", v: "+654%" },
      { l: "Charge secrétariat", v: "-70%" },
    ],
    stack: ["Next.js", "callrounded", "cal.com", "GBP", "SEO local"],
  },
  {
    tags: ["Agent I.A", "SEO", "Bordeaux"],
    title: "Express Dépannage | Plomberie",
    cat: "Artisanat",
    ctx: "Plombier face à une forte concurrence locale. Les leads entrants étaient non qualifiés et le suivi entièrement manuel.",
    actions: [
      "Agent I.A qualification des demandes d'urgence",
      "Site optimisé pour la capture de leads",
      "SEO local hyper-ciblé Bordeaux",
      "Création de pages villes environnantes",
    ],
    custom: [
      "Reporting mensuel appels & formulaires",
      "Zones d'intervention sur GBP",
    ],
    results: [
      { l: "Appels captés", v: "+900%" },
      { l: "Devis qualifiés", v: "+290%" },
      { l: "Taux de conversion", v: "+216%" },
    ],
    stack: ["Next.js", "Agent Claude", "GBP", "Pages villes", "GSC"],
  },
  {
    tags: ["Agent I.A", "Automatisation", "Gradignan"],
    title: "Unlcoaching | Coaching sportif",
    cat: "Coaching sportif",
    ctx: "Coach sportif passant trop de temps sur l'administratif. L'agent gère la prise de contact, le suivi des clients et les rappels automatiques.",
    actions: [
      "Agent I.A suivi client et relances automatiques",
      "Site optimisé pour la capture de leads",
      "Campagne d'avis clients automatisée",
      "SEO local marque unlcoaching",
    ],
    custom: [
      "Rédaction d'articles I.A thématiques",
      "Suivi mensuel des performances SEO",
    ],
    results: [
      { l: "RDV automatisés", v: "+80%" },
      { l: "Appels entrants", v: "+500%" },
      { l: "Temps admin", v: "-87%" },
    ],
    stack: ["Next.js", "Agent Claude", "GBP", "SEO local", "GSC"],
  },
  {
    tags: ["Agent I.A", "SEO", "Lot-et-Garonne"],
    title: "Original | E-commerce",
    cat: "E-commerce",
    ctx: "Commerce en ligne avec un site peu optimisé. L'agent prend en charge les demandes d'estimation et qualifie les prospects avant transmission.",
    actions: [
      "Agent I.A traitement des estimations",
      "Stratégie de contenu sur les produits",
      "Optimisation technique SEO avancée",
      "Maillage interne et pages de ville ciblées",
    ],
    custom: [
      "Stratégie contenu I.A mensuelle",
      "Google Search Console avancé",
    ],
    results: [
      { l: "Estimations auto", v: "+633%" },
      { l: "Trafic organique", v: "+311%" },
      { l: "Appels qualifiés", v: "+100%" },
    ],
    stack: ["Agent Claude", "SEO technique", "Contenu local", "GSC"],
  },
  {
    tags: ["Agent Vocal I.A", "RGPD", "Médoc"],
    title: "Cabinet Dr L. Ramaroson",
    cat: "Santé",
    ctx: "L'agent vocal répond aux appels, vérifie les disponibilités et inscrit automatiquement le RDV dans le calendrier.",
    actions: [
      "Agent vocal I.A pour prise de RDV",
      "Intégration cal.com pour le calendrier",
      "Site avec prise de RDV en ligne",
      "Conformité RGPD complète des patients",
    ],
    custom: [
      "Hébergement souverain",
      "Optimisation GBP généraliste",
    ],
    results: [
      { l: "RDV automatisés", v: "+314%" },
      { l: "Appels traités", v: "+223%" },
      { l: "Charge secrétariat", v: "-70%" },
    ],
    stack: ["Next.js", "callrounded", "cal.com", "GBP"],
  },
  {
    tags: ["Agent I.A", "SEO", "Bordeaux"],
    title: "Mon Agent I.A | Agence tech",
    cat: "Intelligence Artificielle",
    ctx: "Agence I.A sans présence en ligne. L'agent qualifie les visiteurs, répond aux questions sur les offres et route les prospects vers le bon formulaire.",
    actions: [
      "Agent I.A qualification et routage des prospects",
      "Site vitrine axé crédibilité tech",
      "Pages cas d'usage par secteur",
      "SEO ciblé requêtes agent I.A & automatisation",
    ],
    custom: [
      "Formulaire de demande de démo optimisé",
      "Hébergement self-hosting souverain",
    ],
    results: [
      { l: "Demandes démo", v: "+1800%" },
      { l: "Trafic organique", v: "+320%" },
      { l: "Leads qualifiés", v: "+1200%" },
    ],
    stack: ["Next.js", "Agent Claude", "SEO local", "GSC"],
  },
  {
    tags: ["Agent I.A", "SEO", "Bordeaux"],
    title: "Lemurian Agency | Créatif",
    cat: "Agence créative",
    ctx: "Agence créative recevant des demandes non qualifiées et chronophages. L'agent trie, qualifie et priorise chaque prospect avant réponse humaine.",
    actions: [
      "Agent I.A scoring et qualification des prospects",
      "Refonte site avec direction artistique sur-mesure",
      "Architecture SEO pensée pour l'acquisition",
      "Optimisation GBP agence créative Bordeaux",
    ],
    custom: [
      "Animations d'entrée et transitions fluides",
      "Reporting mensuel des prospects",
    ],
    results: [
      { l: "Prospects qualifiés", v: "+950%" },
      { l: "Trafic organique", v: "+575%" },
      { l: "Temps de traitement", v: "-96%" },
    ],
    stack: ["Next.js", "Agent Claude", "SEO local", "GBP", "GSC"],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const CaseStudyCard = ({ cs, index }: { cs: CaseStudy; index: number }) => (
  <div
    className={`rounded-2xl border p-8 sm:p-10 transition-colors ${
      index === 0
        ? "border-orange-500/20 bg-orange-500/5"
        : "border-border bg-card hover:border-orange-500/20"
    }`}
  >
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px]">

      {/* ── Left column ── */}
      <div className="flex flex-col gap-5">

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {cs.tags.map((tag, i) => (
            <span key={tag} className="flex items-center gap-2">
              <span className="text-xs font-semibold tracking-widest text-orange-500 uppercase">
                {tag}
              </span>
              {i < cs.tags.length - 1 && (
                <span className="text-xs text-muted-foreground">+</span>
              )}
            </span>
          ))}
        </div>

        {/* Title */}
        <div>
          <h3 className="text-xl font-bold text-foreground">{cs.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{cs.cat}</p>
        </div>

        {/* Context */}
        <div>
          <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-foreground">
            <span>📈</span> Contexte
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">{cs.ctx}</p>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-foreground">
              <span>🔑</span> Actions réalisées
            </p>
            <ul className="flex flex-col gap-1.5">
              {cs.actions.map((action) => (
                <li
                  key={action}
                  className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-orange-500" />
                  {action}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-foreground">
              <span>⚙️</span> Actions personnalisées
            </p>
            <ul className="flex flex-col gap-1.5">
              {cs.custom.map((action) => (
                <li
                  key={action}
                  className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-orange-500/40" />
                  {action}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Right column ── */}
      <div className="flex flex-col gap-6">
        <div>
          <p className="mb-3 text-sm font-semibold text-foreground">Résultats</p>
          <div className="flex flex-col gap-2">
            {cs.results.map((r) => (
              <div
                key={r.l}
                className="flex items-center justify-between rounded-lg border border-border bg-muted/20 px-4 py-3"
              >
                <span className="text-sm text-muted-foreground">{r.l}</span>
                <span className="text-sm font-bold text-orange-500">{r.v}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-foreground">Outils &amp; stack</p>
          <div className="flex flex-wrap gap-2">
            {cs.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-border bg-muted/30 px-2.5 py-1 text-xs text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>
  </div>
);

// ─── Main export ──────────────────────────────────────────────────────────────

const STEPS = [3, 6, CASE_STUDIES.length] as const;

export const CaseStudies = () => {
  const [step, setStep] = useState(0);

  const visible = CASE_STUDIES.slice(0, STEPS[step]);
  const isLast = step === STEPS.length - 1;

  const handleToggle = () => setStep((s) => (s + 1) % STEPS.length);

  const btnLabel = isLast
    ? "Réduire"
    : `Voir les ${STEPS[step + 1]} projets`;

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full border border-orange-200
                       bg-orange-50 px-4 py-1.5 text-xs font-semibold tracking-widest
                       text-orange-700 uppercase dark:border-orange-800/60
                       dark:bg-orange-950/60 dark:text-orange-300"
          >
            <span className="size-1.5 rounded-full bg-orange-500" />
            Résultats I.A. — cas clients
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ce que l'I.A. change concrètement
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Des agents déployés, des process automatisés — mesurés sur de vrais clients.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {visible.map((cs, i) => (
            <CaseStudyCard key={cs.title} cs={cs} index={i} />
          ))}
        </div>

        {/* Toggle button */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleToggle}
            className="group inline-flex items-center gap-2 rounded-xl border border-border
                       bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm
                       transition-all hover:border-orange-500/40 hover:bg-orange-500/5
                       hover:text-orange-500 active:scale-95"
          >
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 group-hover:translate-y-0.5 ${
                isLast ? "rotate-180 group-hover:-translate-y-0.5 group-hover:translate-y-0" : ""
              }`}
            />
            {btnLabel}
          </button>
        </div>

      </div>
    </section>
  );
};