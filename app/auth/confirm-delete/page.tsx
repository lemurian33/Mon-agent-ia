import { SiteConfig } from "@/site-config";
import type { PageParams } from "@/types/next";
import type { Metadata } from "next";
import { ConfirmDeletePage } from "./confirm-delete-page";

export const metadata: Metadata = {
  title: `Confirmation suppression de compte | ${SiteConfig.title}`,
  description:
    "Confirmez que vous souhaitez supprimer définitivement votre compte et toutes les données associées.",
};

export default async function ConfirmDelete(props: PageParams) {
  const searchParams = await props.searchParams;
  const token = searchParams.token as string | undefined;
  const callbackUrl = searchParams.callbackUrl as string | undefined;

  return <ConfirmDeletePage token={token} callbackUrl={callbackUrl} />;
}
