"use client";

import { useState } from "react";
import { ChevronDown, ScanSearch, Bot, Server, PhoneCall, Info } from "lucide-react";
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
    price: "79€/mois",
    cta: "Démarrer l'accompagnement'",
  },
  {
    id: "pro",
    icon: Server,
    tag: "Pro",
    title: "Intégration d'agents I.A.",
    description:
      "Des agents I.A. déployés dans vos outils du quotidien — devis, relances, support, prise de RDV, qualification de leads.",
    details:
      "On conçoit, configure et déploie des agents I.A. sur mesure, directement connectés à votre environnement métier. Chaque agent est entraîné sur votre contexte, intégré à vos outils existants (CRM, agenda, messagerie) et conforme RGPD dès le premier jour. Résultat : vos process tournent, même quand vous dormez.",
    included: [
      "Audit et cartographie de vos process existants",
      "Développement d'agents I.A. calibrés pour votre activité",
      "Intégration native à vos outils (CRM, agenda, messagerie)",
      "Automatisation n8n + RAG sur vos données métier",
      "Conformité RGPD complète dès la conception",
      "Formation à la prise en main et à l'évolution",
      "Support et optimisation continue inclus",
    ],
    price: "108 €/mois",
    cta: "Déployer mon écosystème",
  },
  {
    id: "entreprise",
    icon: Server,
    tag: "Entreprise",
    title: "Écosystème I.A. souverain",
    description:
      "Une infrastructure I.A. complète, hébergée sur votre domaine, 100% conforme RGPD — vos données ne quittent jamais votre périmètre.",
    details:
      "On déploie l'intégralité de votre stack I.A. : hébergement Coolify sur votre domaine, automatisation n8n, stockage vectoriel, LLM open source configurés pour votre secteur. Vous gardez le contrôle total — sur les données, les accès et l'évolution du système.",
    included: [
      "Hébergement Coolify souverain sur votre domaine",
      "Automatisation n8n + RAG multi-sources",
      "LLM open source configurés (Claude, Gemma & autres)",
      "Stockage vectoriel KV4 ou KV8 selon vos besoins",
      "Conformité RGPD complète et documentée",
      "Onboarding équipe et formation à la gouvernance I.A.",
    ],
    price: "199€/mois",
    cta: "Déployer mon écosystème",
  },
  {
    id: "premium",
    icon: Server,
    tag: "Premium",
    title: "Configuration full custom",
    description:
      "Architecture I.A. pensée de zéro pour votre structure — pour aller plus loin, plus vite, sans compromis.",
    details:
      "Pour les projets ambitieux ou les besoins hors standard : on part d'une page blanche et on construit exactement ce qu'il vous faut. Audit stratégique, déploiement full stack, intégrations métier complexes et SLA dédié. Vous avez un interlocuteur unique, de la conception au suivi long terme.",
    included: [
      "Audit stratégique & architecture I.A. sur mesure",
      "Déploiement full stack entièrement personnalisé",
      "Intégrations métier spécifiques et complexes",
      "Formation équipes avancée et accompagnement terrain",
      "SLA dédié & accompagnement long terme",
      "Support prioritaire avec interlocuteur unique",
    ],
    price: "Sur devis",
    cta: "Nous contacter",
  },
];

const SolutionItem = ({ solution: s, isFirst }: { solution: Solution; isFirst?: boolean }) => {
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
        <div className="flex-1 min-w-0">
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
                <Link href={`/${s.id}`} className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-6 py-2.5 text-sm font-semibold text-muted-foreground transition-all hover:bg-muted active:scale-95 whitespace-nowrap">
                  <Info size={15} className="text-orange-500" />
                  En savoir plus
                </Link>
                <Link href="/#audit-form" className="inline-flex items-center gap-1.5 rounded-md bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/20 active:scale-95 whitespace-nowrap">
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