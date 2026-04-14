import React from 'react';
import {
  Brain,
  HardDrive,
  User,
  Shield,
  MonitorCog,
  Users,
  Zap,
  Headphones,
  BookOpen,
  BarChart2,
  Lock,
  Bot,
  Network,
  GraduationCap,
} from "lucide-react";

const PricingTable = () => {
  const LIMITS_CONFIG = {
    hosting: {
      icon: HardDrive,
      getLabel: (value: number) =>
        value === 1 ? "Hébergé sur mon-agentai.cloud" : "Hébergé sur votre domaine",
      description: "Environnement souverain et sécurisé",
    },
    llm: {
      icon: Brain,
      getLabel: (value: number) =>
        value === 1 ? "Claude & LLM open source" : "LLM premium dernière génération",
      description: "Modèles d'IA intégrés",
    },
    members: {
      icon: Users,
      getLabel: (value: number) =>
        value === 1 ? "1 utilisateur" : `${value} utilisateurs`,
      description: "Licences incluses",
    },
  };

  const ADDITIONAL_FEATURES = {
    solo: [
      { icon: GraduationCap, label: "Formation Claude de A à Z", description: "Apprenez à maîtriser l'IA au quotidien" },
      { icon: MonitorCog, label: "Accompagnement intégration personnalisé", description: "Adapté à votre métier" },
      { icon: BookOpen, label: "Prompts & templates métier inclus", description: "Prêts à l'emploi dès le départ" },
      { icon: Users, label: "Accès communauté privée", description: "Entraide et ressources exclusives" },
    ],
    team: [
      { icon: HardDrive, label: "Hébergement Coolify inclus", description: "Infrastructure souveraine RGPD" },
      { icon: Zap, label: "Automatisation n8n + RAG", description: "Workflows et mémoire vectorielle" },
      { icon: Brain, label: "LLM open source (Claude & autres)", description: "Modèles configurés pour votre métier" },
      { icon: Shield, label: "Conformité RGPD complète", description: "Vos données restent les vôtres" },
    ],
    enterprise: [
      { icon: BarChart2, label: "KV8 haute performance", description: "Infrastructure plus puissante" },
      { icon: Brain, label: "Gemma 4 & modèles premium", description: "LLM dernière génération" },
      { icon: Network, label: "RAG avancé multi-sources", description: "Connexion à vos bases de données" },
      { icon: Headphones, label: "Support prioritaire dédié", description: "Onboarding équipe complet" },
    ],
  };

  const Packs = [
    {
      title: "Audit I.A. gratuit",
      price: "Offert",
      subtitle: "30 min pour identifier vos process automatisables et estimer vos gains concrets.",
      cta: "Réserver mon audit →",
      ctaStyle: "bg-gray-800 hover:bg-gray-900 text-white",
    },
    {
      title: "Intégration sur mesure",
      price: "Sur devis",
      subtitle: "Déploiement full stack personnalisé avec intégrations métier spécifiques.",
      cta: "Nous contacter →",
      ctaStyle: "bg-gray-800 hover:bg-gray-900 text-white",
    },
    {
      title: "Formation équipe",
      price: "Sur devis",
      subtitle: "Sessions pratiques avancées sur cas concrets issus de votre métier.",
      cta: "En savoir plus →",
      ctaStyle: "bg-gray-800 hover:bg-gray-900 text-white",
    },
  ];

  const plans = [
    {
      name: "solo",
      displayName: "Solo",
      subtitle: "Formation complète + accompagnement pour intégrer Claude dans votre quotidien. Idéal pour les indépendants.",
      price: "97€",
      priceUnit: "/mois",
      yearlyPrice: "Sans engagement",
      cta: "Démarrer →",
      ctaStyle: "bg-gray-800 hover:bg-gray-900 text-white",
      popular: false,
      limits: { hosting: 1, llm: 1, members: 1 },
      additionalFeatures: ADDITIONAL_FEATURES.solo,
    },
    {
      name: "team",
      displayName: "Team",
      subtitle: "Écosystème I.A. complet, souverain et conforme RGPD. Automatisation et LLM open source pour votre équipe.",
      price: "147€",
      priceUnit: "/mois",
      yearlyPrice: "Sans engagement",
      cta: "Découvrir →",
      ctaStyle: "bg-orange-500 hover:bg-orange-600 text-white",
      popular: true,
      limits: { hosting: 2, llm: 1, members: 5 },
      additionalFeatures: ADDITIONAL_FEATURES.team,
    },
    {
      name: "enterprise",
      displayName: "Enterprise",
      subtitle: "Tout le plan Team avec une infrastructure plus puissante et des modèles de dernière génération.",
      price: "297€",
      priceUnit: "/mois",
      yearlyPrice: "Sans engagement",
      cta: "En savoir plus →",
      ctaStyle: "bg-gray-800 hover:bg-gray-900 text-white",
      popular: false,
      limits: { hosting: 2, llm: 2, members: 10 },
      additionalFeatures: ADDITIONAL_FEATURES.enterprise,
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