import { HeroSolution } from "@/features/solutions/hero-solution";
import { SolutionAccordion } from "@/features/solutions/solution-accordion";
import { ProofSection } from "@/features/solutions/proof-section";
import { WhyUs } from "@/features/solutions/why-us";
import { CtaBannerSolutions } from "@/features/solutions/cta-banner-solutions";
import { AuditForm } from "@/features/landing/audit/audit-form";
import { FAQSection } from "@/features/landing/faq-accordion";

export default function SolutionsPage() {
  return (
    <main>
      <HeroSolution />
      <SolutionAccordion />
      <ProofSection />
      <WhyUs />
      <FAQSection faq={[
        {
          question: "Combien de temps avant de voir des résultats ?",
          answer:
            "Pour l'optimisation GBP, les premiers résultats (appels, itinéraires) sont souvent visibles en 2 à 4 semaines. Pour le SEO site web, comptez 2 à 3 mois pour des positions stables — les moteurs de recherche prennent du temps à indexer et à faire confiance à un site optimisé. On ne vous mentira pas : le SEO est un investissement de fond, pas un interrupteur.",
        },
        {
          question: "Vous intervenez dans quelles villes ?",
          answer:
            "Principalement en Nouvelle-Aquitaine : Bordeaux, Mérignac, Pessac, Arcachon, Bayonne, Pau, Périgueux, Agen, La Rochelle. On intervient aussi à distance sur toute la France pour le SEO et la création de site.",
        },
        {
          question: "J'ai déjà un site. Vous pouvez l'optimiser ?",
          answer:
            "Absolument. On commence toujours par un audit technique gratuit pour identifier les points bloquants. Ensuite on propose soit d'optimiser l'existant, soit de le refondre si la structure est trop limitante. On vous présente les deux options avec un chiffrage clair avant de démarrer.",
        },
        {
          question: "Quelle est la différence entre GBP et SEO ?",
          answer:
            "La fiche Google Business (GBP) concerne votre fiche dans Google Maps et le bloc local (les 3 premiers résultats locaux). Le SEO site web concerne le positionnement de vos pages dans les résultats classiques. Les deux se complètent — pour la plupart des métiers locaux, on recommande de travailler les deux en parallèle.",
        },
        {
          question: "Y a-t-il un engagement de durée ?",
          answer:
            "Non. Nos prestations mensuelles sont résiliables à tout moment avec 30 jours de préavis. On préfère garder nos clients parce que les résultats sont là, pas parce qu'un contrat les y oblige. En pratique, nos clients restent en moyenne 18 mois.",
        },
        {
          question: "Comment se passe le suivi ?",
          answer:
            "Chaque mois, vous recevez un rapport détaillé avec l'évolution de vos KPIs : positions, appels, itinéraires, trafic organique. Un point mensuel de 30 minutes est inclus pour faire le bilan et ajuster la stratégie si nécessaire. Vous avez aussi accès direct à Andy par email et WhatsApp.",
        },
        {
          question: "Est-ce que je dois vous donner les accès à mon compte Google ?",
          answer:
            "Oui — pour optimiser votre fiche GBP et votre Search Console, on a besoin d'un accès gestionnaire. On vous explique comment nous l'accorder de manière sécurisée. Vous restez propriétaire à 100% de vos comptes et pouvez nous retirer les accès à tout moment.",
        },
        {
          question: "Vous garantissez la 1ère place sur Google ?",
          answer:
            "Non — et toute agence qui vous le garantit vous ment. Ce qu'on garantit : des actions concrètes mesurables, une amélioration significative de vos métriques sur 60 jours, et un remboursement complet si aucune progression n'est constatée. C'est une garantie honnête, pas un argument marketing.",
        },]}
      />


      <CtaBannerSolutions />
      <AuditForm />
    </main>
  );
}