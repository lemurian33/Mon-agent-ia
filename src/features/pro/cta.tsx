import Link from "next/link";

export const Cta = () => {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card px-8
                        py-12 text-center sm:px-16">

          {/* Badge */}
          <p className="text-xs font-semibold tracking-widest
                        text-orange-500 uppercase">
            Formule Pro
          </p>

          {/* Titre */}
          <h2 className="mt-3 text-2xl font-bold tracking-tight
                         text-balance text-foreground sm:text-3xl">
            Vos agents IA opérationnels {" "}
            <span className="text-orange-500">
              en moins de 
            </span>{" "}
            7 jours
          </h2>

          {/* Sous-titre */}
          <p className="mx-auto mt-4 max-w-3xl text-sm
                        text-muted-foreground leading-relaxed">
            Audit gratuit inclus. Sans engagement. On analyse votre
            situation, on configure vos agents et on vous forme —
            vous êtes autonome dès la première semaine
          </p>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="#audit-form"
              className="inline-flex items-center gap-2 rounded-md
                         bg-orange-500 px-8 py-3.5 text-sm font-semibold
                         text-white transition-all hover:bg-orange-400
                         hover:shadow-lg hover:shadow-orange-500/30
                         active:scale-95"
            >
              Démarrer la formule Pro →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};