"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";

// ─── Ease ─────────────────────────────────────────────────────────────────────

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ─── Animation helper ─────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease },
  }),
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const hardSkills = [
  "Next.js", "React", "TypeScript", "Sass", "Jest",
  "GitHub", "Tailwind", "PostgreSQL", "Motion", "npm",
  "ChatGPT", "Vercel", "Node.js", "Trello", "Figma",
];

const softSkills = [
  { label: "Travail en équipe", sub: "" },
  { label: "Appliqué & Organisé", sub: "" },
  { label: "Autodidacte & entrepreneur", sub: "" },
  { label: "Collaboration avec l'IA", sub: "prompting, expérimentation" },
  { label: "Esprit critique IA", sub: "vérification, jugement" },
  { label: "Responsabilité numérique", sub: "éthique, limites de l'IA" },
  { label: "Communication structurée", sub: "brief précis, adaptation" },
];

const experiences = [
  {
    company: "Segment-c.com",
    sector: "Menuiserie",
    period: "Oct. 2025 — Jan. 2026",
    type: "Site vitrine + blog",
    tasks: [
      "Développement d'un site pour une entreprise de rénovation en bâtiment",
      "Élaboration du cahier des charges en collaboration directe avec le client",
      "Design et prototypage de l'interface utilisateur (Figma)",
      "Développement full-stack de la solution complète",
      "Intégration d'outils IA pour accélérer la conception et la rédaction de contenu",
      "Mise en production et maintenance continue du site",
    ],
  },
  {
    company: "Andyramaroson.com",
    sector: "Portfolio personnel",
    period: "Mai — Juin 2025",
    type: "Site vitrine + blog",
    tasks: [
      "Conception du site vitrine personnel mettant en valeur mes compétences",
      "Création de l'identité visuelle et prototypage de l'interface",
      "Déploiement en production et maintenance (Coolify + VPS)",
    ],
  },
  {
    company: "Unlcoaching.com",
    sector: "Coach sportif",
    period: "Jan. — Fév. 2025",
    type: "Site vitrine + blog",
    tasks: [
      "Développement d'une plateforme web pour un coach sportif",
      "Analyse des besoins et rédaction du cahier des charges",
      "Design responsive et création de l'expérience utilisateur",
      "Développement de la solution complète",
      "Déploiement, optimisation et maintenance du site",
    ],
  },
  {
    company: "Express-plomberie.com",
    sector: "Plombier artisant",
    period: "Oct. — Nov. 2024",
    type: "Site vitrine",
    tasks: [
      "Conception d'un site web professionnel pour une entreprise de plomberie",
      "Élaboration du cahier des charges orienté conversion client",
      "Design et maquettage de l'interface",
      "Déploiement de la solution complète",
      "Optimisation SEO et amélioration des performances web",
      "Support technique et maintenance régulière",
    ],
  },
];

const otherProjects = [
  {
    company: "Mon-agent-ai.com",
    sector: "Agent IA",
    period: "Jan. 2025 — aujourd'hui",
    type: "Site vitrine + blog",
    tasks: [
      "Développement d'une plateforme showcase pour agents IA",
      "Définition du périmètre fonctionnel et technique",
      "Conception de l'interface et de l'expérience utilisateur",
      "Déploiement progressif et maintenance évolutive",
    ],
  },
  {
    company: "I-doctor.fr",
    sector: "Santé / IA",
    period: "En cours",
    type: "Plateforme SaaS",
    tasks: [
      "Plateforme de prise de rendez-vous par téléphone avec assistant IA",
      "Gestion de planning optimisée pour les médecins",
      "Stack : Next.js, Postgres, NextAuth, Stripe, TypeScript",
    ],
  },
];

const formations = [
  {
    year: "2023",
    title: "Développeur d'application Web",
    school: "OpenClassRoom",
    period: "Sept. 2021 — Fév. 2023 · Bordeaux",
    desc: "Spécialisation Front-End — interfaces modernes et responsives. 12 projets réalisés.",
  },
  {
    year: "2020",
    title: "Développeur web Full-Stack",
    school: "Formation",
    period: "2020",
    desc: "Ruby on Rails, PostgreSQL, déploiement Heroku.",
  },
  {
    year: "2013",
    title: "CCNA — Cisco",
    school: "Certification",
    period: "2013",
    desc: "Configuration, sécurisation et dépannage d'infrastructure LAN/WAN.",
  },
  {
    year: "2013",
    title: "Certification T.R.T.E",
    school: "Certification",
    period: "2013",
    desc: "Maintenance de réseaux informatiques d'entreprise.",
  },
  {
    year: "2008",
    title: "BTS Système Électronique",
    school: "BTS",
    period: "2008",
    desc: "Développement des compétences dans la conception électronique.",
  },
];

// ─── Types locaux ─────────────────────────────────────────────────────────────

type ExpItem = {
  company: string;
  sector: string;
  period: string;
  type: string;
  tasks: string[];
};

type ContactItem = {
  icon: string;
  label: string;
  href: string | null;
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-400">
        {children}
      </h2>
      <div className="flex-1 h-px bg-zinc-100" />
    </div>
  );
}

