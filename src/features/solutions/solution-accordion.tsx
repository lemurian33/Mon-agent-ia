"use client";

import { useState } from "react";
import { ChevronDown, ScanSearch, Bot, Building2, Sparkles, Info } from "lucide-react";
import Link from "next/link";

type Solution = {
  id: string;
  icon: React.ElementType;
  tag: string;
  title: string;
  description: string;
  details: string;
  included: string[];
  price: string;
  cta: string;
  ctaHref: string; 
};

const SOLUTIONS: Solution[] = [
  {
    id: "audit",
    icon: ScanSearch,
    tag: "Gratuit",
    title: "Audit I.A. gratuit",
    description:
      "30 min pour cartographier vos process et identifier exactement où l'I.A. peut vous faire gagner du temps et de l'argent.",
    details:
      "On plonge dans votre quotidien métier : tâches chronophages, goulots d'étranglement, opportunités cachées. À la fin de l'appel, vous avez une vision claire de ce qui peut être automatisé, dans quel ordre, et avec quel impact réel. Zéro jargon, zéro engagement.",
    included: [
      "Analyse complète de vos process métier en 30 min",
      "Identification des tâches automatisables à fort impact",
      "Estimation concrète des gains de temps et d'argent",
      "Feuille de route I.A. personnalisée et priorisée",
      "Recommandations outils, modèles et ordre de déploiement",
    ],
    price: "Gratuit",
    cta: "Réserver mon audit",
    ctaHref: "/#audit-form",
  },
  {
    id: "essentiel",
    icon: Bot,
    tag: "Essentiel",
    title: "Formation & montée en compétences I.A.",
    description:
      "Je vous montre comment maîtriser l'I.A. en autonomie — avec des cas pratiques tirés directement de votre métier.",
    details:
      "On ne fait pas de théorie pour faire de la théorie. Chaque session est construite autour de vos outils, vos process et vos vrais blocages. Vos collaborateurs repartent avec des prompts opérationnels, des workflows prêts à l'emploi et les bons réflexes pour faire évoluer l'I.A. au fil des semaines.",
    included: [
      "Formation Claude et LLM de A à Z",
      "Prompts & templates calibrés pour votre métier",
      "Ateliers pratiques sur vos cas d'usage réels",
      "Accès communauté privée & ressources exclusives",
      "Support post-formation pour ancrer les acquis",
    ],
    price: "49€/mois",
    cta: "Démarrer l'accompagnement",
    ctaHref: "/essentiel",
  },
  {
    id: "premium",
    icon: Sparkles, 
    tag: "Premium",
    title: "Écosystème IA dédié & agents illimités",
    description:
      "Une infrastructure IA complète, hébergée sur votre domaine, avec des agents illimités coordonnés — conçue sur mesure pour votre organisation.",
    details:
      "On conçoit l'architecture complète de votre écosystème IA : agents spécialisés par fonction, LLM de dernière génération, infrastructure dédiée et orchestrateur central. Chaque composant est calibré sur vos process réels, connecté à vos outils existants et conforme RGPD dès la conception. Vous gagnez une vraie équipe IA — pas un outil de plus.",
    included: [
      "Agents IA illimités — marketing, ops, support, qualification",
      "LLM dernière génération (Claude Opus, GPT-4o ou Gemini Ultra)",
      "Infrastructure dédiée — vos données isolées des autres clients",
      "Orchestrateur central multi-agents et multi-départements",
      "Intégrations CRM, Gmail, Calendar, Notion, Slack",
      "Dashboard de performance en temps réel",
      "Accompagnement mensuel dédié (60 min) + support WhatsApp/Slack",
      "Hébergement souverain EU — conformité RGPD native",
      "Formation complète de vos équipes incluse",
    ],
    price: "Sur devis",
    cta: "Demander un audit gratuit",
    ctaHref: "/#audit-form",
  },
  {
    id: "entreprise",
    icon: Building2,
    tag: "Entreprise",
    title: "LLM local hébergé & infrastructure souveraine",
    description:
      "Votre propre modèle IA tourne sur votre infrastructure. Zéro dépendance externe, zéro donnée qui sort de votre périmètre.",
    details:
      "Pour les structures avec des exigences réglementaires strictes ou un SI complexe. On déploie un LLM open source directement sur votre infrastructure, configure les agents sur-mesure et connecte l'ensemble à vos outils via API. Vous gardez la maîtrise totale — sur les données, les accès, les modèles et l'évolution du système. SLA garanti, interlocuteur dédié, audit-ready dès le premier jour.",
    included: [
      "LLM open source hébergé sur votre infrastructure (Mistral, Llama, Gemma…)",
      "Agents IA multi-rôles configurés sur vos process",
      "Intégrations API avancées — ERP, CRM, SIRH, BI",
      "Stockage vectoriel RAG sur vos données métier",
      "Isolation complète — aucune donnée ne sort de votre périmètre",
      "Conformité RGPD documentée et auditée",
      "Onboarding équipes & formation à la gouvernance IA",
      "SLA garanti avec reporting mensuel des performances",
      "Support prioritaire dédié — interlocuteur unique",
    ],
    price: "Sur devis",
    cta: "Nous contacter",
    ctaHref: "/contact",
  },
];

