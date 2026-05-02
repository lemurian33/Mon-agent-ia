"use client";

import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { submitAuditFormAIActAction } from "./audit-form.action";
import {
  type AuditFormAIActData,
  AuditFormAIActSchema,
  Step1Schema,
  Step2Schema,
  Step3Schema,
  Step4Schema,
} from "./audit-form.schema";

// ─── Données statiques ────────────────────────────────────────────────────────

const SECTEURS = [
  { value: "Artisan / BTP",                    icon: "🔨", label: "Artisan / BTP",       desc: "Plombier, électricien, menuisier…" },
  { value: "Santé / Bien-être",                icon: "🏥", label: "Santé / Bien-être",    desc: "Médecin, kiné, coach…" },
  { value: "Commerce / Retail",                icon: "🛒", label: "Commerce / Retail",     desc: "Boutique, e-commerce, opticien…" },
  { value: "Professionnel du droit / Finance", icon: "⚖️", label: "Droit / Finance",       desc: "Avocat, comptable, assureur…" },
  { value: "Industrie / Fabrication",          icon: "🏭", label: "Industrie",             desc: "Fabricant, maintenance, logistique…" },
  { value: "Autre PME / Service",              icon: "💼", label: "Autre PME / Service",   desc: "RH, agence, immobilier…" },
] as const;

const TAILLES = [
  { value: "Seul(e)",        label: "Seul(e) / Micro-entrepreneur" },
  { value: "2-5 personnes",  label: "2 à 5 personnes" },
  { value: "6-20 personnes", label: "6 à 20 personnes" },
  { value: "20+ personnes",  label: "Plus de 20 personnes" },
] as const;

const OUTILS = [
  "ChatGPT / GPT-4 (OpenAI)",
  "Claude (Anthropic)",
  "Microsoft Copilot / Office IA",
  "Logiciel métier avec IA intégrée (RH, devis, CRM…)",
  "Chatbot sur mon site web / WhatsApp",
  "Aucun pour l'instant — je veux démarrer",
];
// ✅ Fix 4 — tableau string[] mutable (pas readonly tuple) → .includes() sans erreur

const CONFORMITES = [
  { value: "Non, rien",               icon: "❌", label: "Non, rien" },
  { value: "Un peu (RGPD seulement)", icon: "🟡", label: "Un peu (RGPD)" },
  { value: "Oui, déjà avancé",        icon: "✅", label: "Oui, avancé" },
] as const;

const OBJECTIFS = [
  { value: "Me mettre en conformité AI Act rapidement", icon: "📋", label: "Conformité AI Act",     desc: "Attestation + documentation" },
  { value: "Former mes équipes à l'IA",                icon: "👥", label: "Former mes équipes",    desc: "Prise en main & bonnes pratiques" },
  { value: "Déployer un écosystème IA complet",        icon: "🚀", label: "Écosystème IA complet", desc: "Agents, automatisation, intégration" },
  { value: "Les deux : conformité + efficacité IA",    icon: "⚡", label: "Les deux",              desc: "Conformité + gain de productivité" },
] as const;

const BUDGETS = [
  "79€/mois (Essentiel)",
  "à partir de 208€/mois (Entreprise)",
  "Premium — Sur devis",
  "Sur devis — Infrastructure dédiée",
] as const;

// ─── Helpers UI ───────────────────────────────────────────────────────────────

const inputCn = (hasError: boolean) =>
  cn(
    "w-full rounded-xl border bg-background px-4 py-3",
    "text-sm text-foreground placeholder:text-muted-foreground/50",
    "outline-none transition-all",
    "focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/10",
    hasError ? "border-red-500/60" : "border-border"
  );

