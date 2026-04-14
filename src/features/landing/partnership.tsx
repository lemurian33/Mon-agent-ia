import { Typography } from "@/components/nowts/typography";
import { Shield, Target, Users, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SiteConfig } from "@/site-config";

const BADGES = [
  { icon: Shield, label: "Sans frais initiaux" },
  { icon: Target, label: "Leads qualifiés" },
  { icon: Users,  label: "Zéro risque" },
  { icon: Zap,    label: "Transfert direct" },
] as const;

export const Partnership = () => {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border
                        border-border bg-card p-8 sm:p-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto]
                          lg:items-center">

            {/* ── Colonne gauche ── */}
            <div className="flex flex-col gap-6">

              {/* Badge */}
              <span className="inline-flex w-fit items-center rounded-md
                               border border-orange-200 bg-orange-50 px-4 py-1.5
                               text-xs font-semibold tracking-widest
                               text-orange-700 uppercase
                               dark:border-orange-800/60 dark:bg-orange-950/60
                               dark:text-orange-300">
                Partenariat
              </span>

              {/* Titre */}
              <Typography
                variant="h2"
                className="text-3xl font-bold tracking-tight
                           text-balance sm:text-4xl"
              >
                On génère vos leads.{" "}
                <span className="text-orange-500">Vous payez uniquement quand ça fonctionne.</span>
              </Typography>

              {/* Description */}
              <Typography
                variant="large"
                className="text-muted-foreground max-w-2xl text-base
                           leading-relaxed"
              >
                Pas de budget à risquer. Pas de surprise. On prend en charge le SEO, 
                la landing page et le tracking. Vous recevez les leads directement.
                Un seul partenaire par zone — les places sont limitées.
              </Typography>

              {/* Badges icônes */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {BADGES.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    data-testid="partnership-badge"
                    className="flex flex-col items-center gap-2 rounded-xl
                               border border-border bg-muted/30 px-3 py-4
                               text-center"
                  >
                    <Icon size={18} className="text-orange-500" />
                    <span className="text-xs font-medium text-foreground">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/solutions/partenariat"
                  className="rounded-md bg-orange-500 px-6 py-3 text-sm
                             font-semibold text-white transition-all
                             hover:bg-orange-400 hover:shadow-lg
                             hover:shadow-orange-500/30 active:scale-95"
                >
                  Découvrir le partenariat →
                </Link>
                <Link
                  href="#audit-form"
                  className="rounded-md border border-border px-6 py-3
                             text-sm font-semibold text-foreground
                             transition-all hover:bg-muted"
                >
                  Prendre rendez-vous
                </Link>
              </div>

            </div>

            {/* ── Colonne droite — placeholder image ── */}
            <div
              data-testid="partnership-image"
              className="hidden lg:flex items-center justify-center
                        size-[200px] shrink-0 rounded-2xl
                        border border-border bg-muted/30"
            >
              <Image
                src={SiteConfig.appIcon}
                alt="lemurian app logo"
                width={220}
                height={220}
                className="rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};