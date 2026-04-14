import React from 'react';
import {
  Database, 
  HardDrive,
  User,
  Shield,
  MonitorCog,
  Users,
  Coins,
  Headphones,
  Search,
  BarChart2,
  MapPin,
} from "lucide-react";

const PricingTable = () => {
  const LIMITS_CONFIG = {
    projects: {
      icon: Database,
      getLabel: (value: number) =>
        `${value === 1 ? "Hébergé par mon-agentai.cloud" : "Hébergé sur votre-domain.com"}`,
      description: "Environnement de développement.",
    },
    storage: {
      icon: HardDrive,
      getLabel: (value: number) => `${value} GB Storage`,
      description: "Stockage des fichiers",
    },
    members: {
      icon: Users,
      getLabel: (value: number) =>
        `${value} Team ${value === 1 ? "Member" : "Members"}`,
      description: "Nombre de license membre",
    },
  };

  const ADDITIONAL_FEATURES = {
    free: [
      { icon: User, label: "Site web professionnel inclus", description: "Inclus dans votre abonnement" },
      { icon: Search, label: "Stratégie SEO local déployée", description: "Visibilité locale optimisée" },
      { icon: MonitorCog, label: "Création de contenu mensuel", description: "Contenu régulier pour votre site" },
      { icon: Shield, label: "Hébergement & maintenance inclus", description: "Zéro souci technique" },
    ],
    pro: [
      { icon: MonitorCog, label: "Design sur-mesure responsive", description: "Adapté à tous les écrans" },
      { icon: Search, label: "Optimisation SEO native", description: "Référencement intégré dès la création" },
      { icon: BarChart2, label: "Performances maximales", description: "Site rapide et optimisé" },
      { icon: HardDrive, label: "+ de 5 pages selon votre activité", description: "Structure complète" },
    ],
    ultra: [
      { icon: Search, label: "Audit SEO technique complet", description: "Analyse approfondie de votre site" },
      { icon: MonitorCog, label: "Recherche de mots-clés stratégiques", description: "Ciblage précis de votre marché" },
      { icon: BarChart2, label: "Optimisation on-page", description: "Chaque page optimisée" },
      { icon: Shield, label: "Stratégie de contenu", description: "Plan éditorial sur-mesure" },
    ],
  };

  const Packs = [
    {
      title: "Audit de visibilité",
      price: "97€",
      subtitle: "alanyse complète de votre présence en ligne avec recommandations personnalisées",
      cta: "En savoir plus →",
      ctaStyle: "bg-gray-800 hover:bg-gray-900 text-white",
    },
    {
      title: "Optimisattion Fiche Google",
      price: "247€",
      subtitle: "à partir de",
      cta: "En savoir plus →",
      ctaStyle: "bg-gray-800 hover:bg-gray-900 text-white",
    },
    {
      title: "Référencement web (SEO)",
      price: "497€",
      subtitle: "à partir de",
      cta: "En savoir plus →",
      ctaStyle: "bg-gray-800 hover:bg-gray-900 text-white",
    },
  ];

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
  ];

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Communication Packs Column */}
          <div className="lg:col-span-1">
            <div className="space-y-4 md:space-y-8">
              {Packs.map((pack, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
                >
                  <h3 className="text-lg font-bold mb-3">{pack.title}</h3>
                  <div className="mb-3">
                    <span className="text-3xl font-bold text-orange-500">{pack.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{pack.subtitle}</p>
                  <button className={`w-full py-2.5 px-4 rounded-lg font-medium transition ${pack.ctaStyle}`}>
                    {pack.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Subscription Plans - 3 columns */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <div key={index} className="flex flex-col">
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-sm flex flex-col relative h-full ${
                      plan.popular ? 'border-2 border-orange-500' : 'border border-gray-200'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-orange-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                          Populaire
                        </span>
                      </div>
                    )}

                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-2">{plan.displayName}</h3>
                      <p className="text-sm text-gray-600 min-h-[3rem]">{plan.subtitle}</p>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-gray-600">{plan.priceUnit}</span>
                      </div>
                      {plan.yearlyPrice && (
                        <p className="text-sm text-gray-500 mt-1">
                          ou {plan.yearlyPrice}/an
                        </p>
                      )}
                    </div>

                    {/* Limits */}
                    <div className="mb-6 space-y-3">
                      {Object.entries(plan.limits).map(([key, value]) => {
                        const config = LIMITS_CONFIG[key as keyof typeof LIMITS_CONFIG];
                        const Icon = config.icon;
                        return (
                          <div key={key} className="flex items-start gap-3">
                            <Icon size={20} className="text-orange-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {config.getLabel(value as number)}
                              </p>
                              <p className="text-xs text-gray-500">{config.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Additional Features */}
                    <ul className="space-y-3 mb-6 flex-grow">
                      {plan.additionalFeatures.map((feature, featureIndex) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <FeatureIcon size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium text-gray-900">{feature.label}</p>
                              <p className="text-xs text-gray-600">{feature.description}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>

                    {/* CTA Button */}
                    <button className={`w-full py-3 px-6 rounded-lg font-medium transition mt-auto ${plan.ctaStyle}`}>
                      {plan.cta}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;