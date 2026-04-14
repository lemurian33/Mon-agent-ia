"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown, ChevronUp } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Metric = {
  label: string;
  before: string;
  after: string;
  growth: string;
  isRank?: boolean;
};

type Realisation = {
  id: string;
  tags: string[];
  city: string;
  title: string;
  category: string;
  objective: string;
  metrics: Metric[];
  tools: string[];
  href: string;
  context: string;
  actions: string[];
  stack: string[];
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const REALISATIONS: Realisation[] = [
  {
    id: "Segment-c",
    tags: ["Agent I.A", "Site", "GBP"],
    city: "Bordeaux",
    title: "Segment.c | Menuiserie",
    category: "Artisanat",
    objective: "Automatiser les devis et la relation client",
    metrics: [
      { label: "Devis générés",    before: "0/mois",  after: "12/mois", growth: "+1200%" },
      { label: "Appels",           before: "8/mois",  after: "41/mois", growth: "+512%" },
      { label: "Temps de réponse", before: "48h",     after: "< 5 min", growth: "-96%", isRank: true },
    ],
    tools: ["Agent I.A", "Automatisation", "Artisanat"],
    href: "https://segment-c.com",
    context:
      "Menuisier bordelais sans présence digitale, dépendant du bouche-à-oreille. Les devis étaient traités manuellement, avec des délais de réponse de 2 jours.",
    actions: [
      "Déploiement d'un agent I.A de pré-qualification des demandes",
      "Génération automatique de devis par type de prestation",
      "Création d'un site vitrine optimisé SEO",
      "Optimisation de la fiche Google Business",
      "Stratégie de contenu d'article I.A",
      "Hébergement self hosting souverain",
    ],
    stack: ["Next.js", "Agent I.A Claude", "Google Business Profile", "SEO local", "Google Search Console"],
  },
  {
    id: "cabinet-medical-dr-campagne",
    tags: ["Agent I.A Vocal", "Site", "GBP"],
    city: "Vendays-Montalivet",
    title: "Cabinet médical du Dr F. Campagne",
    category: "Santé",
    objective: "Automatiser la prise de rendez-vous",
    metrics: [
      { label: "RDV automatisés",  before: "10/mois", after: "32/mois",  growth: "+320%" },
      { label: "Appels traités",   before: "24/mois", after: "157/mois", growth: "+654%" },
      { label: "Charge secrétariat", before: "100%", after: "< 30%",    growth: "-70%", isRank: true },
    ],
    tools: ["Agent Vocal I.A", "Automatisation", "RGPD"],
    href: "https://dr-c.cabinet-vendays.com",
    context:
      "Cabinet médical souhaitant décharger le secrétariat de la gestion des RDV. Un agent I.A vocal prend les rendez-vous directement dans le calendrier, en conformité RGPD.",
    actions: [
      "Déploiement d'un agent I.A vocal pour prise de RDV",
      "Intégration avec cal.com pour la gestion du calendrier",
      "Création site avec prise de RDV en ligne",
      "Conformité RGPD complète des données patients",
      "Optimisation GBP avec spécialités généraliste",
      "Hébergement self hosting souverain",
    ],
    stack: ["Next.js", "cal.com", "callrounded", "Google Business Profile", "SEO local"],
  },
  {
    id: "Expresse-depannage",
    tags: ["Agent I.A", "Site", "SEO"],
    city: "Bordeaux",
    title: "Express Dépannage",
    category: "Artisanat",
    objective: "Automatiser la capture et qualification des leads",
    metrics: [
      { label: "Appels captés",    before: "4/mois",  after: "36/mois", growth: "+900%" },
      { label: "Devis qualifiés",  before: "10/mois", after: "29/mois", growth: "+290%" },
      { label: "Taux de conversion", before: "12%",   after: "38%",     growth: "+216%", isRank: true },
    ],
    tools: ["Agent I.A", "Automatisation", "Artisanat"],
    href: "https://express-depannage.com",
    context:
      "Plombier à Bordeaux face à une concurrence locale forte. Les leads entrants étaient non qualifiés et le suivi manuel. Un agent I.A trie et qualifie désormais chaque demande.",
    actions: [
      "Agent I.A de qualification des demandes d'urgence",
      "Création d'un site optimisé pour la capture de leads",
      "Stratégie SEO local hyper-ciblée Bordeaux",
      "Optimisation GBP avec zones d'intervention",
      "Création de pages villes environnantes",
    ],
    stack: ["Next.js", "Agent I.A Claude", "Google Business Profile", "Pages villes", "Google Search Console"],
  },
  {
    id: "unlcoaching",
    tags: ["Agent I.A", "Site", "GBP"],
    city: "Gradignan",
    title: "Unlcoaching",
    category: "Coaching sportif",
    objective: "Automatiser le suivi et la prise de contact",
    metrics: [
      { label: "RDV automatisés", before: "25/mois", after: "45/mois", growth: "+80%" },
      { label: "Appels",          before: "10/mois", after: "60/mois", growth: "+500%" },
      { label: "Temps admin",     before: "8h/sem",  after: "1h/sem",  growth: "-87%", isRank: true },
    ],
    tools: ["Agent I.A", "Automatisation", "Coaching"],
    href: "https://unlcoaching.com",
    context:
      "Coach sportif à Gradignan passant trop de temps sur l'administratif. Un agent I.A gère désormais la prise de contact, le suivi des clients et les rappels automatiques.",
    actions: [
      "Agent I.A de suivi client et relances automatiques",
      "Création d'un site optimisé pour la capture de leads",
      "Optimisation GBP avec services détaillés",
      "Stratégie SEO local marque unlcoaching",
      "Campagne d'avis clients automatisée",
    ],
    stack: ["Next.js", "Agent I.A Claude", "GBP", "SEO local", "Google Search Console"],
  },
  {
    id: "original",
    tags: ["Agent I.A", "SEO", "GBP"],
    city: "Lot-et-Garonne",
    title: "Original",
    category: "E-commerce",
    objective: "Automatiser la relation client et les estimations",
    metrics: [
      { label: "Estimations auto", before: "3/mois",   after: "22/mois",   growth: "+633%" },
      { label: "Trafic organique", before: "450/mois", after: "1850/mois", growth: "+311%" },
      { label: "Appels qualifiés", before: "29/mois",  after: "58/mois",   growth: "+100%" },
    ],
    tools: ["Agent I.A", "Automatisation", "E-commerce"],
    href: "https://original.fr",
    context:
      "Commerce en ligne dans le Lot-et-Garonne avec un site peu optimisé. Un agent I.A prend en charge les demandes d'estimation et qualifie les prospects avant transmission.",
    actions: [
      "Agent I.A de traitement des demandes d'estimation",
      "Stratégie de contenu sur les produits",
      "Optimisation technique SEO avancée",
      "Maillage interne et pages de ville ciblées",
    ],
    stack: ["Agent I.A Claude", "SEO technique", "Contenu local", "Google Search Console"],
  },
  {
    id: "cabinet-medical-dr-ramaroson",
    tags: ["Agent I.A Vocal", "Site", "GBP"],
    city: "Vendays-Montalivet",
    title: "Cabinet médical du Dr L. Ramaroson",
    category: "Santé",
    objective: "Automatiser la prise de rendez-vous",
    metrics: [
      { label: "RDV automatisés",    before: "14/mois", after: "58/mois", growth: "+314%" },
      { label: "Appels traités",     before: "22/mois", after: "71/mois", growth: "+223%" },
      { label: "Charge secrétariat", before: "100%",    after: "< 30%",   growth: "-70%", isRank: true },
    ],
    tools: ["Agent Vocal I.A", "Automatisation", "RGPD"],
    href: "https://dr-r.cabinet-vendays.com",
    context:
      "Cabinet du Dr Ramaroson L. souhaitant automatiser la prise de RDV. L'agent I.A vocal répond aux appels, vérifie les disponibilités et inscrit le RDV dans le calendrier.",
    actions: [
      "Déploiement d'un agent vocal I.A pour prise de RDV",
      "Intégration cal.com pour la gestion du calendrier",
      "Création site avec prise de RDV en ligne",
      "Conformité RGPD complète des données patients",
      "Optimisation GBP avec spécialités généraliste",
      "Hébergement souverain",
    ],
    stack: ["Next.js", "callrounded", "cal.com", "Google Business Profile", "SEO local"],
  },
  {
    id: "mon-agent-ai",
    tags: ["Agent I.A", "Site", "SEO"],
    city: "Bordeaux",
    title: "Mon Agent I.A",
    category: "Intelligence Artificielle",
    objective: "Automatiser la génération de demandes de démo",
    metrics: [
      { label: "Demandes démo",    before: "0/mois",  after: "18/mois",  growth: "+1800%" },
      { label: "Trafic organique", before: "0/mois",  after: "320/mois", growth: "+320%" },
      { label: "Leads qualifiés",  before: "0/mois",  after: "12/mois",  growth: "+1200%", isRank: true },
    ],
    tools: ["Agent I.A", "Automatisation", "Tech"],
    href: "https://www.mon-agent-ai.com",
    context:
      "Agence I.A sans présence en ligne. Un agent I.A qualifie les visiteurs, répond aux questions sur les offres et route les prospects vers le bon formulaire de contact.",
    actions: [
      "Agent I.A de qualification et routage des prospects",
      "Création d'un site vitrine axé crédibilité tech",
      "Pages cas d'usage par secteur d'activité",
      "SEO ciblé requêtes agent I.A & automatisation",
      "Formulaire de demande de démo optimisé",
      "Hébergement self hosting souverain",
    ],
    stack: ["Next.js", "Agent I.A Claude", "SEO local", "Google Search Console"],
  },
  {
    id: "lemurian-agency",
    tags: ["Agent I.A", "Site", "SEO"],
    city: "Bordeaux",
    title: "Lemurian Agency",
    category: "Agence créative",
    objective: "Automatiser la qualification des prospects entrants",
    metrics: [
      { label: "Prospects qualifiés", before: "2/mois",  after: "19/mois",  growth: "+950%" },
      { label: "Trafic organique",    before: "80/mois", after: "540/mois", growth: "+575%" },
      { label: "Temps de traitement", before: "2h/lead", after: "< 5 min",  growth: "-96%", isRank: true },
    ],
    tools: ["Agent I.A", "Automatisation", "Agence"],
    href: "https://www.lemurian-agency.com",
    context:
      "Agence créative bordelaise recevant des demandes non qualifiées et chronophages à traiter. Un agent I.A trie, qualifie et priorise chaque prospect avant réponse humaine.",
    actions: [
      "Agent I.A de qualification et scoring des prospects",
      "Refonte du site avec direction artistique sur-mesure",
      "Animations d'entrée et transitions fluides",
      "Architecture SEO pensée pour l'acquisition",
      "Optimisation GBP agence créative Bordeaux",
    ],
    stack: ["Next.js", "Agent I.A Claude", "SEO local", "Google Business Profile", "Google Search Console"],
  },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const RealisationsHero = () => {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        {/* Badge pill */}
        <span
          className="inline-flex items-center rounded-full
                     border border-orange-200 bg-orange-50 px-4 py-1.5
                     text-xs font-semibold tracking-widest text-orange-700
                     uppercase dark:border-orange-800/60 dark:bg-orange-950/60
                     dark:text-orange-300"
        >
          Cas clients I.A. — résultats mesurés
        </span>

        {/* Titre */}
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
          Des agents I.A. déployés,{" "}
          <span className="text-orange-500">des process automatisés.</span>
        </h1>

        {/* Sous-titre */}
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Pas de démos. Pas de promesses. Ces entreprises ont intégré l'I.A.
          dans leurs process métier — et mesurent aujourd'hui un gain de temps
          et de chiffre d'affaires concrets.
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

// ─── Modal ────────────────────────────────────────────────────────────────────

const RealisationModal = ({
  r,
  onClose,
}: {
  r: Realisation;
  onClose: () => void;
}) => (
  <div
    data-testid="realisation-modal"
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

    <div
      className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto
                 rounded-2xl border border-border bg-card p-7 shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        aria-label="Fermer"
        className="absolute right-4 top-4 flex size-7 items-center
                   justify-center rounded-full border border-border
                   text-muted-foreground transition-colors hover:text-foreground"
      >
        <X size={14} />
      </button>

      <p className="text-xs font-bold tracking-widest text-orange-500 uppercase">
        {r.tags.join(" + ")} — {r.city}
      </p>
      <h2 className="mt-1 text-xl font-bold text-foreground">{r.title}</h2>
      <p className="mt-0.5 text-sm text-muted-foreground">
        {r.category} — {r.objective}
      </p>

      <hr className="my-5 border-border" />

      <div className="mb-5">
        <p className="mb-1.5 text-sm font-bold text-foreground">Contexte</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{r.context}</p>
      </div>

      <div className="mb-5">
        <p className="mb-2 text-sm font-bold text-foreground">Actions réalisées</p>
        <ul className="flex flex-col gap-1.5">
          {r.actions.map((action) => (
            <li key={action} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-orange-500" />
              {action}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-5">
        <p className="mb-3 text-sm font-bold text-foreground">Résultats</p>
        <div className="grid grid-cols-3 gap-3">
          {r.metrics.map((m) => (
            <div
              key={m.label}
              className="flex flex-col items-center justify-center
                         rounded-xl bg-orange-500/10 border border-orange-500/20
                         py-4 text-center"
            >
              <span className="text-2xl font-bold text-orange-500">{m.growth}</span>
              <span className="mt-1 text-xs text-muted-foreground">{m.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p className="mb-2 text-sm font-bold text-foreground">Stack</p>
        <div className="flex flex-wrap gap-1.5">
          {r.stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-border bg-muted/30 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <Link
        href="#audit-form"
        onClick={onClose}
        className="block w-full rounded-md bg-orange-500 py-3
                   text-center text-sm font-semibold text-white
                   transition-all hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/30"
      >
        Demander mon audit →
      </Link>
    </div>
  </div>
);

// ─── Sous-composants ──────────────────────────────────────────────────────────

const CardTags = ({ tags, city }: { tags: string[]; city: string }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      {tags.map((tag, i) => (
        <span key={tag} className="flex items-center gap-1">
          <span className="text-xs font-semibold tracking-wider text-orange-500 uppercase">
            {tag}
          </span>
          {i < tags.length - 1 && (
            <span className="text-xs text-muted-foreground">+</span>
          )}
        </span>
      ))}
    </div>
    <span className="text-xs text-muted-foreground">{city}</span>
  </div>
);

const CardMetrics = ({ metrics }: { metrics: Metric[] }) => (
  <div className="flex flex-col gap-1.5">
    {metrics.map((m) => (
      <div key={m.label} className="grid grid-cols-[1fr_auto] items-center gap-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="truncate text-xs text-muted-foreground">{m.label}</span>
          <span className="shrink-0 text-xs text-muted-foreground/50">{m.before}</span>
          <span className="shrink-0 text-xs text-muted-foreground/40">→</span>
          <span className="shrink-0 text-xs font-semibold text-foreground">{m.after}</span>
        </div>
        <span
          className={`shrink-0 text-xs font-bold ${
            m.isRank
              ? "rounded bg-orange-500/20 px-1.5 py-0.5 text-orange-400"
              : "text-orange-500"
          }`}
        >
          {m.growth}
        </span>
      </div>
    ))}
  </div>
);

const Card = ({
  realisation: r,
  onOpen,
}: {
  realisation: Realisation;
  onOpen: () => void;
}) => (
  <article
    data-testid="realisation-card"
    className="flex flex-col gap-4 rounded-2xl border border-border
               bg-card p-5 transition-colors hover:border-border/80"
  >
    <CardTags tags={r.tags} city={r.city} />

    <div>
      <h3 className="text-base font-bold text-foreground">{r.title}</h3>
      <p className="mt-0.5 text-xs text-muted-foreground">
        {r.category}
        <span className="mx-1.5 text-muted-foreground/40">—</span>
        {r.objective}
      </p>
    </div>

    <CardMetrics metrics={r.metrics} />

    <div className="flex flex-wrap gap-1.5">
      {r.tools.map((tool) => (
        <span
          key={tool}
          className="rounded-md border border-border bg-muted/20 px-2 py-0.5 text-xs text-muted-foreground"
        >
          {tool}
        </span>
      ))}
    </div>

    <button
      onClick={onOpen}
      data-testid="voir-le-cas-btn"
      className="mt-auto flex items-center gap-1 text-xs font-semibold
                 text-orange-500 transition-colors hover:text-orange-400"
    >
      Voir le cas →
    </button>
  </article>
);

// ─── Export principal ─────────────────────────────────────────────────────────

const STEPS = [3, 6, REALISATIONS.length] as const;

export const RealisationsGrid = () => {
  const [selected, setSelected] = useState<Realisation | null>(null);
  const [step, setStep] = useState(0);

  const visibleRealisations = REALISATIONS.slice(0, STEPS[step]);
  const nextStep = () => setStep((s) => (s + 1) % STEPS.length);

  const btnLabel = () => {
    if (step === STEPS.length - 1) return "Réduire";
    return `Voir les ${STEPS[step + 1]} réalisations`;
  };

  const BtnIcon = step === STEPS.length - 1 ? ChevronUp : ChevronDown;

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          data-testid="realisations-grid"
        >
          {visibleRealisations.map((r) => (
            <Card key={r.id} realisation={r} onOpen={() => setSelected(r)} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={nextStep}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-orange-500/50 hover:text-orange-500 active:scale-95"
          >
            {btnLabel()} <BtnIcon size={16} />
          </button>
        </div>
      </div>

      {selected && (
        <RealisationModal r={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};