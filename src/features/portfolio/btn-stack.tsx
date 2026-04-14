"use client";

import { motion } from "motion/react";
import { TbBrandNextjs, TbBrandFramerMotion, TbDeviceMobileCode } from "react-icons/tb";
import { SiTypescript, SiVercel } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { BsFiletypeMdx, BsFillShieldLockFill } from "react-icons/bs";
import { FaCcStripe, FaGithub } from "react-icons/fa";
import { FaFigma, FaTrello } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { BiLogoPostgresql } from "react-icons/bi";

// ─── Types ────────────────────────────────────────────────────────────────────

type StackItem = {
  title: string;
  icon: React.ReactNode;
}

type BtnStackProps = {
  className?: string;
  contentType: string;
}

// ─── Icon class commune ───────────────────────────────────────────────────────

const iconClass = "mt-1 mr-2 rounded-sm text-black-300 border border-gray-200 bg-opacity-10";

// ─── Stack "project" (MDX, Figma, Trello...) ─────────────────────────────────

const stackProject: StackItem[] = [
  { title: "Nextjs",      icon: <TbBrandNextjs     className={iconClass} /> },
  { title: "React",       icon: <GrReactjs         className={iconClass} /> },
  { title: "Github",      icon: <FaGithub          className={iconClass} /> },
  { title: "Vercel",      icon: <SiVercel          className={iconClass} /> },
  { title: "Mdx",         icon: <BsFiletypeMdx     className={iconClass} /> },
  { title: "Stripe",      icon: <FaCcStripe        className={iconClass} /> },
  { title: "Resend",      icon: <MdMarkEmailRead   className={iconClass} /> },
  { title: "Responsive",  icon: <TbDeviceMobileCode className={iconClass} /> },
  { title: "Figma",       icon: <FaFigma           className={iconClass} /> },
  { title: "Trello",      icon: <FaTrello          className={iconClass} /> },
  { title: "Motion",      icon: <TbBrandFramerMotion className={iconClass} /> },
];

// ─── Stack "no code" (Postgres, NextAuth, TypeScript...) ─────────────────────

const stackNoCode: StackItem[] = [
  { title: "Nextjs",      icon: <TbBrandNextjs       className={iconClass} /> },
  { title: "React",       icon: <GrReactjs           className={iconClass} /> },
  { title: "Motion",      icon: <TbBrandFramerMotion className={iconClass} /> },
  { title: "Github",      icon: <FaGithub            className={iconClass} /> },
  { title: "Stripe",      icon: <FaCcStripe          className={iconClass} /> },
  { title: "Vercel",      icon: <SiVercel            className={iconClass} /> },
  { title: "Postgres",    icon: <BiLogoPostgresql    className={iconClass} /> },
  { title: "NextAuth",    icon: <BsFillShieldLockFill className={iconClass} /> },
  { title: "Typescript",  icon: <SiTypescript        className={iconClass} /> },
  { title: "Resend",      icon: <MdMarkEmailRead     className={iconClass} /> },
  { title: "Resp.",       icon: <TbDeviceMobileCode  className={iconClass} /> },
];

// ─── Component ────────────────────────────────────────────────────────────────

const BtnStack = ({ className = "", contentType }: BtnStackProps) => {
  const stack = contentType === "project" ? stackProject : stackNoCode;

  return (
    <section className={className} id="projects-min">
      <div className="contents mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="relative rounded-md"
        >
          <div className="pb-10 grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-12 gap-4">
            {stack.map(({ title, icon }, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10, transition: { duration: 0.1 } }}
                className="flex flex-col items-center"
              >
                <span className="text-2xl md:text-3xl flex flex-col items-center">
                  {icon}
                  <h3 className="text-xl hover:text-gray-500 text-[#2F2E2E] pb-2 inline-block">
                    {title}
                  </h3>
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BtnStack;