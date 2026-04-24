import { HeroSolution } from "@/features/solutions/hero-solution";
// import { SolutionAccordion } from "@/features/solutions/solution-accordion-v2";
// import { ProofSection } from "@/features/solutions/proof-section";
import { Approach } from "@/features/solutions/approach";
import { Offers } from "@/features/solutions/offers";
import { WhyUs } from "@/features/solutions/why-us";
import { CtaBannerSolutions } from "@/features/solutions/cta-banner-solutions";
import { AuditForm } from "@/features/landing/audit/audit-form";
import { FAQSection } from "@/features/landing/faq-accordion";

export default function SolutionsPage() {
  return (
    <>
      <HeroSolution />
      {/* <SolutionAccordion /> */}
      {/* <ProofSection /> */}
      <Approach/>
      <Offers/>
      <WhyUs />
      <FAQSection faq={[
        {
          question: "Combien de temps avant de voir les premiers résultats ?",
          answer:
            "Pour un agent I.A. ou une automatisation simple, les premiers résultats sont visibles dès les 2 à 4 premières semaines. Pour un écosystème complet (hébergement, RAG, intégrations métier), comptez 4 à 8 semaines de déploiement. On vous donne un calendrier précis dès l'audit — pas d'approximation.",
        },
        {
          question: "Est-ce que mes données sont en sécurité ?",
          answer:
            "Oui. Toutes nos solutions sont conçues conformément au RGPD dès la conception : hébergement souverain sur votre domaine, données qui ne transitent pas chez des tiers, droits d'accès documentés. Vous restez propriétaire à 100% de vos données et pouvez nous retirer les accès à tout moment.",
        },
        {
          question: "Je ne suis pas technique — est-ce que je peux quand même utiliser vos solutions ?",
          answer:
            "C'est exactement pour ça qu'on inclut la formation. On ne vous livre pas un outil et on disparaît. Vos équipes sont accompagnées pour prendre en main, piloter et faire évoluer l'écosystème en autonomie. Si vous bloquez, on est disponibles.",
        },
        {
          question: "Quelle est la différence entre le plan Solo, Team et Enterprise ?",
          answer:
            "Solo est pensé pour les indépendants qui veulent intégrer Claude dans leur quotidien via une formation complète. Team déploie un écosystème I.A. complet avec agents, automatisations et hébergement souverain pour une équipe. Enterprise ajoute une infrastructure plus puissante avec des LLM de dernière génération. On vous aide à choisir lors de l'audit gratuit.",
        },
        {
          question: "Y a-t-il un engagement de durée ?",
          answer:
            "Non. Nos offres mensuelles sont résiliables à tout moment avec 30 jours de préavis. On préfère garder nos clients parce que les résultats sont là, pas parce qu'un contrat les y oblige.",
        },
        {
          question: "Est-ce que vous pouvez intégrer l'I.A. à mes outils existants ?",
          answer:
            "Oui, c'est même notre approche par défaut. On connecte les agents I.A. à vos outils actuels : CRM, agenda, messagerie, logiciel métier. On ne vous demande pas de tout changer — on s'adapte à votre environnement.",
        },
        {
          question: "Comment se passe le suivi après le déploiement ?",
          answer:
            "Chaque mois, vous recevez un rapport avec l'évolution de vos indicateurs : tâches automatisées, temps gagné, performance des agents. Un point mensuel de 30 minutes est inclus pour ajuster et optimiser. Vous avez aussi un accès direct à Andy par email , WhatsApp ou Slack.",
        },
        {
          question: "Vous garantissez des résultats ?",
          answer:
            "On garantit une amélioration mesurable dans les 30 premiers jours — ou on ajuste jusqu'à ce que ce soit le cas. Toute agence qui vous promet un résultat précis sans connaître votre contexte vous survend. Ce qu'on promet : des actions concrètes, un suivi rigoureux et une totale transparence sur l'impact.",
        },
      ]} />
      <CtaBannerSolutions />
      <AuditForm />
    </>
  );
}