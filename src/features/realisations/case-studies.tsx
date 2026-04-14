"use client";

import { useState } from "react";
import { Typography } from "@/components/nowts/typography";
import { ChevronDown } from "lucide-react";

const CASE_STUDIES = [
  {
    tags: ["site","GBP", "SEO", "BORDEAUX"],
    title: "Segment.C Menuiserie",
    category: "Artisanat",
    context:
      "Menuisier Bordeaux sans présence en ligne, dépendant du bouche-à-oreille pour trouver des clients.",
    actions: [
      "Création d'un site optimisé SEO",
      "Optimisation de la fiche Google Business",
      "Ciblage des mots-clés menuiserie Bordeaux",
      "Campagne d'avis Google",
      "Stratégie d'acquisition de liens locaux",
    ],
    customActions: [
      "Hébergement sécurisé inclus",
      "Rédaction d'articles SEO mensuels",
      "Suivi des positions Google",
      "Maintenance & mises à jour du site",
    ],
    results: [
      { label: "Appels",      value: "+192%" },
      { label: "Itinéraires", value: "+206%" },
      { label: "Clics site",  value: "+151%" },
    ],
    tools: ["Site vitrine","GBP", "SEO on-page", "siteconfig", "Google Search Console"],
  },
  {
    tags: ["SITE","GBP", "MEDOC"],
    title: "Cabinet médical du Dr Campagne F.",
    category: "Santé",
    context:
      "Cabinet de médical du Dr Campagne F. souhaite crée un site pour prise de rendez-vous en ligne. Un Agent I.A Vocal sera en mesure de prendres des rendez-vous dans le calendrier en ligne.",
    actions: [
      "Création site avec prise de Rdv en ligne",
      "Configuration du calendrier en ligne",
      "Dashboard pour la liste des rendez-vous",
      "Optimisation GBP avec spécialités généraliste",
    ],
    customActions: [
      "Agent I.A vocal pour prise de rendez-vous",
      "Synchronisation calendrier en temps réel",
      "Hébergement sécurisé inclus",
      "Maintenance inclus",
    ],
    results: [
      { label: "Rdv en ligne", value: "+314%" },
      { label: "Visites site", value: "+107%" },
      { label: "Appels",       value: "+223%" },
    ],
    tools: ["Site vitrine", "GBP", "SEO local", "Santé"],
  },
  {
    tags: ["SITE","GBP", "GRADIGNAN"],
    title: "Unlcoaching",
    category: "Coach sportif",
    context:
      "Coach sportif sur gradignan face à une concurrence bien référencées.",
    actions: [
      "Site optimisé pour capture de leads avec CRM ",
      "Optimisation GBP avec services détaillés",
      "Stratégie SEO local marques unlcoaching",
      "Campagne d'avis clients",
    ],
    customActions: [
      "Hébergement & maintenance inclus",
      "Automatisation de la collecte d'avis",
      "Rédaction d'articles thématiques via I.A",
      "Suivi mensuel des performances SEO",
    ],
    results: [
      { label: "Rdv en ligne", value: "+172%" },
      { label: "Visites site", value: "+242%" },
      { label: "Appels",       value: "+150%" },
    ],
    tools: ["Site vitrine", "GBP", "SEO local", "Santé"],
  },
  {
    tags: ["SITE","GBP", "BORDEAUX"],
    title: "Générer des demandes de devis pour un plombier.",
    category: "Artisanat",
    context:
      "Plombier à Bordeaux face à une concurrence locale très forte, avec une visibilité quasi nulle sur Google.",
    actions: [
      "Site optimisé pour capture de leads avec CRM ",
      "Stratégie SEO local hyper-ciblée Bordeaux",
      "Optimisation GBP avec zones d'intervention",
      "Création de pages villes environnantes",
      "Optimisation GBP avec spécialités généraliste",
    ],
    customActions: [
      "Hébergement & maintenance inclus",
      "Agent I.A pour qualification des leads",
      "Rédaction de pages villes en contenu local",
      "Reporting mensuel des appels & formulaires",
    ],
    results: [
      { label: "Rdv en ligne", value: "+383%" },
      { label: "Visites site", value: "+107%" },
      { label: "Appels",       value: "+336%" },
    ],
    tools: ["Site vitrine", "Google Business Profile", "SEO local", "Santé"],
  },
];

