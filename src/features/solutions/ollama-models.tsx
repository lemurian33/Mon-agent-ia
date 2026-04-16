"use client";

import { useState } from "react";
import { Typography } from "@/components/nowts/typography";
import { Cpu, Code2, Eye, Mic, Database, BrainCircuit } from "lucide-react";

/* ─── Types ─────────────────────────────────────────── */
type BadgeType = "gen" | "code" | "reason" | "embed" | "vision" | "audio";

interface Model {
  name: string;
  ram: string;
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
  embed:  { label: "Embedding",    className: "bg-gray-100  text-gray-600   dark:bg-gray-800      dark:text-gray-300"   },
  vision: { label: "Vision",       className: "bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300" },
  audio:  { label: "Audio",        className: "bg-orange-50 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300" },
};

/* ─── Data ───────────────────────────────────────────── */
const KV4_SECTIONS: Section[] = [
  {
    title: "Généraliste",
    icon: Cpu,
    models: [
      { name: "gemma4:e4b",      ram: "~4 Go",  types: ["gen", "vision"], usage: "Agent conversationnel, FAQ, multimodal léger" },
      { name: "llama3.2:3b",     ram: "~2 Go",  types: ["gen"],           usage: "Réponses rapides, classification, tri" },
      { name: "mistral:7b",      ram: "~5 Go",  types: ["gen"],           usage: "Rédaction, résumés, emails, tâches courantes" },
      { name: "qwen3:4b",        ram: "~3 Go",  types: ["gen"],           usage: "Multilingue, support client, résumés" },
      { name: "gemma3:4b",       ram: "~3 Go",  types: ["gen"],           usage: "Conversation, FAQ simple" },
      { name: "phi4-mini:3.8b",  ram: "~3 Go",  types: ["gen"],           usage: "Raisonnement léger, formulaires, analyse" },
    ],
  },
  {
    title: "Raisonnement",
    icon: BrainCircuit,
    models: [
      { name: "deepseek-r1:8b", ram: "~6 Go", types: ["reason"], usage: "Analyse structurée, résolution de problèmes" },
      { name: "qwen3:8b",       ram: "~6 Go", types: ["reason"], usage: "Analyse, mode thinking activable" },
    ],
  },
  {
    title: "Code",
    icon: Code2,
    models: [
      { name: "qwen2.5-coder:7b",  ram: "~5 Go", types: ["code"], usage: "Génération, debug, automatisation scripts" },
      { name: "codellama:7b",      ram: "~5 Go", types: ["code"], usage: "Complétion de code, refactoring" },
      { name: "deepseek-coder:6.7b",ram: "~5 Go",types: ["code"], usage: "Code multi-langages, génération automatisée" },
    ],
  },
  {
    title: "Vision / Multimodal",
    icon: Eye,
    models: [
      { name: "gemma4:e2b",    ram: "~2 Go", types: ["vision"], usage: "Analyse image ultra-légère, edge" },
      { name: "llava:7b",      ram: "~5 Go", types: ["vision"], usage: "Analyse d'images, description visuelle" },
      { name: "moondream:1.8b",ram: "~2 Go", types: ["vision"], usage: "Analyse image minimale, edge device" },
      { name: "minicpm-v:8b",  ram: "~6 Go", types: ["vision"], usage: "OCR, analyse haute résolution" },
    ],
  },
  {
    title: "Audio",
    icon: Mic,
    models: [
      { name: "whisper", ram: "~1 Go", types: ["audio"], usage: "Transcription audio, sous-titres, STT" },
    ],
  },
  {
    title: "Embedding / RAG",
    icon: Database,
    models: [
      { name: "nomic-embed-text",     ram: "~0.3 Go", types: ["embed"], usage: "RAG, recherche sémantique, vectorisation" },
      { name: "bge-m3",               ram: "~1.1 Go", types: ["embed"], usage: "RAG multilingue, dense + sparse retrieval" },
      { name: "qwen3-embedding:0.6b", ram: "~0.5 Go", types: ["embed"], usage: "Embedding 100+ langues, léger" },
    ],
  },
];

