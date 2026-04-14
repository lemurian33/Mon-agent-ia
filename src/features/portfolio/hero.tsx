"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgScroll = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center bg-white overflow-hidden"
    >
      {/* Liens sociaux verticaux — desktop uniquement */}
      <nav className="relative top-4 left-2 z-30 hidden lg:contents">
        <ul className="flex flex-row rotate-90 text-gray-700">
          <li>
            <Link
              href="https://www.linkedin.com/in/andy-ramaroson/"
              target="_blank"
              className="hover:text-orange-500 transition duration-300 mr-20"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/AndyRama"
              target="_blank"
              className="hover:text-orange-500 transition duration-300 mr-20"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href="/images/Cv_Ramaroson_Andy_lead_dev.pdf"
              target="_blank"
              className="hover:text-orange-500 transition duration-300"
            >
              CV
            </Link>
          </li>
        </ul>
      </nav>

      {/* Overlay orange animé */}
      <motion.div
        className="absolute inset-0 bg-[#FFB088] z-10"
        initial={{ x: "100%" }}
        animate={{ x: ["100%", "-100%", "100%", "69%"] }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          times: [0, 0.4, 0, 1],
          repeat: 0,
        }}
      />

      <div className="container relative z-20 mx-auto mt-20 lg:mt-0 px-4 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center">

          {/* Texte */}
          <motion.div
            className="lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl lg:text-6xl font-bold mb-4 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Andy Ramaroson,
            </motion.h1>

            <motion.h2
              className="text-3xl lg:text-5xl font-semibold mb-4 text-orange-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Full-Stack Developer
            </motion.h2>

            <motion.h3
              className="text-2xl font-medium mb-6 text-orange-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Next.js | React | TypeScript
            </motion.h3>

            <motion.p
              className="text-lg mb-8 text-gray-600 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Développeur Full-Stack JS basé à Bordeaux, spécialisé en React &amp;
              Next.js. Je conçois des applications web modernes sur mesure — de
              l&apos;interface jusqu&apos;au back-end — en intégrant les outils
              IA dans mon workflow.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Link
                href="/contact"
                className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition duration-300"
              >
                Me contacter
              </Link>
              <Link
                href="/cv"
                className="border border-orange-500 text-orange-500 px-6 py-3 rounded-md hover:bg-orange-50 transition duration-300"
              >
                Voir mon CV
              </Link>
            </motion.div>
          </motion.div>

          {/* Photo avec parallax */}
          <motion.div
            className="lg:w-1/2"
            style={{ y: imgScroll }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Image
              src="/images/andy-ramaroson.jpeg"
              width={500}
              height={700}
              alt="Andy Ramaroson"
              className="rounded-lg shadow-2xl"
              priority
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}