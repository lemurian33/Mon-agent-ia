/**
 * Page Réalisations — /realisations
 *
 * Assemble les sections :
 *  1. Hero / header de page
 *  2. CaseStudiesList — études de cas détaillées
 *
 * Les données sont injectées ici depuis case-studies.data.ts
 * pour garder les composants purs et testables indépendamment.
 */

import { SiteConfig } from "@/site-config";
import type { Metadata } from "next";
import { RealisationsHero } from "@/features/realisations/realisation-hero";
import { CaseStudies  } from "@/features/realisations/case-studies";
import { RealisationsGrid } from "@/features/realisations/realisation-grid";
import { CtaBanner } from "@/features/landing/cta-banner";
import { AuditForm } from "@/features/landing/audit/audit-form";

export const metadata: Metadata = {
  title: `Réalisations — ${SiteConfig.title}`,
  description:
    "Découvrez nos études de cas : comment Lemurian Agency aide les TPE/PME à développer leur visibilité locale via SEO et Google Business Profile.",
  keywords: ["réalisations", "études de cas", "SEO local", "résultats", "Bordeaux"],
  openGraph: {
    title: `Réalisations — ${SiteConfig.title}`,
    description:
      "Résultats concrets pour nos clients TPE/PME : +200% d'appels, top 3 Google, plus de RDV.",
    url: `${SiteConfig.prodUrl}/realisations`,
    type: "website",
  },
};

export default function RealisationsPage() {
  return (
    <>
      <RealisationsHero />
      <RealisationsGrid/>
      <CaseStudies />
      <CtaBanner/>
      <AuditForm />
    </>
  );
}