const KV8_SECTIONS: Section[] = [
  {
    title: "Généraliste haute performance",
    icon: Cpu,
    models: [
      { name: "gemma4:26b",        ram: "~16 Go", types: ["gen", "vision"], usage: "Agent orchestrateur, raisonnement avancé, multimodal" },
      { name: "gemma4:31b",        ram: "~22 Go", types: ["gen", "vision"], usage: "Agent CEO, analyse complexe, décisionnel" },
      { name: "llama3.3:70b",      ram: "~42 Go", types: ["gen"],           usage: "Analyse longue, pilotage, orchestration" },
      { name: "mistral-small3:22b",ram: "~14 Go", types: ["gen"],           usage: "Rédaction pro, synthèse longue, qualité élevée" },
      { name: "qwen3:14b",         ram: "~10 Go", types: ["gen"],           usage: "Multilingue avancé, mode thinking" },
      { name: "qwen3:32b",         ram: "~22 Go", types: ["gen"],           usage: "Raisonnement poussé, analyses longues" },
      { name: "gemma3:27b",        ram: "~18 Go", types: ["gen"],           usage: "Agent généraliste haute qualité" },
      { name: "phi4:14b",          ram: "~10 Go", types: ["gen"],           usage: "Raisonnement, maths, tâches structurées" },
    ],
  },
  {
    title: "Raisonnement avancé",
    icon: BrainCircuit,
    models: [
      { name: "deepseek-r1:32b", ram: "~22 Go", types: ["reason"], usage: "Agent décisionnel, analyse complexe" },
      { name: "deepseek-r1:70b", ram: "~42 Go", types: ["reason"], usage: "Raisonnement niveau GPT-4, stratégique" },
      { name: "qwq:32b",         ram: "~22 Go", types: ["reason"], usage: "Résolution problèmes complexes, maths" },
    ],
  },
  {
    title: "Code",
    icon: Code2,
    models: [
      { name: "qwen2.5-coder:32b", ram: "~22 Go", types: ["code"], usage: "Génération avancée, multi-fichiers, refactoring" },
      { name: "deepseek-coder:33b",ram: "~22 Go", types: ["code"], usage: "Code 87 langages, cross-file" },
      { name: "codellama:34b",     ram: "~22 Go", types: ["code"], usage: "Complétion, analyse, debug avancé" },
      { name: "qwen2.5-coder:14b", ram: "~10 Go", types: ["code"], usage: "Automatisation workflows n8n, scripts" },
    ],
  },
  {
    title: "Vision / Multimodal",
    icon: Eye,
    models: [
      { name: "llava:34b",     ram: "~22 Go", types: ["vision"], usage: "Analyse images haute précision" },
      { name: "qwen2-vl:7b",   ram: "~5 Go",  types: ["vision"], usage: "Vision multilingue, documents, OCR" },
      { name: "minicpm-v:8b",  ram: "~6 Go",  types: ["vision"], usage: "OCR, vidéo, image haute résolution" },
    ],
  },
  {
    title: "Audio",
    icon: Mic,
    models: [
      { name: "whisper:large", ram: "~3 Go", types: ["audio"], usage: "Transcription haute qualité, 99 langues" },
    ],
  },
  {
    title: "Embedding / RAG",
    icon: Database,
    models: [
      { name: "bge-m3",               ram: "~1.1 Go", types: ["embed"], usage: "RAG multi-sources, dense + lexical" },
      { name: "qwen3-embedding:8b",   ram: "~5 Go",   types: ["embed"], usage: "Embedding top MTEB, 100+ langues" },
      { name: "nomic-embed-text",     ram: "~0.3 Go", types: ["embed"], usage: "RAG léger, vectorisation rapide" },
    ],
  },
];

