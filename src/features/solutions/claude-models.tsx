"use client";

import { useState } from "react";
import { Typography } from "@/components/nowts/typography";
import { Cpu, Code2, Eye, Zap, Globe, Layers, BrainCircuit } from "lucide-react";

/* ─── Types ─────────────────────────────────────────── */
type BadgeType = "gen" | "code" | "reason" | "vision" | "fast" | "agent";

interface Model {
  name: string;
  price: string;
  types: BadgeType[];
  usage: string;
}

interface Section {
  title: string;
  icon: React.ElementType;
  models: Model[];
}

/* ─── Badge config ───────────────────────────────────── */
const BADGE_CONFIG: Record<BadgeType, { label: string; className: string }> = {
  gen:    { label: "Généraliste",  className: "bg-blue-50   text-blue-700   dark:bg-blue-950/60   dark:text-blue-300"   },
  code:   { label: "Code",         className: "bg-green-50  text-green-700  dark:bg-green-950/60  dark:text-green-300"  },
  reason: { label: "Raisonnement", className: "bg-amber-50  text-amber-700  dark:bg-amber-950/60  dark:text-amber-300"  },
  vision: { label: "Vision",       className: "bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300" },
  fast:   { label: "Rapide",       className: "bg-gray-100  text-gray-600   dark:bg-gray-800      dark:text-gray-300"   },
  agent:  { label: "Agent",        className: "bg-orange-50 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300" },
};

/* ─── Data ───────────────────────────────────────────── */

/* Produits Claude */
interface Product {
  name: string;
  type: string;
  access: string;
  usage: string;
  typeClass: string;
  accessClass: string;
}

