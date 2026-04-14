"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useSession } from "@/lib/auth-client";
import type { AppAuthPlan } from "@/lib/auth/stripe/auth-plans";
import {
  ADDITIONAL_FEATURES,
  LIMITS_CONFIG,
} from "@/lib/auth/stripe/auth-plans";
import { BILLING_URL } from "@/lib/LINKS";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import { LoadingButton } from "../form/submit-button";
import { upgradeUserAction } from "./plans.action";

  const plans = [
    {
      name: "free",
      displayName: "Clé en main",
      subtitle: "Votre présence Google gérée de A à Z, avec site web, SEO local et CRM pour le suivi.",
      price: "79€",
      priceUnit: "/mois",
      yearlyPrice: "Premier paiement dans 15 jrs",
      cta: "Démarrer maintenant →",
      ctaStyle: "bg-gray-800 hover:bg-gray-900 text-white",
      popular: false,
      limits: { projects: 1, storage: 0.3, members: 1 },
      additionalFeatures: ADDITIONAL_FEATURES.free,
    },
    {
      name: "pro",
      displayName: "Création de site web",
      subtitle: "Site web professionnel qui attire, convainc et convertit — pas juste beau, mais conçu pour ramener des clients.",
      price: "997€",
      priceUnit: "",
      yearlyPrice: "tout compris",
      cta: "En savoir plus →",
      ctaStyle: "bg-orange-500 hover:bg-orange-600 text-white",
      popular: true,
      limits: { projects: 1, storage: 200, members: 1 },
      additionalFeatures: ADDITIONAL_FEATURES.pro,
    },
    {
      name: "ultra",
      displayName: "Référencement web (SEO)",
      subtitle: "Stratégie SEO complète pour améliorer votre positionnement sur Google.",
      price: "497€",
      priceUnit: "",
      yearlyPrice: "à partir de",
      cta: "En savoir plus →",
      ctaStyle: "bg-gray-800 hover:bg-gray-900 text-white",
      popular: false,
      limits: { projects: 1, storage: 400, members: 1 },
      additionalFeatures: ADDITIONAL_FEATURES.ultra,
    },
  ]

export function PricingCard({
  plan,
  isYearly,
}: {
  plan: AppAuthPlan;
  isYearly?: boolean;
}) {
  const { data: session } = useSession();

  const { execute: upgradeUser, isPending } = useAction(upgradeUserAction, {
    onSuccess: (result) => {
      if (result.data.url) {
        window.location.href = result.data.url;
      }
    },
    onError: (error) => {
      toast.error(error.error.serverError ?? "Failed to upgrade plan");
    },
  });

  const monthlyPrice = plan.price;
  const yearlyPrice = plan.yearlyPrice ?? plan.price * 12;
  const displayPrice = isYearly ? Math.round(yearlyPrice / 12) : monthlyPrice;
  const originalPrice = isYearly ? monthlyPrice : null;

  const calculateDiscount = (monthlyPrice: number, yearlyPrice: number) => {
    if (monthlyPrice === 0) return 0;
    const annualCost = monthlyPrice * 12;
    const discount = ((annualCost - yearlyPrice) / annualCost) * 100;
    return Math.round(discount);
  };

  const discount = calculateDiscount(plan.price, plan.yearlyPrice ?? 0);

  return (
    <Card
      className={cn(
        "flex flex-col pb-0 transition-all duration-200 hover:shadow-lg relative",
        plan.isPopular
          ? "border-2 border-orange-500 shadow-md overflow-hidden"
          : "border border-gray-200",
      )}
    >
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-orange-500 text-white text-sm font-medium px-4 py-1 rounded-full">
            Populaire
          </span>
        </div>
      )}

      <CardHeader className="pb-0">
        <CardTitle className="text-2xl font-bold capitalize">
          {plan.name}
        </CardTitle>
        <CardDescription className="mt-1.5 min-h-[3rem]">
          {plan.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pt-6">
        {/* Price block */}
        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold">
              {plan.currency === "USD" ? "$" : plan.currency}
              {displayPrice}
            </span>
            <span className="text-gray-500 ml-1">/mo</span>
          </div>

          {isYearly && originalPrice !== null && originalPrice > 0 && (
            <div className="mt-2 flex items-center gap-2">
              <span className="text-gray-400 line-through text-sm">
                ${originalPrice}/mo
              </span>
              <Badge
                variant="outline"
                className="border-orange-200 bg-orange-50 text-orange-600"
              >
                Save {discount}%
              </Badge>
            </div>
          )}

          {isYearly && yearlyPrice > 0 && (
            <p className="text-gray-500 mt-1 text-sm">
              Billed as ${yearlyPrice} per year
            </p>
          )}

          {plan.freeTrial && (
            <div className="bg-orange-50 text-orange-600 mt-3 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium">
              <Clock className="mr-1.5 size-3.5" />
              {plan.freeTrial.days}-day free trial
            </div>
          )}
        </div>

        {/* Limits */}
        <div className="mb-6 space-y-3">
          {Object.entries(plan.limits).map(([key, value]) => {
            const limitConfig = LIMITS_CONFIG[key as keyof typeof LIMITS_CONFIG];
            const Icon = limitConfig.icon;
            return (
              <div key={key} className="flex items-start gap-3">
                <Icon size={20} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {limitConfig.getLabel(value as number)}
                  </p>
                  <p className="text-xs text-gray-500">{limitConfig.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional features */}
        <ul className="space-y-3">
          {ADDITIONAL_FEATURES[
            plan.name as keyof typeof ADDITIONAL_FEATURES
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <li key={index} className="flex items-start gap-3">
                <Icon size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{feature.label}</p>
                  <p className="text-xs text-gray-500">{feature.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </CardContent>

      <CardFooter className="pt-6 pb-8">
        <LoadingButton
          loading={isPending}
          size="lg"
          className={cn(
            "w-full text-base font-medium transition",
            plan.isPopular
              ? "bg-orange-500 hover:bg-orange-600 text-white"
              : "bg-gray-800 hover:bg-gray-900 text-white",
          )}
          onClick={() => {
            if (!session?.user) {
              toast.error("Please sign in to upgrade");
              return;
            }
            upgradeUser({
              plan: plan.name,
              annual: isYearly ?? false,
              successUrl: `${BILLING_URL}/success`,
              cancelUrl: `${BILLING_URL}/cancel`,
            });
          }}
        >
          {plan.price === 0
            ? "Get Started"
            : isYearly
              ? "Subscribe Yearly"
              : "Subscribe Monthly"}
        </LoadingButton>
      </CardFooter>
    </Card>
  );
}