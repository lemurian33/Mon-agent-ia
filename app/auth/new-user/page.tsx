import { buttonVariants } from "@/components/ui/button";
import { Header } from "@/features/layout/header";
import {
  Layout,
  LayoutContent,
  LayoutDescription,
  LayoutHeader,
  LayoutTitle,
} from "@/features/page/layout";
import { SiteConfig } from "@/site-config";
import type { PageParams } from "@/types/next";
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: `Bienvenue | ${SiteConfig.title}`,
  description:
    "Bienvenue sur ton nouveau compte ! Tout est en place et vous êtes prêt à commencer à recueillir des témoignages.",
};

/**
 * This page is show when a user login. You can add an onboarding process here.
 */
export default async function NewUserPage(props: PageParams) {
  const searchParams = await props.searchParams;
  const callbackUrl =
    typeof searchParams.callbackUrl === "string"
      ? searchParams.callbackUrl
      : "/";

  redirect(callbackUrl);

  return (
    <>
      <Header />
      <Layout>
        <LayoutHeader>
          <LayoutTitle>Connexion réussie</LayoutTitle>
          <LayoutDescription>Vous pouvez maintenant utiliser l'application</LayoutDescription>
        </LayoutHeader>
        <LayoutContent>
          <Link href="/" className={buttonVariants({ size: "lg" })}>
            Commencer
          </Link>
        </LayoutContent>
      </Layout>
    </>
  );
}
