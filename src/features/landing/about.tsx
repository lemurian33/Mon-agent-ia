import { Typography } from "@/components/nowts/typography";
import { ShieldCheck, BrainCircuit, Zap, Code2, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const VALUES = [
  { icon: BrainCircuit, label: "Expert Claude & LLM" },
  { icon: ShieldCheck,  label: "100% conforme RGPD" },
  { icon: Code2,        label: "Développeur Full Stack" },
  { icon: Zap,          label: "Résultats concrets" },
];

const COMMITMENTS = [
  "Je vous accompagne et vous forme à l'intégration de l'I.A.",
  "J'intègre l'I.A. directement dans vos process métier",
  "Je déploie un écosystème souverain, hébergé et sécurisé",
];

export const About = () => {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center rounded-full
                           border border-orange-200 bg-orange-50 px-4 py-1.5
                           text-xs font-semibold tracking-widest
                           text-orange-700 uppercase
                           dark:border-orange-800/60 dark:bg-orange-950/60
                           dark:text-orange-300">
            À propos
          </span>

          <Typography
            variant="h2"
            className="mt-4 text-3xl font-semibold tracking-tight
                       text-balance sm:text-4xl"
          >
            Développeur Full Stack & expert I.A. <br />
            au service de votre business
          </Typography>

          <Typography
            variant="large"
            className="text-muted-foreground mt-4 text-lg text-pretty"
          >
            Code, automatisation et intelligence artificielle — pour des résultats concrets, pas des promesses.
          </Typography>
        </div>

        {/* ── Carte principale ── */}
        <div className="mx-auto mt-16 max-w-5xl rounded-2xl border
                        border-border bg-card p-6 sm:p-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2
                          lg:items-start">

            {/* ── Colonne gauche — photo ── */}
            <div className="relative">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/images/andy-ramaroson.jpeg"
                  alt="Andy Ramaroson"
                  width={600}
                  height={500}
                  className="h-[420px] w-full object-cover object-top"
                  priority
                />
              </div>
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0
                              rounded-b-xl bg-black/60 px-4 py-3
                              backdrop-blur-sm">
                <p className="text-sm font-semibold text-white">
                  Andy Ramaroson
                </p>
                <p className="text-xs text-gray-300">
                  Fondateur, Mon agent Ai
                </p>
                <p className="text-xs text-gray-300">
                  Développeur Full Stack & Intégrateur I.A.
                </p>
              </div>
            </div>

            {/* ── Colonne droite — texte ── */}
            <div className="flex flex-col gap-6">

              {/* Texte intro */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                Avant de créer{" "}
                <strong className="font-semibold text-foreground">
                  Mon agent Ai
                </strong>
                , j'ai passé des années à développer des applications web et à
                explorer l'écosystème I.A. de l'intérieur. Aujourd'hui, je mets
                cette double expertise au service d'un seul objectif :{" "}
                <strong className="font-semibold text-foreground">
                  vous donner un site qui convertit et une I.A. qui travaille pour vous.
                </strong>
              </p>

              {/* Badges valeurs */}
              <div className="grid grid-cols-2 gap-3">
                {VALUES.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    data-testid="about-value"
                    className="flex items-center gap-2.5 rounded-xl
                               border border-border bg-muted/30 px-4 py-3"
                  >
                    <Icon size={15} className="shrink-0 text-orange-500" />
                    <span className="text-xs font-medium text-foreground">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Engagement */}
              <div className="rounded-xl border border-orange-500/30
                              bg-orange-500/5 px-5 py-4">
                <p className="mb-3 text-xs font-bold tracking-widest
                               text-orange-500 uppercase">
                  Mon engagement
                </p>
                <ul className="flex flex-col gap-2">
                  {COMMITMENTS.map((c) => (
                    <li
                      key={c}
                      data-testid="about-commitment"
                      className="flex items-center gap-2 text-sm
                                 text-foreground"
                    >
                      <CheckCircle
                        size={14}
                        className="shrink-0 text-orange-500"
                      />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm
                           font-semibold text-orange-500 transition-colors
                           hover:text-orange-400"
              >
                Découvrir mon histoire complète →
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};