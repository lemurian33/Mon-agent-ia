import Link from "next/link";
import { Globe, Megaphone, MapPin, FileText, BarChart2 } from "lucide-react";

const HIGHLIGHTS = [
  { icon: Globe,     label: "Site web inclus" },
  { icon: MapPin,    label: "SEO local + GBP" },
  { icon: FileText,  label: "Contenu hebdomadaire" },
  { icon: Megaphone, label: "Acquisition continue" },
  { icon: BarChart2, label: "Suivi mensuel" },
] as const;

export const HeroKey = () => {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32">
      {/* Blobs */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678]
                     w-[36.125rem] -translate-x-1/2 rotate-[30deg]
                     bg-gradient-to-tr from-orange-300/20 to-[#9089fc]/20
                     opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold tracking-widest text-orange-700 uppercase dark:border-orange-800/60 dark:bg-orange-950/60 dark:text-orange-300">
          Clé en main — de A à Z
        </div>

        {/* Titre */}
        <h1 className="text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl lg:leading-tight">
          Votre présence Google{" "}
          <span className="text-orange-500">gérée de A à Z.</span>{" "}
          Vous, vous faites votre métier.
        </h1>

        {/* Sous-titre */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Site web, SEO local, fiche Google, contenu — on s'occupe de tout chaque mois.
          Premier paiement le mois suivant. Zéro engagement.
        </p>

        {/* Prix pill */}
        <div className="mt-8 inline-flex items-baseline gap-1.5 rounded-2xl border border-orange-500/20 bg-orange-500/5 px-6 py-3">
          <span className="text-3xl font-bold text-foreground">79</span>
          <span className="text-lg text-orange-500">€/mois</span>
          <span className="ml-2 text-sm text-muted-foreground">— premier paiement dans 15 jrs</span>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#audit-form"
            className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/30 active:scale-95"
          >
            Démarrer maintenant →
          </Link>
          <Link
            href="#included"
            className="rounded-md border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-muted"
          >
            Voir ce qui est inclus
          </Link>
        </div>

        {/* Highlights */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          {HIGHLIGHTS.map(({ icon: Icon, label }) => (
            <span key={label} className="flex items-center gap-1.5">
              <Icon size={14} className="text-orange-500/60" />
              {label}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};