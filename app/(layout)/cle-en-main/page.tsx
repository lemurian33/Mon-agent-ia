/**
 * Page Site-web
 *
 * Assemble les sections :
 *  1.HeroSite — titre, CTAs, highlights
 *	2.SiteIncludes — 6 cartes "ce qui est inclus"
 *	3.SiteBenefits — bénéfices + carte métriques (90+ perf, 100% SEO)
 *	4.SiteProcess — 4 étapes (Brief → Maquette → Dev → Mise en ligne)
 *	5.SitePricing — carte 997€ + features
 *	6.SiteFaq — 6 questions spécifiques création site
 *	7.CtaBannerSite — CTA final
 *
 * Les données sont injectées ici depuis data.ts
 * pour garder les composants purs et testables indépendamment.
 */

import { SiteConfig } from "@/site-config";
import type { Metadata } from "next";

import { HeroKey } from "@/features/création/hand-keys/hero-key";
import { KeyIncludes } from "@/features/création/hand-keys/key-includes";
import { PortfolioShowcase } from "@/features/création/hand-keys/portfolio-key";
import { KeyBenefits } from "@/features/création/hand-keys/key-benefits";
import { KeyProcess } from "@/features/création/hand-keys/key-process";
import { KeyPricing } from "@/features/création/hand-keys/key-pricing";
import { FAQSection } from "@/features/landing/faq-accordion";
import { CtaBannerKey } from "@/features/création/hand-keys/cta-banner-key";
import { AuditForm } from "@/features/landing/audit/audit-form";

export const metadata: Metadata = {
  title: `Site web - Clé en main — ${SiteConfig.title}`,
  description:
    "Découvrez nos études de cas : comment Lemurian Agency aide les TPE/PME à développer leur visibilité locale via SEO et Google Business Profile.",
  keywords: ["Site web", "Clé en main", "études de cas", "SEO local", "résultats", "Bordeaux"],
  openGraph: {
    title: `Site web - Clé en main — ${SiteConfig.title}`,
    description:
      "Résultats concrets pour nos clients TPE/PME : +200% d'appels, top 10 Google, plus de RDV.",
    url: `${SiteConfig.prodUrl}/clé-en-main`,
    type: "website",
  },
};

export default function KeyPage() {
  return (
    <main>
      <HeroKey />
      <KeyIncludes />
      <PortfolioShowcase />
      <KeyBenefits />
      <KeyProcess />
      <KeyPricing />
      <FAQSection
        faq={[
          {
            question: "Combien de temps faut-il pour créer un site ?",
            answer:
              "En général, comptez 3 à 5 semaines du brief à la mise en ligne. Le délai dépend de la complexité du projet et de la rapidité de vos retours sur la maquette. On vous donne un planning précis dès le départ.",
          },
          {
            question: "Est-ce que je peux modifier mon site moi-même ?",
            answer:
              "Oui — c'est même un objectif. On intègre un système de gestion simple et on vous forme à la mise à jour de vos textes, photos et pages. Vous n'avez besoin de nous que pour les évolutions structurelles.",
          },
          {
            question: "Mon site sera-t-il bien référencé sur Google ?",
            answer:
              "Le SEO technique est intégré nativement : balises, structure, vitesse, responsive, Schema.org. On configure aussi Google Search Console et Google Analytics dès la mise en ligne. Le référencement naturel de fond (contenu, backlinks) peut être assuré via notre offre SEO mensuelle.",
          },
          {
            question: "Que comprend l'hébergement ?",
            answer:
              "L'hébergement est inclus à vie (sauf résiliation de votre part). On gère le serveur, les certificats SSL, les sauvegardes et les mises à jour de sécurité. Vous n'avez rien à gérer techniquement.",
          },
          {
            question: "Que se passe-t-il après la mise en ligne ?",
            answer:
              "30 jours de support inclus après la mise en ligne pour corriger tout bug ou ajustement. Ensuite, on propose une maintenance mensuelle optionnelle ou des interventions ponctuelles à la demande.",
          },
          {
            question: "Quelle est la différence avec un template ou un site gratuit ?",
            answer:
              "Un template est identique à des milliers d'autres sites — Google le sait et vous pénalise. Un site sur-mesure Lemurian est unique, rapide, optimisé pour votre métier et votre ville. La différence se voit dans les positions Google et dans le taux de conversion.",
          },
        ]}
      />
      <CtaBannerKey />
      <AuditForm />
    </main>
  );
}