"use client";
 
import { Hero } from '@/features/pro/hero';
import { AgentDemo } from '@/features/pro/agent-demo';
import { DashboardView } from '@/features/pro/dashboard-view';
import { Features } from '@/features/pro/features';
import { ProProcess } from '@/features/pro/pro-process';
import { EntPricing } from '@/features/entreprise/ent-pricing';
import { FAQSection } from '@/features/landing/faq-section';
import { Cta } from '@/features/pro/cta';
import { SectionDivider } from '@/features/landing/section-divider';

 
export default function Page() {
  return (
    <>
      <Hero />
      <ProProcess />
      <SectionDivider />
      <AgentDemo />
      <SectionDivider />
      <DashboardView/>
      <SectionDivider />
      <Features />
      <SectionDivider />
      <EntPricing />
      <SectionDivider />
      <FAQSection
        faq={[
          {
            question: "C'est quoi la différence entre Premium et Entreprise ?",
            answer:
              "Premium est notre offre la plus complète en accès direct — agents illimités, LLM dernière génération, infrastructure dédiée et accompagnement mensuel inclus. Entreprise s'adresse aux structures qui ont besoin d'un déploiement sur-mesure avec SLA garanti et intégrations API avancées. Si vous hésitez, l'audit gratuit tranche en 30 minutes.",
          },
          {
            question: "Quel LLM est utilisé en Premium ?",
            answer:
              "On déploie les modèles les plus récents — Claude Opus, GPT-4o ou Gemini Ultra selon votre cas d'usage. Vous n'êtes pas limité à un seul modèle : on orchestre le meilleur pour chaque tâche. Et si vous voulez un LLM hébergé chez vous, c'est possible.",
          },
          {
            question: "Combien d'agents IA puis-je avoir ?",
            answer:
              "Illimités. En Premium, on construit autant d'agents que votre activité le nécessite — prospection, support, opérations, finance, RH. Chaque agent est spécialisé et coordonné par un orchestrateur central.",
          },
          {
            question: "Mes données sont-elles isolées des autres clients ?",
            answer:
              "Oui. En Premium, vous bénéficiez d'une infrastructure dédiée — vos données ne partagent aucun serveur avec d'autres clients. Hébergement en Europe, conformité RGPD native, droits d'accès documentés et auditables.",
          },
          {
            question: "L'accompagnement mensuel, ça représente quoi concrètement ?",
            answer:
              "Un point mensuel de 60 minutes avec Andy pour analyser les performances, ajuster les agents et intégrer les nouvelles opportunités IA. Vous avez aussi un accès direct par email, WhatsApp ou Slack entre les sessions.",
          },
          {
            question: "Y a-t-il un engagement de durée ?",
            answer:
              "Non. Premium est résiliable à tout moment avec 30 jours de préavis. On mise sur les résultats pour vous garder — pas sur un contrat.",
          },
        ]}
      />
      <SectionDivider />
      <Cta/>
    </>
  );
}
 
