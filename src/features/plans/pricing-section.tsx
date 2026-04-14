"use client";

import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { AUTH_PLANS } from "@/lib/auth/stripe/auth-plans";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { PricingCard } from "./pricing-card";

// Static packs — purely visual, no Stripe logic
const COMMUNICATION_PACKS = [
  {
    title: "Audit de visibilité",
    price: "97€",
    subtitle: "alanyse complète de votre présence en ligne avec recommandations personnalisées",
    cta: "En savoir plus →",
    ctaStyle: "bg-gray-800 hover:bg-gray-900 text-white",
    href: "/services/audit-visibilite",
  },
  {
    title: "Optimisattion Fiche Google",
    price: "247€",
    subtitle: "alanyse complète de votre présence en ligne avec recommandations personnalisées",
    cta: "En savoir plus →",
    ctaStyle: "bg-gray-800 hover:bg-gray-900 text-white",
    href: "/services/partenariat-leads",
  },
  {
    title: "Référencement web (SEO)",
    price: "497€",
    subtitle: "alanyse complète de votre présence en ligne avec recommandations personnalisées",
    cta: "En savoir plus →",
    ctaStyle: "bg-gray-800 hover:bg-gray-900 text-white",
    href: "/services/optimisation-fiche-google",
  },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="from-background to-muted/20 w-full bg-gradient-to-b py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Choisissez votre forfait
            </h2>
            <p className="text-muted-foreground max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choisissez le forfait idéal pour vos besoins. Passez à un forfait supérieur ou inférieur à tout moment.
            </p>
          </div>

          {/* Monthly / Yearly toggle */}
          <div className="bg-muted/50 mt-4 flex items-center space-x-4 rounded-md p-2">
            <span
              className={cn(
                "rounded-md px-4 py-2 text-sm font-medium transition-all duration-200",
                !isYearly
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground",
              )}
            >
              Mois
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-orange-500"
            />
            <div
              className={cn(
                "flex items-center rounded-md px-4 py-2 transition-all duration-200",
                isYearly
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground",
              )}
            >
              <span className="text-sm font-medium">Yearly</span>
              <Badge
                variant="outline"
                className="border-orange-200 bg-orange-50 text-orange-600 ml-2"
              >
                Economiser 20%
              </Badge>
            </div>
          </div>
        </div>

        {/* 4-column grid: 1 packs column + 3 plan cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Left column — static communication packs */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {COMMUNICATION_PACKS.map((pack, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-6 shadow-sm border border-gray-200"
                >
                  <h3 className="text-lg font-bold mb-3">{pack.title}</h3>
                  <div className="mb-3">
                    <span className="text-3xl font-bold text-orange-500">
                      {pack.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{pack.subtitle}</p>
                  <Link
                    href={pack.href}
                    className="block w-full py-2.5 px-4 rounded-lg font-medium transition bg-gray-800 hover:bg-gray-900 text-white text-sm text-center"
                  >
                    {pack.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right 3 columns — Stripe-backed plan cards */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {AUTH_PLANS.filter((p) => !p.isHidden).map((plan) => (
                <PricingCard key={plan.name} plan={plan} isYearly={isYearly} />
              ))}
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Tous les plans incluent un audit de visibilité gratuit et un accompagnement personnalisé pour booster votre présence en ligne.
          </p>
          <p className="text-muted-foreground mt-2">
            Besoin d'un plan personnalisé ?{" "}
            <Link
              href="/contact"
              className="text-orange-500 font-medium hover:underline"
            >
              Contactez-nous
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}