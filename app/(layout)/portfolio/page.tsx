import type { StaticImageData } from "next/image";
import type { Metadata } from "next";
import { SiteConfig } from "@/site-config";

import Hero from "@/features/portfolio/hero";
import ProjectBanner from "@/features/portfolio/project-banner";

import Express        from "@images/Express4.png";
import UnlcoachingImg from "@images/unlcoaching.png";
import Portfolio      from "@images/portfolio.png";
import HomeKasa       from "@images/HomeKasa.png";
import HomeWealth     from "@images/WealthHealth_1.png";
import HomeSegment    from "@images/home-segment.png";
import HomeCabinet    from "@images/home-cabinet.png";
import MovieImg       from "@images/movie.png";

// ─── Types ────────────────────────────────────────────────────────────────────

type ProjectData = {
  reverse: boolean;
  subTitle: string;
  title: string;
  time: string;
  mission: string;
  developpement: string;
  image: StaticImageData;
  contentType: string;
  btn: { href: string };
  btn1: { href: string };
  description: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const projectsData: ProjectData[] = [
  {
    reverse: true,
    subTitle: "Site vitrine",
    title: "Segment-c.com",
    time: "30 jrs",
    mission: "Client Final",
    developpement: "Full-Stack",
    image: HomeSegment,
    contentType: "project",
    btn: { href: "projects/Segment-c" },
    btn1: { href: "https://www.segment-c.com" },
    description:
      "Segment C accompagne les propriétaires dans tous leurs projets de rénovation depuis plus de 15 ans. Site vitrine pour portfolio réalisation, fourniture...",
  },
  {
    reverse: false,
    subTitle: "Site vitrine",
    title: "my movie app",
    time: "7 jrs",
    mission: "test technique",
    developpement: "Full-Stack",
    image: MovieImg,
    contentType: "project",
    btn: { href: "#" },
    btn1: { href: "https://test-technique-cda-4s7t.vercel.app/" },
    description:
      "Movie app est une application permettant de faire une recherche sur un film en fonction du titre, année ou le type en effectuant une requête à l'API TMDB. L'application permet également de visualiser les détails du film, les acteurs et le synopsis.",
  },
  {
    reverse: true,
    subTitle: "Site vitrine",
    title: "I-doctor.fr",
    time: "en cours",
    mission: "Side project",
    developpement: "Full-Stack",
    image: HomeCabinet,
    contentType: "",
    btn: { href: "projects/I-doctor" },
    btn1: { href: "https://www.i-doctor.fr" },
    description:
      "i-Doctor est une plateforme innovante permettant de mettre en service une prise de rendez-vous par téléphone avec un assistant I.A. Elle permet aux médecins de planifier facilement leurs consultations par téléphone, tout en optimisant efficacement la gestion de leur emploi du temps.",
  },
  {
    reverse: false,
    subTitle: "Site vitrine",
    title: "Express-plomberie.com",
    time: "10 jrs",
    mission: "Client Final",
    developpement: "Full-Stack",
    image: Express,
    contentType: "project",
    btn: { href: "projects/Express-plomberie" },
    btn1: { href: "https://express-depannage-plomberie.vercel.app" },
    description:
      "Express Plomberie est une vitrine dédiée aux services de plomberie d'urgence, disponible 24h/24 et 7j/7 sur Bordeaux. Les utilisateurs peuvent facilement accéder aux informations sur les interventions courantes, les tarifs et les réalisations de l'entreprise.",
  },
  {
    reverse: true,
    subTitle: "Site vitrine",
    title: "Unlcoaching.com",
    time: "1 mois",
    mission: "Client Final",
    developpement: "Full-Stack",
    image: UnlcoachingImg,
    contentType: "",
    btn: { href: "projects/Unlcoaching" },
    btn1: { href: "https://www.unlcoaching.com" },
    description:
      "Le site Unlcoaching est une plateforme dédiée au coaching sportif à Bordeaux, dirigée par Jérémy Prat. Il propose des programmes personnalisés combinant entraînement rigoureux et nutrition équilibrée, adaptés aux objectifs de chaque client.",
  },
  {
    reverse: false,
    subTitle: "Site vitrine",
    title: "Andyramaroson.com",
    time: "1 mois",
    mission: "Side Project",
    developpement: "Full-Stack",
    image: Portfolio,
    contentType: "project",
    btn: { href: "projects/Andyramaroson" },
    btn1: { href: "https://andyramaroson.com" },
    description:
      "Portfolio personnel présentant mes réalisations clients et projets personnels. Refonte complète avec Next.js, React, Tailwind CSS, Motion et déploiement sur VPS via Coolify.",
  },
  {
    reverse: true,
    subTitle: "Site vitrine",
    title: "WealthHealth",
    time: "20 jrs",
    mission: "Side Project OCR",
    developpement: "Front-End",
    image: HomeWealth,
    contentType: "project",
    btn: { href: "projects/WealthHealth" },
    btn1: { href: "https://wealth-health-phi.vercel.app" },
    description:
      "Application web interne pour l'entreprise HRnet. Permet de lister les employés avec création via formulaire, modal de confirmation et tableau récapitulatif des données.",
  },
  {
    reverse: false,
    subTitle: "Site vitrine",
    title: "Kasa",
    time: "20 jrs",
    mission: "Side Project OCR",
    developpement: "Front-End",
    image: HomeKasa,
    contentType: "project",
    btn: { href: "projects/Kasa" },
    btn1: { href: "https://andyrama.github.io/AndyRamaroson_11_25112021/" },
    description:
      "Refonte totale du site Kasa, plateforme de location de logements entre particuliers. Migration depuis ASP.NET vers une stack JavaScript moderne avec Node.js côté back-end et React côté front-end.",
  },
];

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `Portfolio - Andy Ramaroson — ${SiteConfig.title}`,
  description:
    "Développeur Full-Stack JS basé à Bordeaux. Découvrez mes réalisations : sites vitrines, applications web et projets personnels.",
  keywords: ["Portfolio", "Andy Ramaroson", "développeur full-stack", "Next.js", "React", "Bordeaux"],
  openGraph: {
    title: `Portfolio - Andy Ramaroson — ${SiteConfig.title}`,
    description:
      "Développeur Full-Stack JS basé à Bordeaux. Découvrez mes réalisations : sites vitrines, applications web et projets personnels.",
    url: `${SiteConfig.prodUrl}/`,
    type: "website",
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Hero />
      {projectsData.map((project, index) => (
        <ProjectBanner
          key={index}
          className="pt-32 lg:mb-22 xl:mb-32"
          {...project}
        />
      ))}
    </>
  );
}