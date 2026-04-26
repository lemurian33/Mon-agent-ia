"use client";
 
import React from 'react';
import { Hero } from '@/features/pro/hero';
import { AgentDemo } from '@/features/pro/agent-demo';
import { DashboardView } from '@/features/pro/dashboard-view';
import { SectionDivider } from '@/features/landing/section-divider';
 
export default function Page() {
  return (
    <>
      <Hero />
      <AgentDemo />
      <DashboardView/>
      <SectionDivider />
    </>
  );
}
 
