"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

export type ProjectType = "Site vitrine" | "Full-Stack" | "Front-End" | "Side project";

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  type: ProjectType;
  duration: string;
  context: string;
  stack: string[];
  demoUrl: string;
  detailUrl?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    slug: "segment-c",
    title: "Segment-c.com",
    description:
      "Site vitrine pour une entreprise de rénovation présente depuis plus de 15 ans. Présentation des réalisations, formulaire de contact et devis en ligne.",
    image: "/images/home-segment.jpg",
    type: "Site vitrine",
    duration: "30 jrs",
    context: "Client Final",
    stack: ["Next.js", "React", "MDX", "Stripe", "Resend", "Motion"],
    demoUrl: "https://www.segment-c.com",
  },
  {
    slug: "i-doctor",
    title: "I-doctor.fr",
    description:
      "Plateforme innovante de prise de rendez-vous par téléphone avec assistant IA. Gestion de planning optimisée pour les médecins.",
    image: "/images/home-cabinet.png",
    type: "Full-Stack",
    duration: "En cours",
    context: "Side project",
    stack: ["Next.js", "React", "Postgres", "NextAuth", "TypeScript", "Stripe"],
    demoUrl: "https://www.i-doctor.fr",
    detailUrl: "/projects/I-doctor",
  },
  {
    slug: "unlcoaching",
    title: "Unlcoaching.com",
    description:
      "Plateforme de coaching sportif à Bordeaux. Programmes personnalisés alliant entraînement et nutrition, avec espace client sécurisé.",
    image: "/images/unlcoaching.png",
    type: "Full-Stack",
    duration: "1 mois",
    context: "Client Final",
    stack: ["Next.js", "React", "Postgres", "NextAuth", "TypeScript", "Resend"],
    demoUrl: "https://www.unlcoaching.com",
    detailUrl: "/projects/Unlcoaching",
  },
  {
    slug: "express-plomberie",
    title: "Express-plomberie.com",
    description:
      "Site vitrine pour une entreprise de plomberie d'urgence disponible 24h/24. Tarifs, réalisations et témoignages clients.",
    image: "/images/Express4.png",
    type: "Site vitrine",
    duration: "10 jrs",
    context: "Client Final",
    stack: ["Next.js", "React", "MDX", "Resend", "Motion"],
    demoUrl: "https://express-depannage-plomberie.vercel.app",
    detailUrl: "/projects/Express-plomberie",
  },
];

// ─── Ease ─────────────────────────────────────────────────────────────────────

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ─── Badge styles ─────────────────────────────────────────────────────────────

const typeBadgeClass: Record<ProjectType, string> = {
  "Site vitrine": "bg-zinc-100 text-zinc-600 border-zinc-200",
  "Full-Stack": "bg-blue-50 text-blue-600 border-blue-100",
  "Front-End": "bg-violet-50 text-violet-600 border-violet-100",
  "Side project": "bg-emerald-50 text-emerald-600 border-emerald-100",
};

// ─── Single card ──────────────────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.55, ease }}
      className="group relative flex flex-col bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-300 hover:shadow-md transition-all duration-300"
    >
      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden bg-zinc-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full border ${typeBadgeClass[project.type]} backdrop-blur-sm`}
          >
            {project.type}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 gap-4 p-5">

        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-zinc-400 font-medium">
          <span>{project.duration}</span>
          <span className="w-1 h-1 rounded-full bg-zinc-300" />
          <span>{project.context}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-zinc-900 leading-snug tracking-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-zinc-500 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs font-medium text-zinc-500 bg-zinc-50 border border-zinc-100 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-1 border-t border-zinc-100 mt-1">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 hover:text-zinc-600 transition-colors duration-150"
          >
            Demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
          {project.detailUrl && (
            <Link
              href={project.detailUrl}
              className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-700 transition-colors duration-150"
            >
              Plus d&apos;infos
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}

// ─── Grid section ─────────────────────────────────────────────────────────────

export default function ProjectsSection() {
  return (
    <section className="relative bg-white px-6 md:px-12 lg:px-20 py-24">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
        className="flex flex-col gap-3 mb-14 max-w-xl"
      >
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-zinc-400">
          Réalisations
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-[1.08]">
          Projets récents
        </h2>
        <p className="text-zinc-500 text-lg leading-relaxed">
          Une sélection de projets clients et personnels développés avec les
          dernières technologies web.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5, ease }}
        className="flex justify-center mt-14"
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-7 py-3.5 border border-zinc-200 text-zinc-700 text-sm font-semibold rounded-xl hover:bg-zinc-50 hover:border-zinc-300 transition-all duration-200"
        >
          Voir tous les projets
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </motion.div>

    </section>
  );
}