function ExperienceBlock({ exp, index }: { exp: ExpItem; index: number }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeUp}
      className="group relative pl-4 border-l-2 border-zinc-100 hover:border-zinc-300 transition-colors duration-200"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
        <div>
          <h3 className="text-base font-bold text-zinc-900">{exp.company}</h3>
          <p className="text-sm text-zinc-400 font-medium">{exp.type}</p>
        </div>
        <div className="flex flex-col sm:items-end gap-0.5 shrink-0">
          <span className="text-xs font-semibold text-zinc-500 bg-zinc-50 border border-zinc-100 px-2.5 py-1 rounded-full w-fit">
            {exp.period}
          </span>
          <span className="text-xs text-zinc-400">{exp.sector}</span>
        </div>
      </div>
      <ul className="flex flex-col gap-1.5">
        {exp.tasks.map((task, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-zinc-500 leading-relaxed">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-300 shrink-0" />
            {task}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const contactItems: ContactItem[] = [
  { icon: "✉", label: "Andyramaroson@gmail.com", href: "mailto:Andyramaroson@gmail.com" },
  { icon: "📞", label: "06 30 83 28 75", href: "tel:0630832875" },
  { icon: "📍", label: "Bordeaux ou remote", href: null },
  { icon: "🔗", label: "Portfolio", href: "https://andyramaroson.com" },
  { icon: "💼", label: "LinkedIn", href: "https://www.linkedin.com/in/andy-ramaroson/" },
  { icon: "🐙", label: "GitHub", href: "https://github.com/AndyRama" },
];

export default function CVPage() {
  return (
    <main className="min-h-screen bg-white px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-4xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col sm:flex-row sm:items-start justify-between gap-8 mb-16 pb-10 border-b border-zinc-100"
        >
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-zinc-400 mb-1">
                Curriculum Vitae
              </p>
              <h1 className="text-5xl font-bold text-zinc-900 tracking-tight leading-tight">
                Andy<br />Ramaroson
              </h1>
            </div>
            <p className="text-lg font-semibold text-zinc-600">
              Développeur Full-Stack — Next.js · React · TypeScript
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-lg">
              Full Stack Next.js / React / TypeScript, je combine 10 ans d&apos;expertise en
              électronique et informatique à une maîtrise solide des technologies web modernes.
              Rigoureux, autonome et passionné par l&apos;innovation, je conçois des solutions
              digitales performantes — de l&apos;analyse des besoins jusqu&apos;au déploiement — en
              intégrant les outils IA dans mon workflow.
            </p>
          </div>

          {/* Contact card */}
          <div className="shrink-0 flex flex-col gap-3 bg-zinc-50 border border-zinc-100 rounded-2xl p-5 min-w-[220px]">
            {contactItems.map(({ icon, label, href }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className="text-sm w-4 text-center">{icon}</span>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-zinc-600 hover:text-zinc-900 transition-colors truncate"
                  >
                    {label}
                  </a>
                ) : (
                  <span className="text-xs text-zinc-600">{label}</span>
                )}
              </div>
            ))}
            <div className="pt-2 border-t border-zinc-100 mt-1">
              <span className="text-xs text-zinc-400">CDI · CDD · Freelance</span>
            </div>
          </div>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12">

          {/* ── Left sidebar ── */}
          <div className="flex flex-col gap-10">

            {/* Hard skills */}
            <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
              <SectionTitle>Hard Skills</SectionTitle>
              <div className="flex flex-wrap gap-2">
                {hardSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-medium text-zinc-600 bg-zinc-50 border border-zinc-100 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Soft skills */}
            <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp}>
              <SectionTitle>Soft Skills</SectionTitle>
              <ul className="flex flex-col gap-3">
                {softSkills.map(({ label, sub }) => (
                  <li key={label} className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-zinc-700">{label}</span>
                    {sub && <span className="text-xs text-zinc-400">{sub}</span>}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Formations */}
            <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp}>
              <SectionTitle>Formations</SectionTitle>
              <ul className="flex flex-col gap-5">
                {formations.map((f) => (
                  <li key={f.title} className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-zinc-400">{f.year}</span>
                    <span className="text-sm font-bold text-zinc-800">{f.title}</span>
                    <span className="text-xs text-zinc-400">{f.period}</span>
                    <span className="text-xs text-zinc-500 leading-relaxed">{f.desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* ── Right main ── */}
          <div className="flex flex-col gap-12">

            {/* Expériences */}
            <div>
              <SectionTitle>Expériences</SectionTitle>
              <div className="flex flex-col gap-8">
                {experiences.map((exp, i) => (
                  <ExperienceBlock key={exp.company} exp={exp} index={i} />
                ))}
              </div>
            </div>

            {/* Autres projets */}
            <div>
              <SectionTitle>Autres projets</SectionTitle>
              <div className="flex flex-col gap-8">
                {otherProjects.map((exp, i) => (
                  <ExperienceBlock key={exp.company} exp={exp} index={i} />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ── Footer CV ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5, ease }}
          className="mt-16 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <span className="text-xs text-zinc-400">
            © {new Date().getFullYear()} Andy Ramaroson — andyramaroson.com
          </span>
          <a
            href="/images/Cv_Ramaroson_Andy_lead_dev.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-200 text-zinc-600 text-xs font-semibold rounded-xl hover:bg-zinc-50 transition-colors duration-200"
          >
            Télécharger le PDF
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path d="M12 5v14m-7-7l7 7 7-7" />
            </svg>
          </a>
        </motion.div>

      </div>
    </main>
  );
}