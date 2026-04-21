"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import {
  ChevronDown,
  ScanSearch,
  Bot,
  Star,
  Briefcase,
  Gem,
  Info,
  X,
} from "lucide-react";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

type TechInfo = {
  prereqs: string[];
  delai: string;
  format: string;
  stack: string[];
  questions: { q: string; a: string }[];
};

type Solution = {
  id: string;
  icon: React.ElementType;
  tag: string;
  title: string;
  desc: string;
  detail: string;
  included: string[];
  price: string;
  cta: string;
  tech: TechInfo;
};

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const SOLUTIONS: Solution[] = [
  {
    id: "audit",
    icon: ScanSearch,
    tag: "Gratuit",
    title: "Audit I.A. gratuit",
    desc: "30 min pour cartographier vos process et identifier où l'I.A. peut vous faire gagner du temps.",
    detail:
      "On plonge dans votre quotidien métier : tâches chronophages, goulots d'étranglement, opportunités cachées. À la fin, vous avez une vision claire de ce qui peut être automatisé.",
    included: [
      "Analyse complète de vos process en 30 min",
      "Identification des tâches automatisables",
      "Estimation concrète des gains",
      "Feuille de route I.A. personnalisée",
      "Recommandations outils et ordre de déploiement",
    ],
    price: "Gratuit",
    cta: "Réserver mon audit",
    tech: {
      prereqs: [
        "Aucun prérequis technique",
        "Accès à vos process actuels",
      ],
      delai: "Disponible sous 48h",
      format: "Appel Zoom ou Google Meet",
      stack: ["Claude", "ChatGPT", "Notion", "n8n"],
      questions: [
        {
          q: "Faut-il préparer des documents avant l'appel ?",
          a: "Non, l'audit est conversationnel. Un accès à votre CRM ou vos outils du quotidien peut être utile mais n'est pas obligatoire.",
        },
        {
          q: "Cet audit est-il vraiment sans engagement ?",
          a: "Oui, absolument. Aucun devis, aucune relance commerciale agressive. Vous repartez avec une feuille de route indépendamment de toute décision d'achat.",
        },
        {
          q: "Que se passe-t-il après l'audit ?",
          a: "Vous recevez un compte-rendu écrit sous 24h avec les priorités identifiées. La suite dépend entièrement de vous.",
        },
      ],
    },
  },
  {
    id: "essentiel",
    icon: Bot,
    tag: "Essentiel",
    title: "Formation & montée en compétences",
    desc: "Maîtrisez l'I.A. en autonomie avec des cas pratiques tirés de votre métier.",
    detail:
      "Chaque session est construite autour de vos outils, vos process et vos vrais blocages. Vos collaborateurs repartent avec des prompts opérationnels et des workflows prêts à l'emploi.",
    included: [
      "Formation Claude et LLM de A à Z",
      "Prompts & templates calibrés pour votre métier",
      "Ateliers pratiques sur vos cas d'usage réels",
      "Accès communauté privée & ressources exclusives",
      "Support post-formation pour ancrer les acquis",
    ],
    price: "79€/mois",
    cta: "Démarrer l'accompagnement",
    tech: {
      prereqs: [
        "Aucune compétence technique requise",
        "Session individuel",
        "Accès à Claude.ai",
      ],
      delai: "Démarrage sous 1 semaine",
      format: "Sessions en ligne, 1h à 2h, cadence hebdomadaire",
      stack: ["Claude", "ChatGPT", "Notion", "Make", "Zapier"],
      questions: [
        {
          q: "C'est pour quel niveau ? Faut-il savoir coder ?",
          a: "Zéro code requis. La formation est conçue pour des profils métier : comptable, RH, commercial, consultant. On travaille avec vos outils existants.",
        },
      {
        q: "On peut former toute l'équipe ?",
        a: "Non, les sessions sont individuelles — j'anime personnellement chaque accompagnement, donc je travaille en tête-à-tête avec chaque participant.",
      },
        {
          q: "Que contient le support post-formation ?",
          a: "Un canal de messagerie dédié avec réponse garantie sous 24h, des ressources mises à jour chaque mois et un accès à la communauté privée.",
        },
      ],
    },
  },
 {
    id: "pro",
    icon: Star,
    tag: "Pro",
    title: "Infrastrure + Agents I.A. sur mesure",
    desc: "5 agents I.A. déployés un serveur VPS mutualisé, connectés à vos outils métier — vos données restent chez vous.",
    detail:
      "On conçoit et déploie jusqu'à 3 agents I.A. directement sur votre serveur. Chaque agent est configuré sur mesure pour vos process : relances, qualification, support, prise de RDV. Zéro donnée qui transite en dehors de votre infrastructure.",
    included: [
      "Déploiement de 5 agents I.A. sur votre VPS mutualié",
      "Configuration sur mesure par agent (périmètre fonctionnel dédié)",
      "Dashboard Fermé",
      "Intégration native à vos outils (CRM, agenda, messagerie)",
      "Conformité RGPD complète",
      "Formation à la prise en main",
      "Support et optimisation continue",
    ],
    price: "208€/mois",
    cta: "Déployer mes agents",
    tech: {
      prereqs: [
        "Serveur VPS dédié",
        "Accès admin à vos outils (CRM, messagerie)",
        "Données structurées ou semi-structurées",
      ],
      delai: "Premier agent en prod sous 1 semaines",
      format: "Déploiement asynchrone + sessions de recette",
      stack: ["n8n", "Claude API", "Pinecone", "Airtable", "HubSpot"],
      questions: [
        {
          q: "Les agents fonctionnent-ils avec mes outils actuels ?",
          a: "On s'adapte à votre stack existante : HubSpot, Pipedrive, Notion, Google Workspace, Outlook… Si une API est disponible, on peut s'y connecter.",
        },
        {
          q: "Combien d'agents peut-on déployer ?",
          a: "L'offre inclut 5 agents actifs déployés sur votre VPS. Chaque agent couvre un périmètre fonctionnel précis : relances, support, qualification leads, prise de RDV, etc.",
        },
        {
          q: "Que se passe-t-il si l'agent fait une erreur ?",
          a: "Chaque agent est livré avec un mode supervision : toutes les actions sont loggées et vous pouvez activer une validation humaine avant exécution.",
        },
        {
          q: "La conformité RGPD est-elle documentée ?",
          a: "Oui, un registre de traitement est fourni à la livraison. Les données restent sur votre VPS et ne transitent que par des API avec DPA signé.",
        },
      ],
    },
  },
  {
    id: "entreprise",
    icon: Briefcase,
    tag: "Entreprise",
    title: "Écosystème I.A. souverain",
    desc: "Infrastructure I.A. complète, hébergée sur votre domaine, 100% RGPD — vos données ne partent jamais.",
    detail:
      "Déploiement intégral de votre stack I.A. : hébergement Coolify, automatisation n8n, stockage vectoriel, LLM open source configurés. Contrôle total sur les données, accès et évolution.",
    included: [
      "Déploiement des agents I.A. sur votre VPS privé",
      "Configuration sur mesure par agent (périmètre fonctionnel dédié)",
      "Hébergement possible sur votre domaine",
      "Automatisation n8n + RAG multi-sources",
      "LLM open source configurés (Gemma4, Mistral…)",
      "Stockage vectoriel",
      "Conformité RGPD complète et documentée",
      "Onboarding équipe et formation à la gouvernance",
    ],
    price: "297€/mois",
    cta: "Déployer mon écosystème",
    tech: {
      prereqs: [
        "Serveur VPS dédié",
        "Nom de domaine et accès DNS",
      ],
      delai: "Stack complète opérationnelle sous 1–2 semaines",
      format: "Déploiement DevOps assuré par notre équipe",
      stack: ["Coolify", "paperclip", "n8n", "Qdrant", "Mistral", "Gemma", "PostgreSQL", "Dockers", "Traefik","kv8"],
      questions: [
        {
          q: "Quel hébergeur recommandez-vous ?",
          a: "Hostinger est notre recommandation par défaut. Hetzner, OVH, Scaleway ou Infomaniak sont des alternatives FR valides.",
        },
        {
          q: "Les modèles open source sont-ils aussi performants ?",
          a: "Pour la majorité des usages métier, Mistral Medium ou Gemma 27B rivalisent avec GPT-4. Pour des cas très complexes, on peut brancher Claude API en fallback.",
        },
        {
          q: "Qui maintient l'infrastructure ?",
          a: "L'abonnement inclut la maintenance préventive, les mises à jour de sécurité et le monitoring. SLA de 4h en heures ouvrées.",
        },
        {
          q: "Peut-on migrer notre existant vers cette stack ?",
          a: "Oui, on réalise un audit de migration lors du kick-off. Vos données existantes sont indexées dans le RAG en phase d'onboarding.",
        },
      ],
    },
  },
  {
    id: "premium",
    icon: Gem,
    tag: "Premium",
    title: "Configuration sur mesure",
    desc: "Architecture I.A. pensée de zéro pour votre structure — le client garde le contrôle.",
    detail:
      "Pour les projets ambitieux ou les besoins hors standard : audit stratégique, déploiement full stack, intégrations métier complexes et SLA dédié. Un interlocuteur unique de la conception au suivi.",
    included: [
      "Audit stratégique & architecture I.A. sur mesure",
      "Déploiement full stack personnalisé",
      "Intégrations métier spécifiques et complexes",
      "Formation équipes avancée",
      "SLA dédié & accompagnement long terme",
      "Support prioritaire interlocuteur unique",
    ],
    price: "Sur devis",
    cta: "Nous contacter",
    tech: {
      prereqs: [
        "Brief technique initial (on vous accompagne)",
        "Accès à vos systèmes d'information",
        "Disponibilité d'un référent technique interne",
      ],
      delai: "Kick-off sous 5 jours, livraison selon périmètre",
      format: "Engagement sur mesure, comité de pilotage mensuel",
      stack: ["Architecture définie après audit", "Tous les outils précédents possibles", "Développement spécifique si nécessaire"],
      questions: [
        {
          q: "À partir de quand a-t-on besoin de cette offre ?",
          a: "Quand vos besoins dépassent les offres standards : multi-sites, secteur réglementé, stack propriétaire ou conformité avancée.",
        },
        {
          q: "Quel est l'ordre de grandeur du budget ?",
          a: "Les projets custom démarrent généralement à partir de 500 € HT/mois + setup. Un devis détaillé est fourni après l'audit stratégique gratuit.",
        },
        {
          q: "Le code développé nous appartient-il ?",
          a: "Oui, intégralement. Tout le code produit dans le cadre de votre projet vous est cédé. Pas de dépendance propriétaire.",
        },
        {
          q: "Comment se passe la passation en cas de fin de contrat ?",
          a: "Un kit de passation complet est fourni : documentation technique, runbooks, accès aux repos et session de transfert de compétences.",
        },
      ],
    },
  },
];

