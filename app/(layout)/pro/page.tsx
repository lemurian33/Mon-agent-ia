"use client";
 
import { Hero } from '@/features/pro/hero';
import { AgentDemo } from '@/features/pro/agent-demo';
import { DashboardView } from '@/features/pro/dashboard-view';
import { Features } from '@/features/pro/features';
import { ProProcess } from '@/features/pro/pro-process';
import { ProPricing } from '@/features/pro/pro-pricing';
import { SectionDivider } from '@/features/landing/section-divider';
 
export default function Page() {
  return (
    <>
      <Hero />
      <AgentDemo />
      <SectionDivider />
      <DashboardView/>
      <SectionDivider />
      <Features />
      <SectionDivider />
      <ProProcess />
      <SectionDivider />
      <ProPricing />
      <SectionDivider />
    </>
  );
}
 
