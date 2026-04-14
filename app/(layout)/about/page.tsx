import GridBackground from "@/components/nowts/grid-background";
import { Typography } from "@/components/nowts/typography";
import { SectionLayout } from "@/features/landing/section-layout";
import { SiteConfig } from "@/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `À propos | ${SiteConfig.title}`,
  description:
    "Découvrez Lemurian Agency, notre mission d'aider les artisans et commerçants à dominer Google localement, et l'équipe derrière l'agence.",
  keywords: ["agence SEO local", "visibilité Google", "Lemurian Agency", "référencement local", "Google Business Profile"],
  openGraph: {
    title: `À propos | ${SiteConfig.title}`,
    description:
      "Découvrez Lemurian Agency, notre mission d'aider les artisans et commerçants à dominer Google localement, et l'équipe derrière l'agence.",
    url: `${SiteConfig.prodUrl}/about`,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="relative">
      <GridBackground
        color="color-mix(in srgb, var(--muted) 50%, transparent)"
        size={20}
      />
      {/* Hero Section */}
      <SectionLayout variant="transparent">
        <div className="mx-auto max-w-2xl text-center">
          <Typography
            variant="p"
            className="text-primary text-base/7 font-semibold"
          >
            À propos
          </Typography>
          <Typography
            variant="h1"
            className="text-foreground mt-2 text-5xl font-semibold tracking-tight sm:text-7xl"
          >
            Sites qui convertit sur Google localement, c'est un métier
          </Typography>
          <Typography
            variant="p"
            className="text-muted-foreground mt-8 text-lg font-medium text-pretty sm:text-xl/8"
          >
            Une agence de confiance, portée par un développeur passionné et engagé
            à vous rendre visible là où vos clients vous cherchent.
          </Typography>
        </div>
      </SectionLayout>

      {/* Main Content */}
      <SectionLayout size="lg" variant="transparent">
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8">
            <Typography
              variant="h2"
              className="text-foreground text-2xl font-semibold tracking-tight text-pretty"
            >
              Mon engagement envers vous
            </Typography>
            <Typography
              variant="p"
              className="text-muted-foreground mt-6 text-base/7"
            >
              Lemurian Agency est construite sur une vision long terme et un
              engagement sans faille envers nos clients. On sait que vous confier
              votre visibilité Google, c'est nous confier une partie de votre
              chiffre d'affaires.
            </Typography>
            <Typography
              variant="p"
              className="text-muted-foreground mt-8 text-base/7"
            >
              C'est pourquoi on garantit un suivi régulier, des optimisations
              continues et une communication transparente sur chaque action
              menée. Vous savez toujours ce qu'on fait et pourquoi. On est là
              pour grandir avec vous.
            </Typography>
          </div>
          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 xl:gap-8">
              <div className="outline-border aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1">
                <img
                  alt="Artisan visible sur Google"
                  // src="https://codelynx.mlvcdn.com/images/2025-08-22/IMG_6608.jpeg"
                  src=""
                  className="block size-full object-cover"
                />
              </div>
              <div className="outline-border -mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 lg:-mt-40">
                <img
                  alt="Andy ramaroson"
                  // src="https://codelynx.mlvcdn.com/images/2025-08-22/IMG_7415.jpeg"
                  src=""
                  className="block size-full object-cover"
                />
              </div>
              <div className="outline-border aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1">
                <img
                  alt="Résultats SEO local"
                  // src="https://codelynx.mlvcdn.com/images/2025-08-22/IMG_9392.jpeg"
                  src=""
                  className="block size-full object-cover"
                />
              </div>
              <div className="outline-border -mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 lg:-mt-40">
                <img
                  alt="Client satisfait Lemurian Agency"
                  // src="https://codelynx.mlvcdn.com/images/2025-08-22/IMG_9896 2.jpeg"
                  src=""
                  className="block size-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* <div className="max-lg:mt-16 lg:col-span-1">
            <Typography
              variant="p"
              className="text-muted-foreground text-base/7 font-semibold"
            >
              Mes engagements chiffrés
            </Typography>
            <hr className="border-border mt-6 border-t" />
            <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <div className="border-border flex flex-col gap-y-2 border-b border-dotted pb-4">
                <dt className="text-muted-foreground text-sm/6">
                  Suivi mensuel
                </dt>
                <dd className="text-foreground order-first text-6xl font-semibold tracking-tight">
                  <span>100</span>%
                </dd>
              </div>
              <div className="border-border flex flex-col gap-y-2 border-b border-dotted pb-4">
                <dt className="text-muted-foreground text-sm/6">
                  Disponibilité
                </dt>
                <dd className="text-foreground order-first text-6xl font-semibold tracking-tight">
                  <span>99.9</span>%
                </dd>
              </div>
              <div className="max-sm:border-border flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:pb-4">
                <dt className="text-muted-foreground text-sm/6">
                  Temps de réponse
                </dt>
                <dd className="text-foreground order-first text-6xl font-semibold tracking-tight">
                  <span>&lt;24</span>h
                </dd>
              </div>
              <div className="flex flex-col gap-y-2">
                <dt className="text-muted-foreground text-sm/6">
                  Engagement long terme
                </dt>
                <dd className="text-foreground order-first text-6xl font-semibold tracking-tight">
                  <span>10</span>+
                </dd>
              </div>
            </dl>
          </div> */}
        </section>
      </SectionLayout>
    </div>
  );
}