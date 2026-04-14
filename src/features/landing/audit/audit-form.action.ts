"use server";

import { z } from "zod";
import { AuditFormSchema } from "./audit-form.schema";

export async function submitAuditFormAction(
  data: z.infer<typeof AuditFormSchema>
) {
  // TODO: envoyer email / webhook / CRM
  console.log("Audit form submitted:", data);
  return { success: true };
}