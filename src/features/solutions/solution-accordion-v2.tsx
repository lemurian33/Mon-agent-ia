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
// Data — contexte Artisans & BTP
// ─────────────────────────────────────────────

const SOLUTIONS: Solution[] = [
  {
    id: "essentiel",
    icon: Bot,
    tag: "Essentiel • 79€/mois",
    title: "Formation & configuration Claude",
    desc: "On installe Claude pour votre activité et on vous forme à l'utiliser au quotidien sur le terrain.",
    detail:
      "Chaque session est construite autour de votre métier d'artisan : relances devis, réponses clients, gestion agenda. Vous repartez avec des routines prêtes à l'emploi, sans aucune compétence technique requise.",
    included: [
      "Configuration Claude sur mesure pour votre métier",
      "Formation complète à votre rythme",
      "Routines IA pour votre quotidien artisan",
      "Accompagnement pas à pas",
      "Support WhatsApp inclus",
    ],
    price: "79€/mois HT",
    cta: "Démarrer l'accompagnement",
    tech: {
      prereqs: [
        "Aucune compétence technique requise",
        "Un smartphone ou ordinateur suffit",
        "Accès à Claude.ai (on vous guide pour l'ouvrir)",
      ],
      delai: "Démarrage sous 1 semaine",
      format: "Sessions en ligne 1h, cadence hebdomadaire",
      stack: ["Claude", "WhatsApp", "Google Agenda", "Notion"],
      questions: [
        {
          q: "Je ne suis pas du tout à l'aise avec la tech — c'est fait pour moi ?",
          a: "Oui, c'est exactement pour vous. On configure tout ensemble, étape par étape. Vous n'avez rien à installer de compliqué.",
        },
        {
          q: "Combien de temps avant de voir des résultats ?",
          a: "La plupart des artisans récupèrent +5h dès la première semaine grâce aux routines de relance et de réponse client.",
        },
        {
          q: "Que se passe-t-il si j'ai une question entre deux sessions ?",
          a: "Vous avez accès à un support WhatsApp dédié avec réponse garantie sous 24h.",
        },
      ],
    },
  },
  {
    id: "pro",
    icon: Star,
    tag: "Pro • 208€/mois",
    title: "Agents I.A. actifs pendant que vous êtes sur le chantier",
    desc: "Vos agents relancent les devis, publient vos photos chantier et gèrent les impayés — sans vous.",
    detail:
      "On déploie des agents I.A. configurés pour votre activité BTP : relances automatiques, publication réseaux sociaux depuis vos photos chantier, suivi des factures impayées. Vous revenez du chantier avec du travail déjà fait.",
    included: [
      "Devis relancés automatiquement",
      "Photos chantier publiées sur vos réseaux",
      "Factures impayées relancées sans vous",
      "Référencement local (plombier à X…)",
      "Hébergé en France — RGPD",
      "Agents disponibles 24h/24",
    ],
    price: "208€/mois HT",
    cta: "Déployer mes agents",
    tech: {
      prereqs: [
        "Serveur VPS mutualisé (inclus dans l'offre)",
        "Accès à votre logiciel de devis/facturation",
        "Compte réseaux sociaux si publication souhaitée",
      ],
      delai: "Premier agent actif sous 1 semaine",
      format: "Déploiement assuré par notre équipe + session de prise en main",
      stack: ["n8n", "Claude API", "Google My Business", "Instagram", "WhatsApp Business"],
      questions: [
        {
          q: "Les agents fonctionnent-ils avec mon logiciel de devis ?",
          a: "On s'adapte à votre outil : Batappli, Henrri, Sellsy, ou simple fichier Excel. Si une export est possible, on peut s'y connecter.",
        },
        {
          q: "Que se passe-t-il si un agent envoie un message incorrect ?",
          a: "Chaque agent est livré avec un mode supervision. Vous validez les envois pendant les 2 premières semaines, puis on passe en automatique une fois le réglage confirmé.",
        },
        {
          q: "Mes données clients sont-elles en sécurité ?",
          a: "Oui. Vos données sont hébergées en France sur un serveur dédié à votre activité. Rien ne transite vers des serveurs américains.",
        },
      ],
    },
  },
  {
    id: "entreprise",
    icon: Briefcase,
    tag: "Entreprise • 349€/mois",
    title: "Écosystème I.A. privé pour votre entreprise BTP",
    desc: "Votre propre infrastructure IA hébergée en France — CRM chantiers, voix personnalisée, données chez vous.",
    detail:
      "Tout le pack Pro, plus votre propre environnement IA isolé : Tom, votre assistant vocal avec votre ton et votre vocabulaire métier, un CRM chantiers connecté et des séquences commerciales automatiques. Vos données ne quittent jamais votre infrastructure.",
    included: [
      "Tout le pack Pro",
      "Environnement IA 100% privé — vos données chez vous",
      "Tom avec voix naturelle personnalisée (votre ton, votre métier)",
      "CRM chantiers connecté",
      "Séquences email commerciales automatiques",
      "Connexion à vos outils métier",
      "Support prioritaire dédié",
    ],
    price: "349€/mois HT",
    cta: "Déployer mon écosystème",
    tech: {
      prereqs: [
        "Serveur VPS dédié (on vous accompagne pour le choisir)",
        "Nom de domaine et accès DNS",
        "Liste de vos outils métier actuels",
      ],
      delai: "Stack complète opérationnelle sous 1–2 semaines",
      format: "Déploiement assuré par notre équipe + formation équipe",
      stack: ["Coolify", "n8n", "Qdrant", "Mistral", "PostgreSQL", "Docker", "Traefik"],
      questions: [
        {
          q: "Qu'est-ce que « Tom » exactement ?",
          a: "Tom est votre assistant vocal IA configuré avec votre vocabulaire métier, votre façon de parler et vos tarifs. Il répond aux appels entrants quand vous êtes sur le chantier.",
        },
        {
          q: "Quel hébergeur recommandez-vous ?",
          a: "Hostinger ou OVH pour débuter. Hetzner et Scaleway sont d'excellentes alternatives françaises si vous souhaitez rester 100% souverain.",
        },
        {
          q: "Qui maintient l'infrastructure au quotidien ?",
          a: "L'abonnement inclut la maintenance préventive, les mises à jour de sécurité et le monitoring. SLA de 4h en heures ouvrées.",
        },
        {
          q: "Économie réelle comparée à une secrétaire ?",
          a: "Une secrétaire à mi-temps coûte en moyenne 2 800–3 200€/mois charges comprises. Notre pack Entreprise à 349€ couvre les mêmes tâches administratives, 24h/24.",
        },
      ],
    },
  },
  {
    id: "elite",
    icon: Gem,
    tag: "Elite • 420€/mois",
    title: "Coordination multi-équipes et multi-dépôts",
    desc: "Pour les groupes BTP ou franchises avec plusieurs équipes terrain à coordonner.",
    detail:
      "Tout l'écosystème Entreprise, déployé sur plusieurs dépôts ou chantiers simultanés. Vos agents sont entraînés sur votre catalogue de services, vos tarifs et vos process internes. Reporting commercial par chantier inclus.",
    included: [
      "Tout le pack Entreprise",
      "Gestion multi-dépôts et multi-équipes",
      "Agents entraînés sur votre catalogue de services",
      "Reporting commercial par chantier",
      "Zéro interruption de service garantie",
      "Suivi et optimisation continue inclus",
    ],
    price: "420€/mois HT",
    cta: "Nous contacter",
    tech: {
      prereqs: [
        "Minimum 2 équipes ou dépôts actifs",
        "Catalogue de services structuré (on vous aide)",
        "Accès admin à vos outils de coordination",
      ],
      delai: "Déploiement progressif par dépôt, 2–4 semaines",
      format: "Comité de pilotage mensuel + support prioritaire dédié",
      stack: ["Coolify", "n8n", "Qdrant", "Mistral", "PostgreSQL", "Docker", "Traefik", "Metabase"],
      questions: [
        {
          q: "À partir de combien d'équipes cette offre est-elle pertinente ?",
          a: "Dès 2 équipes terrain ou 2 dépôts distincts, la coordination manuelle devient un gouffre de temps. Cette offre est taillée pour ça.",
        },
        {
          q: "Le reporting par chantier, ça ressemble à quoi ?",
          a: "Un tableau de bord avec CA par chantier, devis en attente, taux de transformation et relances en cours — mis à jour en temps réel.",
        },
        {
          q: "Peut-on ajouter un dépôt en cours d'abonnement ?",
          a: "Oui, chaque nouveau dépôt est intégré dans un délai de 5 jours ouvrés sans surcoût jusqu'à 5 sites.",
        },
        {
          q: "Quel est l'économie estimée à ce niveau ?",
          a: "Nos clients élites économisent en moyenne 3 500€/mois comparé à une équipe admin dédiée (assistante + coordinateur terrain).",
        },
      ],
    },
  },
  {
    id: "audit",
    icon: ScanSearch,
    tag: "Gratuit",
    title: "Audit I.A. gratuit — 30 min",
    desc: "On identifie exactement quels process de votre activité peuvent être automatisés et combien ça vous ferait gagner.",
    detail:
      "On plonge dans votre quotidien d'artisan : devis, relances, chantiers, administratif. À la fin, vous avez une vision claire de ce qui peut être automatisé et une feuille de route concrète — sans engagement.",
    included: [
      "Analyse de vos process métier en 30 min",
      "Identification des tâches automatisables",
      "Estimation concrète des gains (temps + argent)",
      "Feuille de route I.A. personnalisée",
      "Recommandations outils adaptés à votre activité",
    ],
    price: "Gratuit",
    cta: "Réserver mon audit",
    tech: {
      prereqs: [
        "Aucun prérequis technique",
        "30 minutes de disponibilité",
        "Un accès à vos outils du quotidien est un plus",
      ],
      delai: "Disponible sous 48h",
      format: "Appel Zoom ou Google Meet",
      stack: ["Claude", "Notion", "Google Meet"],
      questions: [
        {
          q: "Faut-il préparer quelque chose avant l'appel ?",
          a: "Non, l'audit est conversationnel. Pensez juste à vos 3 plus grandes pertes de temps dans la semaine — c'est tout ce dont on a besoin pour commencer.",
        },
        {
          q: "Cet audit est-il vraiment sans engagement ?",
          a: "Oui. Aucun devis envoyé sans votre accord, aucune relance commerciale. Vous repartez avec une feuille de route que vous pouvez appliquer seul si vous le souhaitez.",
        },
        {
          q: "Que se passe-t-il après l'audit ?",
          a: "Vous recevez un compte-rendu écrit sous 24h avec les priorités identifiées. La suite vous appartient entièrement.",
        },
      ],
    },
  },
];

// ─────────────────────────────────────────────
// Modal — inchangée
// ─────────────────────────────────────────────

const Modal = ({
  solution,
  onClose,
}: {
  solution: Solution;
  onClose: () => void;
}) => {
  const { tag, title, tech: t } = solution;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

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
// Accordion Item — inchangé
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
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 px-4 py-4 text-left sm:px-5"
      >
        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-orange-200 bg-orange-50 dark:border-orange-800/50 dark:bg-orange-950/40">
          <Icon size={16} className="text-orange-500" />
        </div>

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

      {open && (
        <div className="border-t border-border px-4 pb-5 pt-4 sm:px-5">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto]">
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
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold tracking-widest text-orange-700 uppercase dark:border-orange-800/60 dark:bg-orange-950/60 dark:text-orange-300">
              Artisans & BTP
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
              Ce qu'on fait pour vous
            </h2>
            <p className="mt-4 text-base text-muted-foreground text-pretty">
              Cliquez sur une solution pour voir le détail —{" "}
              <span className="text-foreground font-medium">En savoir plus</span> affiche les infos
              techniques et la FAQ.
            </p>
          </div>

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

      {modalSolution && (
        <Modal solution={modalSolution} onClose={closeModal} />
      )}
    </>
  );
};