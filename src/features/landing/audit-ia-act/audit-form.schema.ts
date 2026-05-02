import { z } from "zod";

export const Step1Schema = z.object({
  secteur: z.string().min(1, "Veuillez sélectionner votre secteur"),
  taille:  z.string().min(1, "Veuillez indiquer la taille de votre équipe"),
});

export const Step2Schema = z.object({
  outils:     z.array(z.string()).min(1, "Sélectionnez au moins un outil"),
  conformite: z.string().min(1, "Veuillez indiquer votre niveau de conformité"),
});

export const Step3Schema = z.object({
  objectif: z.string().min(1, "Veuillez sélectionner votre objectif"),
  budget:   z.string().min(1, "Sélectionnez un budget"),
  note:     z.string().optional(),
});

export const Step4Schema = z.object({
  prenom:     z.string().min(2, "Prénom requis"),
  nom:        z.string().min(2, "Nom requis"),
  email:      z.string().email("Email invalide"),
  tel:        z.string().optional(),
  entreprise: z.string().min(2, "Nom d'entreprise requis"),
});

export const AuditFormAIActSchema = Step1Schema
  .merge(Step2Schema)
  .merge(Step3Schema)
  .merge(Step4Schema);

export type AuditFormAIActData = z.infer<typeof AuditFormAIActSchema>;