"use client";

import { useState } from "react";
import { ChevronDown, Globe, MapPin, Search, Megaphone, Rocket, Info } from "lucide-react";
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
    icon: Search,
    tag: "Gratuit",
    title: "Audit I.A. gratuit",
    description:
      "30 min pour identifier exactement quels process de votre business peuvent être automatisés — et combien ça vous ferait gagner.",
    details:
      "On analyse vos process métier ensemble : tâches répétitives, points de friction, opportunités d'automatisation. Vous repartez avec un plan d'intégration concret et priorisé, adapté à votre activité. Sans engagement.",
    included: [
      "Analyse de vos process métier en 30 min",
      "Identification des tâches automatisables",
      "Estimation des gains de temps et d'argent",
      "Feuille de route I.A. personnalisée",
      "Recommandations outils et modèles",
    ],
    price: "Gratuit",
    cta: "Réserver mon audit",
  },
  {
    id: "solo",
    icon: Globe,
    tag: "Formation",
    title: "Formation & montée en compétences I.A.",
    description:
      "Vos équipes apprennent à utiliser, piloter et faire évoluer l'I.A. en autonomie. Sessions pratiques, cas concrets.",
    details:
      "Pas de théorie inutile — on part directement de vos outils et de votre métier. Vos collaborateurs repartent avec des prompts, des workflows et les réflexes pour intégrer l'I.A. dans leur quotidien dès le lendemain.",
    included: [
      "Formation Claude et LLM de A à Z",
      "Prompts & templates métier inclus",
      "Ateliers pratiques sur vos cas d'usage",
      "Accès communauté privée",
      "Support post-formation",
    ],
    price: "À partir de 97 €/mois",
    cta: "Démarrer la formation",
  },
  {
    id: "Team",
    icon: Rocket,
    tag: "Agent I.A.",
    title: "Intégration d'agents I.A.",
    description:
      "Des agents I.A. déployés directement dans vos outils existants — devis, relances, support, prise de RDV, et plus.",
    details:
      "On configure et déploie des agents I.A. sur mesure connectés à vos process métier. Chaque agent est entraîné sur votre contexte, intégré à vos outils existants (CRM, agenda, messagerie) et conforme RGPD dès le départ.",
    included: [
      "Audit et cartographie de vos process",
      "Développement d'agents I.A. sur mesure",
      "Intégration à vos outils existants",
      "Automatisation n8n + RAG",
      "Conformité RGPD complète",
      "Formation à la prise en main",
      "Support et optimisation continue",
    ],
    price: "À partir de 147 €/mois",
    cta: "Déployer un agent I.A.",
  },
  {
    id: "entreprise",
    icon: MapPin,
    tag: "Écosystème",
    title: "Écosystème I.A. souverain",
    description:
      "Infrastructure I.A. complète, hébergée sur votre domaine, conforme RGPD — vos données restent les vôtres.",
    details:
      "On déploie votre écosystème I.A. complet : hébergement Coolify, automatisation n8n, stockage vectoriel, LLM open source configurés pour votre métier. Une infrastructure souveraine où vous gardez le contrôle total.",
    included: [
      "Hébergement Coolify sur votre domaine",
      "Automatisation n8n + RAG multi-sources",
      "LLM open source (Claude, Gemma & autres)",
      "Stockage vectoriel KV4 ou KV8",
      "Conformité RGPD complète",
      "Onboarding et formation équipe",
    ],
    price: "À partir de 297 €/mois",
    cta: "Déployer mon écosystème",
  },
  {
    id: "premium",
    icon: Rocket,
    tag: "Sur mesure",
    title: "Configuration full custom",
    description:
      "Architecture I.A. sur mesure pour les structures qui veulent aller plus loin, plus vite, sans compromis.",
    details:
      "Pour les projets complexes ou les besoins spécifiques : audit complet, déploiement full stack personnalisé, intégrations métier avancées et SLA dédié. On construit exactement ce dont vous avez besoin.",
    included: [
      "Audit & architecture I.A. sur mesure",
      "Déploiement full stack personnalisé",
      "Intégrations métier spécifiques",
      "Formation équipes avancée",
      "SLA & accompagnement long terme",
      "Support prioritaire dédié",
    ],
    price: "Sur devis",
    cta: "Nous contacter",
  },
  {
    id: "agent-vocal-IA",
    icon: Megaphone,
    tag: "Agent vocal",
    title: "Agent vocal I.A.",
    description:
      "Un agent vocal répond à vos appels 24h/24, qualifie vos prospects et prend des rendez-vous — sans secrétaire.",
    details:
      "Votre agent vocal I.A. répond instantanément à chaque appel entrant, pose les bonnes questions, qualifie le prospect et enregistre les informations dans votre CRM. Disponible en dehors des heures d'ouverture, sans jamais rater un appel.",
    included: [
      "Réponse automatique aux appels entrants",
      "Qualification des prospects en temps réel",
      "Prise de rendez-vous automatisée",
      "Intégration agenda et CRM",
      "Disponible 24h/24, 7j/7",
      "Conforme RGPD",
    ],
    price: "À partir de 159 €/mois",
    cta: "Découvrir l'agent vocal",
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