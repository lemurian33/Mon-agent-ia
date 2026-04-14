import { SiteConfig } from "@/site-config";
import type { PageParams } from "@/types/next";
import type { Metadata } from "next";
import { ResetPasswordPage } from "./reset-password-page";

export const metadata: Metadata = {
  title: `Reset Password | ${SiteConfig.title}`,
  description:
    "Saisissez votre nouveau mot de passe pour terminer le processus de réinitialisation.",
};

export default async function RoutePage(props: PageParams) {
  const searchParams = await props.searchParams;
  const token = searchParams.token as string;

  return <ResetPasswordPage token={token} />;
}
