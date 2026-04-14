// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import Image from "next/image";
import { LandingHeader } from "@/features/landing/landing-header";
import { Hero } from "@/features/landing/hero";
import { HowItWorks } from "@/features/landing/how-it-works";
import { Results } from "@/features/landing/results";
import { Offers } from "@/features/landing/offers";
import { SectionDivider } from "@/features/landing/section-divider";
import { Testimonials } from "@/features/landing/testimonials";
import { Footer } from "@/features/layout/footer";
import { About } from "@/features/landing/about";
import { AuditForm } from "@/features/landing/audit/audit-form";
import { CtaBanner } from "@/features/landing/cta-banner";
import {Pricing} from "@/features/plans/pricing-section";

export default function HomePage() {
  return (
    <div className="bg-background text-foreground relative flex h-fit flex-col">
      <div className="mt-16"></div>

      <LandingHeader />

      <Hero />

      <HowItWorks />

      <Results />

      <Offers />

      <About />

      <Testimonials />       

      <AuditForm />

      <CtaBanner />

      <SectionDivider />

      <Footer />
    </div>
  );
}