function CaseStudyCard({ cs, index }: { cs: typeof CASE_STUDIES[number]; index: number }) {
  return (
    <div
      className={`rounded-2xl border p-8 sm:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500 ${
        index === 0
          ? "border-orange-500/20 bg-orange-500/5"
          : "border-border bg-card"
      }`}
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_300px]">

        {/* ── Colonne gauche ── */}
        <div className="flex flex-col gap-5">

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {cs.tags.map((tag, i) => (
              <span key={tag} className="text-xs font-semibold tracking-widest text-orange-500 uppercase">
                {tag}
                {i < cs.tags.length - 1 && (
                  <span className="ml-2 text-muted-foreground">+</span>
                )}
              </span>
            ))}
          </div>

          {/* Titre */}
          <div>
            <h3 className="text-2xl font-bold text-foreground">{cs.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{cs.category}</p>
          </div>

          {/* Contexte */}
          <div>
            <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-foreground">
              <span>📈</span> Contexte
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">{cs.context}</p>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <span>🔑</span> Actions réalisées
              </p>
              <ul className="flex flex-col gap-1.5">
                {cs.actions.map((action) => (
                  <li key={action} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
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
                {cs.customActions.map((action) => (
                  <li key={action} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-orange-500/50" />
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Colonne droite ── */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="mb-3 text-sm font-semibold text-foreground">Résultats</p>
            <div className="flex flex-col gap-2">
              {cs.results.map((r) => (
                <div
                  key={r.label}
                  className="flex items-center justify-between rounded-lg border border-border bg-muted/20 px-4 py-3"
                >
                  <span className="text-sm text-muted-foreground">{r.label}</span>
                  <span className="text-sm font-bold text-orange-500">{r.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-foreground">Outils &amp; stack</p>
            <div className="flex flex-wrap gap-2">
              {cs.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-border bg-muted/30 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export const CaseStudies = () => {
  // 0 = only first, 1 = first + second, 2 = all
  const [revealLevel, setRevealLevel] = useState(0);

  const visibleCards =
    revealLevel === 0
      ? CASE_STUDIES.slice(0, 1)
      : revealLevel === 1
      ? CASE_STUDIES.slice(0, 2)
      : CASE_STUDIES;

  const remaining = CASE_STUDIES.length - visibleCards.length;

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 text-center">
          <Typography variant="h2" className="text-3xl font-bold tracking-tight sm:text-4xl">
            Études de cas détaillées
          </Typography>
          <Typography variant="p" className="text-muted-foreground mt-4 text-base">
            Plongez dans le détail de nos projets les plus représentatifs.
          </Typography>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {visibleCards.map((cs, index) => (
            <CaseStudyCard key={cs.title} cs={cs} index={index} />
          ))}
        </div>

        {/* Bouton unique */}
        <div className="mt-8 flex justify-end">
          {revealLevel === 0 && (
            <button
              onClick={() => setRevealLevel(1)}
              className="group flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-orange-500/40 hover:bg-orange-500/5 hover:text-orange-500"
            >
              <ChevronDown size={16} className="transition-transform group-hover:translate-y-0.5" />
              Voir 1 projet de plus
            </button>
          )}

          {revealLevel === 1 && (
            <button
              onClick={() => setRevealLevel(2)}
              className="group flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-orange-500/40 hover:bg-orange-500/5 hover:text-orange-500"
            >
              <ChevronDown size={16} className="transition-transform group-hover:translate-y-0.5" />
              Voir les {remaining} autres projets
            </button>
          )}

          {revealLevel === 2 && (
            <button
              onClick={() => setRevealLevel(0)}
              className="group flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-muted-foreground shadow-sm transition-all hover:bg-muted/40 hover:text-foreground"
            >
              <ChevronDown size={16} className="rotate-180 transition-transform group-hover:-translate-y-0.5" />
              Réduire
            </button>
          )}
        </div>

      </div>
    </section>
  );
};