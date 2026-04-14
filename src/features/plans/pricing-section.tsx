"use client";

import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { AUTH_PLANS } from "@/lib/auth/stripe/auth-plans";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { PricingCard } from "./pricing-card";

const COMMUNICATION_PACKS = [
  {
    title: "Audit I.A. gratuit",
    price: "Offert",
    subtitle: "30 min pour identifier vos process automatisables et estimer vos gains concrets. Sans engagement.",
    cta: "Réserver mon audit →",
    href: "/#audit-form",
  },
  {
    title: "Premium",
    price: "Sur devis",
    subtitle: "Déploiement full stack personnalisé avec intégrations métier spécifiques et SLA dédié.",
    cta: "Nous contacter →",
    href: "/contact",
  },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="from-background to-muted/20 w-full bg-gradient-to-b py-12 md:py-24 lg:py-32">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Choisissez votre niveau d'intégration I.A.
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              De la formation solo à l'écosystème enterprise — souverain, conforme RGPD et taillé pour votre métier.
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
              Mensuel
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
              <span className="text-sm font-medium">Annuel</span>
              <Badge
                variant="outline"
                className="border-orange-200 bg-orange-50 text-orange-600 ml-2"
              >
                Économiser 20%
              </Badge>
            </div>
          </div>
        </div>

        {/* 4-column grid: 1 packs column + 3 plan cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Left column — static packs */}
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
            Tous les plans incluent un audit I.A. gratuit et un accompagnement personnalisé pour identifier vos opportunités d'automatisation.
          </p>
          <p className="text-muted-foreground mt-2">
            Besoin d'une configuration sur mesure ?{" "}
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