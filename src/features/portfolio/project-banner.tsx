"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import BtnStack from "./btn-stack";

// ─── Types ────────────────────────────────────────────────────────────────────

interface BtnProps {
  href: string;
}

export interface ProjectBannerProps {
  className?: string;
  title: string;
  subTitle: string;
  description: string;
  image: string | StaticImageData;
  time: string;
  mission: string;
  developpement: string;
  btn: BtnProps;
  btn1: BtnProps;
  contentType: string;
  reverse?: boolean;
}

// ─── Component ────────────────────────────────────────────────────────────────

const ProjectBanner = ({
  className = "",
  title,
  subTitle,
  description,
  image,
  time,
  mission,
  developpement,
  btn,
  btn1,
  contentType,
  reverse = false,
}: ProjectBannerProps) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgScroll = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={ref} className={className}>
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col items-center mx-auto gap-8 ${
            reverse ? "xl:flex-row-reverse" : "xl:flex-row"
          }`}
        >
          {/* Image — taille contrainte */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 100 : -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.4, duration: 0.5, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
            style={{ y: imgScroll }}
            className="w-full xl:w-1/2 max-w-[560px] mx-auto shrink-0"
          >
            {image && (
              <Image
                src={image}
                alt={title}
                width={560}
                height={400}
                className="w-full h-auto rounded-lg object-cover"
              />
            )}
          </motion.div>

          {/* Texte */}
          <div className="w-full xl:w-1/2">
            <div className="max-w-xl mx-auto xl:mx-0 mb-10">

              {/* Subtitle */}
              {subTitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.03, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="uppercase tracking-[3px] text-[18px] mb-5 inline-block text-[#2F2E2E] font-bold"
                >
                  {subTitle}
                </motion.span>
              )}

              {/* Title */}
              {title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.06, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl xl:text-5xl text-orange-500 mb-5"
                >
                  {title}
                </motion.h2>
              )}

              {/* Meta */}
              {time && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.03, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="tracking-[3px] text-[14px] mb-5 inline-block text-[#2F2E2E] font-bold"
                >
                  {developpement} | {time} | {mission}
                </motion.span>
              )}

              {/* Description */}
              {description && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="leading-relaxed text-gray-500 text-left lg:text-lg mb-10"
                >
                  {description}
                </motion.p>
              )}

              {/* Stack — mobile */}
              <BtnStack contentType={contentType} className="contents lg:hidden" />

              {/* Boutons */}
              {(btn?.href || btn1?.href) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-4 mt-10"
                >
                  {btn1?.href && (
                    <Link
                      href={btn1.href}
                      target="_blank"
                      className="transition-all duration-300 ease-in-out text-[11.5px]
                        md:tracking-[2px] font-bold uppercase bg-gradient-to-r from-orange-300 to-orange-500
                        py-4 px-5 rounded text-gray-600 hover:bg-white hover:text-[#2F2E2E]
                        inline-block hover:shadow-2xl"
                    >
                      Demo
                    </Link>
                  )}
                  {btn?.href && (
                    <Link
                      href={btn.href}
                      target="_blank"
                      className="transition-all duration-300 ease-in-out text-[11.5px]
                        md:tracking-[2px] font-bold uppercase bg-gradient-to-r from-orange-100 to-orange-300
                        py-4 px-5 rounded text-gray-600 hover:bg-white hover:text-[#2F2E2E]
                        inline-block hover:shadow-2xl"
                    >
                      Plus d&apos;informations
                    </Link>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Stack — desktop */}
        <BtnStack contentType={contentType} className="hidden lg:contents" />

        <div className="contents md:hidden">
          <hr />
        </div>
      </div>
    </section>
  );
};

export default ProjectBanner;