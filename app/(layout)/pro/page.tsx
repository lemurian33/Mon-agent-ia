"use client";
 
import { Hero } from '@/features/pro/hero';
import { AgentDemo } from '@/features/pro/agent-demo';
import { DashboardView } from '@/features/pro/dashboard-view';
import { Features } from '@/features/pro/features';
import { ProProcess } from '@/features/pro/pro-process';
import { ProPricing } from '@/features/pro/pro-pricing';
import { FAQSection } from '@/features/landing/faq-section';
import { Cta } from '@/features/pro/cta';
import { SectionDivider } from '@/features/landing/section-divider';

 
export default function Page() {
  return (
    <>
      <Hero />
      <AgentDemo />
      <SectionDivider />
      <Features />
      <SectionDivider />
      <DashboardView/>
      <SectionDivider />
      <ProProcess />
      <SectionDivider />
      <ProPricing />
      <SectionDivider />
      <FAQSection
        faq={[
          {
            question: "Combien de temps pour être opérationnel ?",
            answer:
              "Moins de 7 jours. Dès l'audit validé, on configure vos agents, connecte vos outils et livre un système fonctionnel en production. Vous êtes autonome dès la première semaine.",
          },
          {
            question: "Que se passe-t-il si je veux changer d'outils métier ?",
            answer:
              "Aucun problème. Vos agents s'adaptent. On reconnecte les intégrations selon vos nouveaux outils sans tout reconstruire — c'est l'avantage d'une architecture modulaire.",
          },
          {
            question: "Le prix de 208€/mois inclut quoi exactement ?",
            answer:
              "L'hébergement de vos agents sur serveur mutualisé, la maintenance technique, les mises à jour, le reporting mensuel et le point de suivi de 30 minutes. Les intégrations et le setup initial sont facturés à part lors de l'audit.",
          },
          {
            question: "Combien d'agents IA puis-je avoir avec la formule Pro ?",
            answer:
              "Jusqu'à 5 agents spécialisés coordonnés par un orchestrateur central — marketing, opérations, support, qualification de leads, analyse data. Au-delà, on bascule sur la formule Entreprise.",
          },
          {
            question: "Mes données passent-elles par des serveurs tiers ?",
            answer:
              "Non. L'infrastructure est configurée pour que vos données restent sur votre périmètre. Conformité RGPD intégrée dès le départ, hébergement en Europe, droits d'accès documentés.",
          },
          {
            question: "Y a-t-il un engagement de durée ?",
            answer:
              "Non. La formule Pro est résiliable à tout moment avec 30 jours de préavis. On préfère vous garder parce que les résultats sont là, pas parce qu'un contrat vous y oblige.",
          },
        ]}
      />
      <SectionDivider />
      <Cta/>
    </>
  );
}
 
