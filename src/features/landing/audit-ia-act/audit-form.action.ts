"use server";

import type { z } from "zod";
import type { AuditFormAIActSchema } from "./audit-form.schema";

export async function submitAuditFormAIActAction(
  data: z.infer<typeof AuditFormAIActSchema>
) {
  // TODO: envoyer email / webhook / CRM
  console.log("AI Act form submitted:", data);
  return { success: true };
}