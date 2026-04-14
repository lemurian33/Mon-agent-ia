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
    title: "Audit de visibilité",
    description:
      "Analyse complète de votre présence Google locale en 48h. Vous savez exactement où vous en êtes et quoi faire.",
    details:
      "On passe au crible votre fiche Google Business, votre site, vos concurrents directs et vos mots-clés prioritaires. Vous repartez avec un rapport détaillé et un plan d'action priorisé — sans engagement.",
    included: [
      "Analyse de votre fiche Google Business Profile",
      "Audit SEO technique de votre site",
      "Benchmark de vos 5 concurrents directs",
      "Carte des mots-clés prioritaires",
      "Plan d'action priorisé en 3 niveaux",
    ],
    price: "Gratuit",
    cta: "Demander mon audit",
  },
  {
    id: "site-web",
    icon: Globe,
    tag: "Site",
    title: "Création de site web",
    description:
      "Un site rapide, beau et optimisé SEO dès le départ. Conçu pour convertir vos visiteurs en clients.",
    details:
      "On conçoit votre site comme un outil commercial, pas une vitrine. Architecture pensée pour le SEO, design qui inspire confiance, formulaires qui convertissent et pages de destination optimisées pour chaque service.",
    included: [
      "Design sur-mesure responsive",
      "Architecture SEO native",
      "Pages services optimisées",
      "Formulaire de contact et de devis",
      "1-10 pages selon votre activité",
      "Intégration Google Analytics & Search Console",
      "Formation à la mise à jour du contenu",
    ],
    price: "À partir de 997 €",
    cta: "Créer mon site",
  },
  {
    id: "cle-en-main",
    icon: Rocket,
    tag: "Clé en main",
    title: "Création de site web + SEO local + GBP + publications de contenus",
    description:
      "Votre présence Google gérée de A à Z, chaque mois. Site web, SEO local, contenu, suivi.",
    details:
      "On s'occupe de tout, premier paiement le mois suivant. Votre site est créé, hébergé et maintenu. Votre SEO local est optimisé en continu pour apparaître dans les recherches de vos clients. On produit le contenu, on suit vos performances et on ajuste chaque mois pour que vous soyez toujours visible.",
    included: [
      "Site web professionnel",
      "Stratégie SEO local déployée + GBP",
      "Stratégie et Création de contenu hebdomadaire",
      "Hébergement & maintenance inclus",
      "Suivi des performances mensuel",
      "1-20 pages selon votre activité",
      "Support prioritaire",
    ],
    price: "79 €/mois",
    cta: "Démarrer maintenant",
  },
  {
    id: "ia",
    icon: Rocket,
    tag: "Agent I.A",
    title: "Création de site web + SEO local + GBP + publications de contenus",
    description:
      "Votre présence Google gérée de A à Z, chaque mois. Site web, SEO local, contenu, suivi.",
    details:
      "On s'occupe de tout, premier paiement le mois suivant. Votre site est créé, hébergé et maintenu. Votre SEO local est optimisé en continu pour apparaître dans les recherches de vos clients. On produit le contenu, on suit vos performances et on ajuste chaque mois pour que vous soyez toujours visible.",
    included: [
      "Site web professionnel",
      "Stratégie SEO local déployée + GBP",
      "Stratégie et Création de contenu hebdomadaire",
      "Hébergement & maintenance inclus",
      "Suivi des performances mensuel",
      "1-20 pages selon votre activité",
      "Support prioritaire",
    ],
    price: "À partir de 97 €/mois",
    cta: "Déployer un agent I.A",
  },
  {
    id: "gbp",
    icon: MapPin,
    tag: "GBP",
    title: "Optimisation Fiche Google",
    description:
      "Votre fiche Google Business devient une machine à appels et à itinéraires. Résultats visibles en 30 jours.",
    details:
      "La fiche Google est souvent la porte d'entrée principale de vos clients locaux. On optimise chaque signal : catégories, attributs, photos, Q&A, posts, avis — pour que Google vous place en tête sur les recherches qui comptent.",
    included: [
      "Optimisation complète des informations GBP",
      "Stratégie de catégories et attributs",
      "Plan de photos professionnelles",
      "Système de collecte d'avis automatisé",
      "Publication de posts Google hebdomadaires",
      "Suivi des métriques GBP mensuel",
    ],
    price: "À partir de 297 €/mois",
    cta: "Optimiser ma fiche",
  },
  {
    id: "seo",
    icon: Megaphone,
    tag: "SEO",
    title: "Référencement web (SEO)",
    description:
      "Positionnez votre site sur les recherches locales à forte intention d'achat. Trafic qualifié garanti.",
    details:
      "On travaille le SEO technique, le contenu et la popularité de votre site pour le positionner durablement sur les requêtes que tapent vos futurs clients. Pas de raccourcis, pas de risques : une stratégie de long terme construite sur des bases solides.",
    included: [
      "Audit SEO technique complet",
      "Stratégie de mots-clés locaux",
      "Optimisation on-page des pages clés",
      "Création de contenu SEO local",
      "Reporting mensuel des positions",
    ],
    price: "À partir de 497 €/mois",
    cta: "Booster mon SEO",
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