/* ─── Sub-components ─────────────────────────────────── */
function Badge({ type }: { type: BadgeType }) {
  const { label, className } = BADGE_CONFIG[type];
  return (
    <span
      className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${className}`}
    >
      {label}
    </span>
  );
}

function ModelTable({ section }: { section: Section }) {
  const Icon = section.icon;
  return (
    <div className="mb-6">
      {/* Section header */}
      <div className="mb-2 flex items-center gap-2">
        <Icon size={13} className="shrink-0 text-orange-500" />
        <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          {section.title}
        </span>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Modèle
              </th>
              <th className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                RAM
              </th>
              <th className="hidden px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground sm:table-cell">
                Type
              </th>
              <th className="hidden px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground md:table-cell">
                Usage
              </th>
            </tr>
          </thead>
          <tbody>
            {section.models.map((model, i) => (
              <tr
                key={model.name}
                className={`transition-colors hover:bg-muted/20 ${
                  i < section.models.length - 1 ? "border-b border-border" : ""
                }`}
              >
                {/* Model name */}
                <td className="px-4 py-3">
                  <span className="font-mono text-xs font-medium text-orange-500">
                    {model.name}
                  </span>
                </td>

                {/* RAM */}
                <td className="px-4 py-3">
                  <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap">
                    {model.ram}
                  </span>
                </td>

                {/* Badges */}
                <td className="hidden px-4 py-3 sm:table-cell">
                  <div className="flex flex-wrap gap-1">
                    {model.types.map((t) => (
                      <Badge key={t} type={t} />
                    ))}
                  </div>
                </td>

                {/* Usage */}
                <td className="hidden px-4 py-3 text-xs text-muted-foreground md:table-cell">
                  {model.usage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────── */
export const OllamaModels = () => {
  const [active, setActive] = useState<"kv4" | "kv8">("kv4");

  const tabs = [
    { id: "kv4" as const, label: "VPS KV4", sub: "16 Go RAM" },
    { id: "kv8" as const, label: "VPS KV8", sub: "32–64 Go RAM" },
  ];

  const sections = active === "kv4" ? KV4_SECTIONS : KV8_SECTIONS;
  const note =
    active === "kv4"
      ? "KV4 — charger un seul gros modèle à la fois. Les modèles d'embedding tournent en parallèle sans impact."
      : "KV8 — possible de faire tourner 2–3 agents simultanément : ex. gemma4:26b + qwen2.5-coder:14b + bge-m3 en parallèle.";

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center rounded-full
                           border border-orange-200 bg-orange-50 px-4 py-1.5
                           text-xs font-semibold tracking-widest text-orange-700 uppercase
                           dark:border-orange-800/60 dark:bg-orange-950/60 dark:text-orange-300">
            Modèles I.A.
          </span>

          <Typography
            variant="h2"
            className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Modèles Ollama compatibles 
						{/* <br />VPS KV4 &amp; KV8 */}
          </Typography>

          <Typography
            variant="large"
            className="text-muted-foreground mt-4 text-lg text-pretty"
          >
            Sélectionnez votre configuration VPS pour afficher les modèles
            compatibles, leur empreinte mémoire et leurs cas d'usage.
          </Typography>
        </div>

        {/* ── Card ── */}
        <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-border bg-card p-6 sm:p-10">

          {/* ── Tabs ── */}
          <div className="mb-8 flex justify-end gap-3">
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
                <span
                  className={`text-xs ${
                    active === tab.id ? "text-orange-100" : "text-muted-foreground"
                  }`}
                >
                  {tab.sub}
                </span>
              </button>
            ))}
          </div>

          {/* ── Sections ── */}
          {sections.map((section) => (
            <ModelTable key={section.title} section={section} />
          ))}

          {/* ── Note ── */}
          <div className="mt-2 rounded-r-xl border-l-2 border-orange-500 bg-muted/30 px-4 py-3">
            <p className="text-xs text-muted-foreground">{note}</p>
          </div>
        </div>
      </div>
    </section>
  );
};