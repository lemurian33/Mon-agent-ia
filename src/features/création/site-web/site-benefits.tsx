import { CheckCircle } from "lucide-react";

const BENEFITS = [
  "Une image professionnelle qui rassure vos clients avant même qu'ils vous appellent",
  "Un site conçu pour garder vos visiteurs et les pousser à agir",
  "Un SEO intégré dès la conception pour apparaître sur Google sans effort supplémentaire",
  "Des pages pensées pour transformer un visiteur curieux en prospect prêt à signer",
  "Un design adapté à tous les écrans pour ne perdre aucun client",
  "Une base technique solide que vos concurrents n'ont tout simplement pas",
] as const;

export const SiteBenefits = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="inline-flex items-center rounded-full
                       border border-orange-200 bg-orange-50 px-4 py-1.5
                       text-xs font-semibold tracking-widest text-orange-700
                       uppercase dark:border-orange-800/60
                       dark:bg-orange-950/60 dark:text-orange-300"
          >
            Résultats
          </span>
          <h2
            className="mt-4 text-3xl font-semibold tracking-tight
                       text-balance text-foreground sm:text-4xl"
          >
            Pourquoi un site pro change tout
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Un site professionnel, Fini les clients perdus faute d'une présence en ligne digne de votre métier
          </p>
        </div>

        {/* Layout 2 colonnes */}
        <div
          className="mx-auto mt-16 grid max-w-6xl grid-cols-1
                     gap-8 lg:grid-cols-[1fr_auto]"
        >
          {/* Gauche — liste bénéfices */}
          <div
            className="rounded-2xl border border-border bg-card p-8"
          >
            <p className="mb-6 text-sm font-bold text-foreground">
              Les bénéfices concrets :
            </p>
            <ul className="flex flex-col gap-3">
              {BENEFITS.map((b) => (
                <li
                  key={b}
                  data-testid="site-benefit"
                  className="flex items-start gap-3 text-sm
                             text-muted-foreground"
                >
                  <CheckCircle
                    size={15}
                    className="mt-0.5 shrink-0 text-orange-500"
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Droite — métriques */}
          <div
            className="flex flex-col gap-4 lg:w-52"
          >
            {/* Score perf */}
            <div
              data-testid="site-metric"
              className="flex flex-col items-center justify-center
                         rounded-2xl border border-border bg-card p-8
                         text-center"
            >
              <span className="text-5xl font-bold text-orange-500">
                90+
              </span>
              <span
                className="mt-2 text-xs leading-relaxed
                           text-muted-foreground"
              >
                votre performance Google
              </span>
            </div>

            {/* SEO ready */}
            <div
              data-testid="site-metric"
              className="flex flex-col items-center justify-center
                         rounded-2xl border border-border bg-card p-8
                         text-center"
            >
              <span className="text-4xl font-bold text-orange-500">
                100%
              </span>
              <span
                className="mt-2 text-xs font-semibold
                           text-foreground"
              >
                SEO 
              </span>
              <span className="mt-1 text-xs text-muted-foreground">
                dès la mise en ligne
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};