const Field = ({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-semibold text-foreground">
      {label}
      {required && <span className="ml-0.5 text-orange-500"> *</span>}
    </label>
    {children}
    {error && <p className="text-xs text-red-400">{error}</p>}
  </div>
);

const NextBtn = ({ onClick, label = "Continuer" }: { onClick: () => void; label?: string }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex-1 rounded-md bg-orange-500 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-400 active:scale-95"
  >
    {label} →
  </button>
);

const BackBtn = ({ onClick }: { onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-muted"
  >
    ← Retour
  </button>
);

// ─── Composant principal ──────────────────────────────────────────────────────

export const AuditFormAIAct = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [summaryData, setSummaryData] = useState<Partial<AuditFormAIActData>>({});

  const form = useForm<AuditFormAIActData>({
    resolver: zodResolver(AuditFormAIActSchema),
    mode: "onTouched",
    defaultValues: {
      secteur:    "",
      taille:     "",
      outils:     [],        // ✅ Fix 2 — initialisé [], jamais undefined → watch() retourne toujours string[]
      conformite: "",
      objectif:   "",
      budget:     BUDGETS[0], // ✅ Fix 3 — initialisé avec valeur, jamais undefined → pas besoin de ??
      note:       "",
      prenom:     "",
      nom:        "",
      email:      "",
      tel:        "",
      entreprise: "",
    },
  });

  const {
    register,
    control,
    trigger,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = form;

  // ✅ Fix 2 & 3 — types explicites, defaultValues garantissent la non-nullité
  const watchedOutils: string[] = watch("outils");
  const watchedBudget: string   = watch("budget");

  const goNext = async () => {
    const schemas = { 1: Step1Schema, 2: Step2Schema, 3: Step3Schema, 4: Step4Schema };
    const fields = Object.keys(
      schemas[step as keyof typeof schemas].shape
    ) as (keyof AuditFormAIActData)[];
    const ok = await trigger(fields);
    if (ok) setStep((s) => Math.min(s + 1, 4));
  };

  const onSubmit = async (data: AuditFormAIActData) => {
    await submitAuditFormAIActAction(data);
    setSummaryData(data);
    setSubmitted(true);
  };

  // ✅ Fix 4 — .includes() sur string[] mutable, pas sur readonly tuple
  const toggleOutil = (outil: string) => {
    const updated = watchedOutils.includes(outil)
      ? watchedOutils.filter((o) => o !== outil)
      : [...watchedOutils, outil];
    setValue("outils", updated, { shouldValidate: true });
  };

  const STEP_LABELS = ["Votre profil", "Vos usages IA", "Votre besoin", "Contact"];

  // ── Écran de succès ──────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <section id="audit-form" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-xl px-6 text-center lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-10">
            <div className="mb-4 flex justify-center">
              <div className="flex size-14 items-center justify-center rounded-full bg-orange-500/10">
                <span className="text-3xl">🎉</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Demande envoyée !</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Votre programme de formation personnalisé est en cours de préparation. Andy vous recontacte sous 24h.
            </p>

            <div className="mt-6 rounded-xl border border-orange-500/20 bg-orange-500/5 p-4 text-left">
              {(
                [
                  ["Secteur",    summaryData.secteur],
                  ["Équipe",     summaryData.taille],
                  ["Outils IA",  summaryData.outils?.join(", ") || "—"],
                  ["Objectif",   summaryData.objectif],
                  ["Budget",     summaryData.budget],
                  ["Entreprise", summaryData.entreprise],
                ] as [string, string | undefined][]
              ).map(([key, val]) => (
                <div key={key} className="flex justify-between border-b border-border py-2 text-sm last:border-none">
                  <span className="text-muted-foreground">{key}</span>
                  <span className="font-medium text-foreground">{val ?? "—"}</span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              En attendant, réservez directement votre appel découverte :
            </p>
            <a
              href="#audit-form"
              className="mt-3 inline-block rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-400"
            >
              Réserver mon appel →
            </a>
          </div>
        </div>
      </section>
    );
  }

  // ── Formulaire ───────────────────────────────────────────────────────────────
  return (
    <section id="audit-form" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold tracking-widest text-orange-700 uppercase dark:border-orange-800/60 dark:bg-orange-950/60 dark:text-orange-300">
            Formation personnalisée
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Obtenez votre programme sur mesure
          </h2>
          <p className="mt-4 text-base text-muted-foreground text-balance">
            4 étapes · 3 minutes · Programme de formation AI Act adapté à votre métier et votre secteur.
          </p>
        </div>

        {/* Card */}
        <div className="mx-auto mt-16 max-w-lg">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">

            {/* Form header */}
            <div className="border-b border-border bg-muted/50 px-8 py-6">
              <p className="text-base font-semibold text-foreground">Votre formation AI Act personnalisée</p>
              <p className="mt-0.5 text-sm text-muted-foreground">4 étapes · 3 minutes · Programme sur mesure offert</p>
            </div>

            {/* Stepper */}
            <div className="px-8 pt-6">
              <div className="flex w-full items-center">
                {STEP_LABELS.map((label, i) => {
                  const n = i + 1;
                  return (
                    <div key={n} className="flex flex-1 items-center last:flex-none">
                      <div className="flex flex-col items-center">
                        <div
                          className={cn(
                            "flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all",
                            step === n
                              ? "bg-orange-500 text-white"
                              : step > n
                                ? "bg-orange-500/30 text-orange-500"
                                : "bg-muted text-muted-foreground"
                          )}
                        >
                          {step > n ? "✓" : n}
                        </div>
                        <span
                          className={cn(
                            "mt-1 hidden text-[10px] font-medium sm:block",
                            step === n ? "text-orange-500" : "text-muted-foreground"
                          )}
                        >
                          {label}
                        </span>
                      </div>
                      {n < 4 && (
                        <div
                          className={cn(
                            "mx-2 mb-3 h-0.5 flex-1 transition-all",
                            step > n ? "bg-orange-500/30" : "bg-border"
                          )}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Body */}
            <div className="px-8 pb-8 pt-6">

              {/* ── Étape 1 : Profil ── */}
              {step === 1 && (
                <div className="flex flex-col gap-5">
                  <Field label="Votre secteur d'activité" required error={errors.secteur?.message}>
                    <Controller
                      name="secteur"
                      control={control}
                      render={({ field }) => (
                        <div className="grid grid-cols-2 gap-2">
                          {SECTEURS.map((s) => (
                            <button
                              key={s.value}
                              type="button"
                              onClick={() => field.onChange(s.value)}
                              className={cn(
                                "rounded-xl border p-3 text-left transition-all",
                                field.value === s.value
                                  ? "border-orange-500/50 bg-orange-500/5"
                                  : "border-border bg-background hover:border-orange-500/30"
                              )}
                            >
                              <span className="mb-1 block text-xl">{s.icon}</span>
                              <span className="block text-xs font-semibold text-foreground">{s.label}</span>
                              <span className="mt-0.5 block text-xs text-muted-foreground">{s.desc}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    />
                  </Field>

                  <Field label="Taille de votre équipe" required error={errors.taille?.message}>
                    <select {...register("taille")} className={inputCn(!!errors.taille)}>
                      <option value="">Sélectionner…</option>
                      {TAILLES.map((t) => (
                        <option key={t.value} value={t.value}>{t.label}</option>
                      ))}
                    </select>
                  </Field>

                  <div className="flex items-center justify-between border-t border-border pt-2">
                    <span className="text-xs text-muted-foreground">Étape 1/4</span>
                    <NextBtn onClick={goNext} />
                  </div>
                </div>
              )}

              {/* ── Étape 2 : Usages IA ── */}
              {step === 2 && (
                <div className="flex flex-col gap-5">
                  <Field label="Quels outils IA utilisez-vous déjà ?" required error={errors.outils?.message}>
                    <div className="flex flex-col gap-2">
                      {OUTILS.map((outil) => (
                        <label
                          key={outil}
                          className={cn(
                            "flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition-all",
                            watchedOutils.includes(outil)
                              ? "border-orange-500/50 bg-orange-500/5"
                              : "border-border bg-background hover:border-orange-500/30"
                          )}
                        >
                          <input
                            type="checkbox"
                            checked={watchedOutils.includes(outil)}
                            onChange={() => toggleOutil(outil)}
                            className="size-4 shrink-0 cursor-pointer accent-orange-500"
                          />
                          <span className="text-sm text-foreground">{outil}</span>
                        </label>
                      ))}
                    </div>
                  </Field>

                  <Field label="Avez-vous déjà fait une démarche de conformité IA ?" required error={errors.conformite?.message}>
                    <Controller
                      name="conformite"
                      control={control}
                      render={({ field }) => (
                        <div className="grid grid-cols-3 gap-2">
                          {CONFORMITES.map((c) => (
                            <button
                              key={c.value}
                              type="button"
                              onClick={() => field.onChange(c.value)}
                              className={cn(
                                "rounded-xl border p-3 text-center transition-all",
                                field.value === c.value
                                  ? "border-orange-500/50 bg-orange-500/5"
                                  : "border-border bg-background hover:border-orange-500/30"
                              )}
                            >
                              <span className="mb-1 block text-xl">{c.icon}</span>
                              <span className="block text-xs font-semibold text-foreground">{c.label}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    />
                  </Field>

                  <div className="flex items-center gap-3 border-t border-border pt-2">
                    <BackBtn onClick={() => setStep(1)} />
                    <span className="text-xs text-muted-foreground">Étape 2/4</span>
                    <NextBtn onClick={goNext} />
                  </div>
                </div>
              )}

              {/* ── Étape 3 : Besoin ── */}
              {step === 3 && (
                <div className="flex flex-col gap-5">
                  <Field label="Quel est votre objectif principal ?" required error={errors.objectif?.message}>
                    <Controller
                      name="objectif"
                      control={control}
                      render={({ field }) => (
                        <div className="grid grid-cols-2 gap-2">
                          {OBJECTIFS.map((o) => (
                            <button
                              key={o.value}
                              type="button"
                              onClick={() => field.onChange(o.value)}
                              className={cn(
                                "rounded-xl border p-3 text-left transition-all",
                                field.value === o.value
                                  ? "border-orange-500/50 bg-orange-500/5"
                                  : "border-border bg-background hover:border-orange-500/30"
                              )}
                            >
                              <span className="mb-1 block text-xl">{o.icon}</span>
                              <span className="block text-xs font-semibold text-foreground">{o.label}</span>
                              <span className="mt-0.5 block text-xs text-muted-foreground">{o.desc}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    />
                  </Field>

                  <Field label="Budget mensuel envisagé">
                    <div className="space-y-3">
                      <p className="text-2xl font-bold text-orange-500">{watchedBudget}</p>
                      <input
                        type="range"
                        min={0}
                        max={3}
                        step={1}
                        value={Math.max(0, BUDGETS.indexOf(watchedBudget as typeof BUDGETS[number]))}
                        onChange={(e) => setValue("budget", BUDGETS[Number(e.target.value)])}
                        className="w-full accent-orange-500"
                      />
                      <div className="flex justify-between text-[10px] text-muted-foreground">
                        <span>79€</span><span>208€</span><span>Premium</span><span>Sur devis</span>
                      </div>
                    </div>
                  </Field>

                  <Field label="Quelque chose à nous préciser ? (optionnel)">
                    <textarea
                      {...register("note")}
                      rows={3}
                      placeholder="Décrivez votre situation, vos outils actuels, vos enjeux…"
                      className={inputCn(false)}
                    />
                  </Field>

                  <div className="flex items-center gap-3 border-t border-border pt-2">
                    <BackBtn onClick={() => setStep(2)} />
                    <span className="text-xs text-muted-foreground">Étape 3/4</span>
                    <NextBtn onClick={goNext} />
                  </div>
                </div>
              )}

              {/* ── Étape 4 : Contact ── */}
              {step === 4 && (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Prénom" required error={errors.prenom?.message}>
                      <input {...register("prenom")} placeholder="Jean" className={inputCn(!!errors.prenom)} />
                    </Field>
                    <Field label="Nom" required error={errors.nom?.message}>
                      <input {...register("nom")} placeholder="Dupont" className={inputCn(!!errors.nom)} />
                    </Field>
                  </div>

                  <Field label="Email professionnel" required error={errors.email?.message}>
                    <input {...register("email")} type="email" placeholder="jean@monentreprise.fr" className={inputCn(!!errors.email)} />
                  </Field>

                  <Field label="Téléphone (pour vous rappeler sous 24h)" error={errors.tel?.message}>
                    <input {...register("tel")} type="tel" placeholder="06 XX XX XX XX" className={inputCn(!!errors.tel)} />
                  </Field>

                  <Field label="Nom de votre entreprise" required error={errors.entreprise?.message}>
                    <input {...register("entreprise")} placeholder="Mon Entreprise SAS" className={inputCn(!!errors.entreprise)} />
                  </Field>

                  <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
                    🔒 Vos données sont traitées de manière confidentielle et utilisées uniquement pour préparer votre programme de formation. Aucune revente, aucun démarchage.
                  </div>

                  <div className="flex items-center gap-3 border-t border-border pt-2">
                    <BackBtn onClick={() => setStep(3)} />
                    <span className="text-xs text-muted-foreground">Étape 4/4</span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 rounded-md bg-orange-500 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-400 disabled:opacity-60 active:scale-95"
                    >
                      {isSubmitting ? "Envoi…" : "Envoyer ma demande ✓"}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};