const PRODUCTS: Product[] = [
  { name: "Claude.ai",           type: "Web / Mobile",  access: "Free · Pro · Team",     usage: "Chat, analyse, rédaction, code, artifacts",        typeClass: "bg-orange-50 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300", accessClass: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300" },
  { name: "Claude Code",         type: "CLI / IDE",      access: "VS Code · JetBrains",   usage: "Agent de code autonome dans le terminal",           typeClass: "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300",       accessClass: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300" },
  { name: "Cowork",              type: "Desktop",        access: "macOS · Windows",        usage: "Automatisation fichiers & tâches non-dev",          typeClass: "bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300", accessClass: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300" },
  { name: "Claude in Chrome",    type: "Extension",      access: "Beta",                   usage: "Agent de navigation web",                           typeClass: "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300",       accessClass: "bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300" },
  { name: "Claude in Excel",     type: "Add-in",         access: "Beta",                   usage: "Agent tableur dans Excel",                          typeClass: "bg-green-50 text-green-700 dark:bg-green-950/60 dark:text-green-300",   accessClass: "bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300" },
  { name: "Claude in PowerPoint",type: "Add-in",         access: "Beta",                   usage: "Agent slides dans PowerPoint",                      typeClass: "bg-green-50 text-green-700 dark:bg-green-950/60 dark:text-green-300",   accessClass: "bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300" },
  { name: "API Anthropic",       type: "API REST",       access: "Développeurs",           usage: "Intégration dans vos propres apps",                 typeClass: "bg-orange-50 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300", accessClass: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300" },
];

/* Modèles API */
const API_SECTIONS: Section[] = [
  {
    title: "Généraliste & Agents",
    icon: Cpu,
    models: [
      { name: "claude-opus-4-6",   price: "$15 / $75",   types: ["gen", "reason", "agent"], usage: "Tâches complexes, analyse longue, orchestration d'agents" },
      { name: "claude-sonnet-4-6", price: "$3 / $15",    types: ["gen", "code", "agent"],   usage: "Quotidien, agents, code, artifacts — meilleur rapport qualité/prix" },
      { name: "claude-haiku-4-5",  price: "$0.80 / $4",  types: ["gen", "fast"],            usage: "Rapide, classification, résumés, interactions haute fréquence" },
    ],
  },
  {
    title: "Raisonnement avancé",
    icon: BrainCircuit,
    models: [
      { name: "claude-opus-4-6 (thinking)",   price: "$15 / $75",  types: ["reason"], usage: "Extended thinking — analyse stratégique, maths, décisionnel" },
      { name: "claude-sonnet-4-6 (thinking)", price: "$3 / $15",   types: ["reason"], usage: "Extended thinking — raisonnement approfondi, coût maîtrisé" },
    ],
  },
  {
    title: "Vision / Multimodal",
    icon: Eye,
    models: [
      { name: "claude-opus-4-6",   price: "$15 / $75",  types: ["vision", "gen"], usage: "Analyse d'images complexes, documents, graphiques" },
      { name: "claude-sonnet-4-6", price: "$3 / $15",   types: ["vision", "gen"], usage: "Vision multimodale, OCR, analyse visuelle courante" },
      { name: "claude-haiku-4-5",  price: "$0.80 / $4", types: ["vision", "fast"],usage: "Analyse image rapide, classification visuelle" },
    ],
  },
  {
    title: "Code",
    icon: Code2,
    models: [
      { name: "claude-sonnet-4-6", price: "$3 / $15",  types: ["code", "agent"], usage: "Génération, debug, refactoring, agent autonome (Claude Code)" },
      { name: "claude-opus-4-6",   price: "$15 / $75", types: ["code", "reason"],usage: "Architecture complexe, multi-fichiers, revue approfondie" },
      { name: "claude-haiku-4-5",  price: "$0.80 / $4",types: ["code", "fast"],  usage: "Complétion rapide, snippets, suggestions inline" },
    ],
  },
  {
    title: "Features API",
    icon: Layers,
    models: [
      { name: "Prompt caching",    price: "-90% input",  types: ["fast"],   usage: "Réutilise le contexte — idéal pour longs system prompts" },
      { name: "Batch API",         price: "-50% prix",   types: ["fast"],   usage: "Traitement asynchrone de grandes quantités de requêtes" },
      { name: "Tool use / MCP",    price: "Inclus",      types: ["agent"],  usage: "Appel de fonctions externes, MCP servers, Paperclip" },
      { name: "Files API",         price: "Inclus",      types: ["vision"], usage: "Upload PDF, documents longs, images" },
    ],
  },
];

/* Routines */
interface Routine {
  name: string;
  trigger: string;
  example: string;
  product: string;
  triggerClass: string;
}

const ROUTINES: Routine[] = [
  { name: "Planifiée",        trigger: "Cron / Schedule", example: "Rapport quotidien à 8h, résumé hebdomadaire",       product: "Cowork · API",      triggerClass: "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300" },
  { name: "Sur événement",    trigger: "Event trigger",    example: "Nouveau fichier → traitement automatique",          product: "Cowork",            triggerClass: "bg-orange-50 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300" },
  { name: "Heartbeat agent",  trigger: "Paperclip",        example: "Agent qui se réveille, vérifie et agit",            product: "Paperclip + Claude",triggerClass: "bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300" },
  { name: "Webhook",          trigger: "HTTP POST",        example: "Formulaire soumis → action Claude via API",         product: "API",               triggerClass: "bg-green-50 text-green-700 dark:bg-green-950/60 dark:text-green-300" },
  { name: "Batch processing", trigger: "Manuel / Auto",    example: "Traitement de 1000 documents en parallèle",         product: "API Batch",         triggerClass: "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300" },
  { name: "Navigation agent", trigger: "Claude in Chrome", example: "Parcourt des pages web et extrait des données",     product: "Chrome Extension",  triggerClass: "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300" },
];

/* ─── Sub-components ─────────────────────────────────── */
function Badge({ type }: { type: BadgeType }) {
  const { label, className } = BADGE_CONFIG[type];
  return (
    <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${className}`}>
      {label}
    </span>
  );
}

function InlineBadge({ label, className }: { label: string; className: string }) {
  return (
    <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${className}`}>
      {label}
    </span>
  );
}

function SectionHeader({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="mb-2 flex items-center gap-2">
      <Icon size={13} className="shrink-0 text-orange-500" />
      <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
        {title}
      </span>
    </div>
  );
}

/* ── Tab: Produits ── */
function ProduitsTab() {
  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Produit</th>
              <th className="hidden px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground sm:table-cell">Type</th>
              <th className="hidden px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground md:table-cell">Accès</th>
              <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Usage principal</th>
            </tr>
          </thead>
          <tbody>
            {PRODUCTS.map((p, i) => (
              <tr key={p.name} className={`transition-colors hover:bg-muted/20 ${i < PRODUCTS.length - 1 ? "border-b border-border" : ""}`}>
                <td className="px-4 py-3">
                  <span className="font-mono text-xs font-medium text-orange-500">{p.name}</span>
                </td>
                <td className="hidden px-4 py-3 sm:table-cell">
                  <InlineBadge label={p.type} className={p.typeClass} />
                </td>
                <td className="hidden px-4 py-3 md:table-cell">
                  <InlineBadge label={p.access} className={p.accessClass} />
                </td>
                <td className="px-4 py-3 text-xs text-muted-foreground">{p.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 rounded-r-xl border-l-2 border-orange-500 bg-muted/30 px-4 py-3">
        <p className="text-xs text-muted-foreground">Tous les produits Claude sont sans publicité. Anthropic ne permet pas aux annonceurs de promouvoir leurs produits via Claude.</p>
      </div>
    </div>
  );
}

/* ── Tab: API & Modèles ── */
function ApiTab() {
  return (
    <div>
      {API_SECTIONS.map((section) => (
        <div key={section.title} className="mb-6">
          <SectionHeader icon={section.icon} title={section.title} />
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Modèle / Feature</th>
                  <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Prix input/output</th>
                  <th className="hidden px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground sm:table-cell">Type</th>
                  <th className="hidden px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground md:table-cell">Usage</th>
                </tr>
              </thead>
              <tbody>
                {section.models.map((model, i) => (
                  <tr key={model.name} className={`transition-colors hover:bg-muted/20 ${i < section.models.length - 1 ? "border-b border-border" : ""}`}>
                    <td className="px-4 py-3">
                      <span className="font-mono text-xs font-medium text-orange-500">{model.name}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap">{model.price}</span>
                    </td>
                    <td className="hidden px-4 py-3 sm:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {model.types.map((t) => <Badge key={t} type={t} />)}
                      </div>
                    </td>
                    <td className="hidden px-4 py-3 text-xs text-muted-foreground md:table-cell">{model.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      <div className="mt-2 rounded-r-xl border-l-2 border-orange-500 bg-muted/30 px-4 py-3">
        <p className="text-xs text-muted-foreground">Prix en USD par million de tokens (input / output). Le Batch API réduit les coûts de 50% pour les traitements différés. Vérifier les tarifs à jour sur console.anthropic.com.</p>
      </div>
    </div>
  );
}

/* ── Tab: Routines ── */
function RoutinesTab() {
  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Routine</th>
              <th className="hidden px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground sm:table-cell">Déclencheur</th>
              <th className="hidden px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground md:table-cell">Exemple</th>
              <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Produit</th>
            </tr>
          </thead>
          <tbody>
            {ROUTINES.map((r, i) => (
              <tr key={r.name} className={`transition-colors hover:bg-muted/20 ${i < ROUTINES.length - 1 ? "border-b border-border" : ""}`}>
                <td className="px-4 py-3">
                  <span className="font-mono text-xs font-medium text-orange-500">{r.name}</span>
                </td>
                <td className="hidden px-4 py-3 sm:table-cell">
                  <InlineBadge label={r.trigger} className={r.triggerClass} />
                </td>
                <td className="hidden px-4 py-3 text-xs text-muted-foreground md:table-cell">{r.example}</td>
                <td className="px-4 py-3 text-xs text-muted-foreground">{r.product}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 rounded-r-xl border-l-2 border-orange-500 bg-muted/30 px-4 py-3">
        <p className="text-xs text-muted-foreground">Les routines se combinent : un webhook → déclenche Cowork → appelle l'API Claude → notifie via Slack. Paperclip orchestre les agents avec heartbeats.</p>
      </div>
    </div>
  );
}

/* ── Tab: Cowork ── */
interface CoworkFeature {
  name: string;
  description: string;
  platform: string;
}

const COWORK_FEATURES: CoworkFeature[] = [
  { name: "Automatisation fichiers",  description: "Organise, renomme, déplace des fichiers selon des règles en langage naturel",    platform: "macOS · Windows" },
  { name: "Gestion de tâches",        description: "Crée et exécute des workflows répétitifs sans écrire de code",                    platform: "macOS · Windows" },
  { name: "Actions bureau",           description: "Interagit avec les apps natives (Finder, Explorer, apps locales)",                platform: "macOS · Windows" },
  { name: "Traitement batch",         description: "Applique des transformations sur des lots de fichiers en parallèle",              platform: "macOS · Windows" },
  { name: "Routines planifiées",      description: "Exécute des tâches automatiquement à heure fixe ou sur événement",               platform: "macOS · Windows" },
  { name: "Sans code",                description: "Conçu pour les non-développeurs souhaitant automatiser leur flux de travail",     platform: "macOS · Windows" },
];

function CoworkTab() {
  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Fonctionnalité</th>
              <th className="hidden px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground md:table-cell">Description</th>
              <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Plateforme</th>
            </tr>
          </thead>
          <tbody>
            {COWORK_FEATURES.map((f, i) => (
              <tr key={f.name} className={`transition-colors hover:bg-muted/20 ${i < COWORK_FEATURES.length - 1 ? "border-b border-border" : ""}`}>
                <td className="px-4 py-3">
                  <span className="font-mono text-xs font-medium text-orange-500">{f.name}</span>
                </td>
                <td className="hidden px-4 py-3 text-xs text-muted-foreground md:table-cell">{f.description}</td>
                <td className="px-4 py-3">
                  <InlineBadge label={f.platform} className="bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 rounded-r-xl border-l-2 border-orange-500 bg-muted/30 px-4 py-3">
        <p className="text-xs text-muted-foreground">Cowork est un outil desktop qui permet aux non-développeurs d'automatiser la gestion de fichiers et de tâches directement depuis leur ordinateur, sans écrire de code.</p>
      </div>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────── */
export const ClaudeModels = () => {
  const [active, setActive] = useState<"produits" | "api" | "routines" | "cowork">("produits");

  const tabs = [
    { id: "produits"  as const, label: "Produits",    sub: "Écosystème" },
    { id: "api"       as const, label: "API",          sub: "Modèles & prix" },
    { id: "routines"  as const, label: "Routines",     sub: "Automatisation" },
    { id: "cowork"    as const, label: "Cowork",       sub: "Desktop" },
  ];

  const note = {
    produits: "Claude.ai est accessible via web, mobile et desktop. Claude Code s'installe comme extension VS Code ou JetBrains.",
    api:      "Prix en USD / million de tokens. Sonnet 4.6 offre le meilleur rapport qualité/prix pour la plupart des cas d'usage.",
    routines: "Les routines se combinent : webhook → Cowork → API Claude → notification. Paperclip orchestre les agents avec heartbeats.",
    cowork:   "Cowork est conçu pour les non-développeurs. Pour les développeurs, Claude Code et l'API offrent plus de contrôle.",
  }[active];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center rounded-full
                           border border-orange-200 bg-orange-50 px-4 py-1.5
                           text-xs font-semibold tracking-widest text-orange-700 uppercase
                           dark:border-orange-800/60 dark:bg-orange-950/60 dark:text-orange-300">
            Écosystème Claude
          </span>

          <Typography
            variant="h2"
            className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Produits & API Anthropic
          </Typography>

          <Typography
            variant="large"
            className="text-muted-foreground mt-4 text-lg text-pretty"
          >
            Sélectionnez une catégorie pour explorer les produits, modèles,
            coûts API et routines d'automatisation Claude.
          </Typography>
        </div>

        {/* ── Card ── */}
        <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-border bg-card p-6 sm:p-10">

          {/* ── Tabs ── */}
          <div className="mb-8 flex flex-wrap justify-end gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex flex-col rounded-xl border px-5 py-3 text-left transition-all ${
                  active === tab.id
                    ? "border-orange-500 bg-orange-500 text-white"
                    : "border-border bg-muted/30 text-muted-foreground hover:border-orange-300 hover:text-foreground"
                }`}
              >
                <span className="text-sm font-semibold">{tab.label}</span>
                <span className={`text-xs ${active === tab.id ? "text-orange-100" : "text-muted-foreground"}`}>
                  {tab.sub}
                </span>
              </button>
            ))}
          </div>

          {/* ── Content ── */}
          {active === "produits"  && <ProduitsTab />}
          {active === "api"       && <ApiTab />}
          {active === "routines"  && <RoutinesTab />}
          {active === "cowork"    && <CoworkTab />}

        </div>
      </div>
    </section>
  );
};