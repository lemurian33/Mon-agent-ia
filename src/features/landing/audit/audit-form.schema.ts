import { z } from "zod";

export const Step1Schema = z.object({
  firstname: z.string().min(2, "Prénom requis"),
  lastname:  z.string().min(2, "Nom requis"),
  phone:     z.string().min(10, "Téléphone invalide"),
  email:     z.string().email("Email invalide"),
});

export const Step2Schema = z.object({
  activity:  z.string().min(2, "Activité requise"),
  city:      z.string().min(2, "Ville requise"),
  website:   z.string().optional(),
});

export const Step3Schema = z.object({
  goal:     z.string().min(10, "Décrivez votre objectif"),
  budget:   z.string().min(1, "Sélectionnez un budget"),
  message:  z.string().optional(),
});

export const AuditFormSchema = Step1Schema
  .merge(Step2Schema)
  .merge(Step3Schema);

export type AuditFormData = z.infer<typeof AuditFormSchema>;