// ─────────────────────────────────────────────
// Modal
// ─────────────────────────────────────────────

const Modal = ({
  solution,
  onClose,
}: {
  solution: Solution;
  onClose: () => void;
}) => {
  const { tag, title, tech: t } = solution;

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-5 flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-1">
              {tag}
            </p>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-muted-foreground transition-colors hover:bg-muted/80"
            aria-label="Fermer"
          >
            <X size={15} />
          </button>
        </div>

        {/* Prérequis */}
        <div className="mb-4">
          <p className="mb-2 text-[11px] font-bold tracking-widest text-orange-500 uppercase">
            Prérequis
          </p>
          <div className="flex flex-col gap-2">
            {t.prereqs.map((p) => (
              <div
                key={p}
                className="rounded-r-lg border-l-2 border-orange-500 bg-orange-500/5 px-3 py-2 text-sm text-muted-foreground"
              >
                {p}
              </div>
            ))}
          </div>
        </div>

        {/* Infos pratiques */}
        <div className="mb-4">
          <p className="mb-2 text-[11px] font-bold tracking-widest text-orange-500 uppercase">
            Infos pratiques
          </p>
          <div className="flex flex-col gap-2">
            <div className="rounded-r-lg border-l-2 border-orange-500 bg-orange-500/5 px-3 py-2">
              <p className="text-xs font-semibold text-foreground">Délai de démarrage</p>
              <p className="text-sm text-muted-foreground">{t.delai}</p>
            </div>
            <div className="rounded-r-lg border-l-2 border-orange-500 bg-orange-500/5 px-3 py-2">
              <p className="text-xs font-semibold text-foreground">Format</p>
              <p className="text-sm text-muted-foreground">{t.format}</p>
            </div>
          </div>
        </div>

        <hr className="my-4 border-border" />

        {/* Stack technique */}
        <div className="mb-4">
          <p className="mb-2 text-[11px] font-bold tracking-widest text-orange-500 uppercase">
            Stack technique
          </p>
          <div className="flex flex-wrap gap-2">
            {t.stack.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <hr className="my-4 border-border" />

        {/* FAQ */}
        <div>
          <p className="mb-2 text-[11px] font-bold tracking-widest text-orange-500 uppercase">
            Questions fréquentes
          </p>
          <div className="flex flex-col gap-2">
            {t.questions.map(({ q, a }) => (
              <div
                key={q}
                className="rounded-r-lg border-l-2 border-orange-500 bg-orange-500/5 px-3 py-2"
              >
                <p className="text-sm font-semibold text-foreground">{q}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// Accordion Item
// ─────────────────────────────────────────────

const SolutionItem = ({
  solution: s,
  isFirst,
  onOpenModal,
}: {
  solution: Solution;
  isFirst?: boolean;
  onOpenModal: (s: Solution) => void;
}) => {
  const [open, setOpen] = useState(isFirst ?? false);
  const Icon = s.icon;

  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-colors duration-200 ${
        isFirst
          ? "border-orange-500/30 bg-orange-500/5"
          : "border-border bg-card"
      }`}
    >
      {/* Clickable header */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 px-4 py-4 text-left sm:px-5"
      >
        {/* Icon */}
        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-orange-200 bg-orange-50 dark:border-orange-800/50 dark:bg-orange-950/40">
          <Icon size={16} className="text-orange-500" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <span className="text-[10px] font-bold tracking-widest text-orange-500 uppercase">
            {s.tag}
          </span>
          <h3 className="text-sm font-semibold text-foreground leading-tight">
            {s.title}
          </h3>
          <p className="mt-0.5 truncate text-xs text-muted-foreground">
            {s.desc}
          </p>
        </div>

        {/* Price + chevron */}
        <div className="flex shrink-0 items-center gap-3">
          <span className="hidden text-sm font-semibold text-foreground sm:block">
            {s.price}
          </span>
          <ChevronDown
            size={16}
            className={`text-muted-foreground transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {/* Expanded body */}
      {open && (
        <div className="border-t border-border px-4 pb-5 pt-4 sm:px-5">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto]">
            {/* Left */}
            <div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {s.detail}
              </p>
              <ul className="mt-3 flex flex-col gap-1.5">
                {s.included.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — price + CTAs */}
            <div className="flex flex-col items-start gap-3 lg:items-end lg:justify-between">
              <div className="lg:text-right">
                <p className="text-xs text-muted-foreground">Tarif</p>
                <p className="text-lg font-bold text-foreground">{s.price}</p>
              </div>

              <div className="flex flex-col gap-2 lg:items-end">
                <button
                  onClick={() => onOpenModal(s)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:bg-muted whitespace-nowrap"
                >
                  <Info size={13} className="text-orange-500" />
                  En savoir plus
                </button>
                <Link
                  href="/#audit-form"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-orange-500 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-orange-400 whitespace-nowrap"
                >
                  {s.cta} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────
// Main export
// ─────────────────────────────────────────────

export const SolutionAccordion = () => {
  const [modalSolution, setModalSolution] = useState<Solution | null>(null);
  const closeModal = useCallback(() => setModalSolution(null), []);

  return (
    <>
      <section id="solutions" className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold tracking-widest text-orange-700 uppercase dark:border-orange-800/60 dark:bg-orange-950/60 dark:text-orange-300">
              Solutions
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
              Ce qu'on fait pour vous
            </h2>
            <p className="mt-4 text-base text-muted-foreground text-pretty">
              Cliquez sur une solution pour voir le détail —{" "}
              <span className="text-foreground font-medium">En savoir plus</span> affiche les infos
              techniques.
            </p>
          </div>

          {/* List */}
          <div className="mt-10 flex flex-col gap-2.5">
            {SOLUTIONS.map((s, i) => (
              <SolutionItem
                key={s.id}
                solution={s}
                isFirst={i === 0}
                onOpenModal={setModalSolution}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalSolution && (
        <Modal solution={modalSolution} onClose={closeModal} />
      )}
    </>
  );
};