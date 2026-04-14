"use client";

import { ArrowUp } from "lucide-react";

export const ScrollTopButton = () => (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="flex items-center gap-1.5 text-sm
               text-gray-500 transition-colors hover:text-white"
  >
    Retour en haut
    <ArrowUp size={13} />
  </button>
);