const SolutionItem = ({
  solution: s,
  isFirst,
}: {
  solution: Solution;
  isFirst?: boolean;
}) => {
  const [open, setOpen] = useState(isFirst ?? false);
  const Icon = s.icon;

  return (
    <div
      data-testid="solution-item"
      className={`rounded-2xl border transition-all duration-200 ${
        isFirst
          ? "border-orange-500/20 bg-orange-500/5"
          : "border-border bg-card"
      }`}
    >
      {/* Header cliquable */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 px-6 py-5 text-left"
      >
        {/* Icône */}
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-orange-200 bg-orange-50 dark:border-orange-800/60 dark:bg-orange-950/40">
          <Icon size={18} className="text-orange-500" />
        </div>

        {/* Texte */}
        <div className="min-w-0 flex-1">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
            {s.tag}
          </span>
          <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
          <p className="mt-0.5 text-sm text-muted-foreground line-clamp-1">
            {s.description}
          </p>
        </div>

        {/* Prix + chevron */}
        <div className="flex shrink-0 items-center gap-4">
          <span className="hidden text-sm font-semibold text-foreground sm:block">
            {s.price}
          </span>
          <ChevronDown
            size={18}
            className={`text-muted-foreground transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {/* Contenu déroulé */}
      {open && (
        <div className="border-t border-border px-6 pb-6 pt-5">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
            {/* Gauche */}
            <div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {s.details}
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {s.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Droite — prix + CTA */}
            <div className="flex flex-col items-start gap-3 lg:items-end lg:justify-between">
              <div className="lg:text-right">
                <p className="text-xs text-muted-foreground">Tarif</p>
                <p className="text-lg font-bold text-foreground">{s.price}</p>
              </div>

              <div className="flex flex-col gap-2 lg:items-end">
                <Link
                  href={`/${s.id}`}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-6 py-2.5 text-sm font-semibold text-muted-foreground transition-all hover:bg-muted active:scale-95 whitespace-nowrap"
                >
                  <Info size={15} className="text-orange-500" />
                  En savoir plus
                </Link>
                <Link
                  href={s.ctaHref}
                  className="inline-flex items-center gap-1.5 rounded-md bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/20 active:scale-95 whitespace-nowrap"
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

export const SolutionAccordion = () => {
  return (
    <section id="solutions" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold tracking-widest text-orange-700 uppercase dark:border-orange-800/60 dark:bg-orange-950/60 dark:text-orange-300">
            Solutions
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            Ce qu'on fait pour vous
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Cliquez sur une solution pour voir le détail, ce qui est inclus et le tarif.
          </p>
        </div>

        {/* Liste */}
        <div className="mt-12 flex flex-col gap-3">
          {SOLUTIONS.map((s, index) => (
            <SolutionItem key={s.id} solution={s} isFirst={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};