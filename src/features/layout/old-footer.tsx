import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const NAV_COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "Solutions SEO",   href: "/solutions" },
      { label: "Réalisations",    href: "/realisations" },
      { label: "Avis clients",    href: "/avis" },
      { label: "FAQ",             href: "/faq" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Blog",            href: "/posts" },
      { label: "Documentation",   href: "/docs" },
      { label: "About",           href: "/about" },
      { label: "Contact",         href: "/contact" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "/legal/mentions" },
      { label: "CGV",              href: "/legal/cgv" },
      { label: "Politique confidentialité", href: "/legal/privacy" },
    ],
  },
] as const;

const CONTACT = [
  { icon: MapPin, label: "Bordeaux, Gironde" },
  { icon: Mail,   label: "contact@lemurian.fr" },
  { icon: Phone,  label: "06 XX XX XX XX" },
  { icon: Clock,  label: "Lun-Ven : 9h - 18h" },
] as const;

export function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-white/10 bg-[#111111]"
    >
      <div className="mx-auto max-w-8xl px-6 py-16 lg:px-8">

        {/* ── Grille principale ── */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_2fr]">

          {/* ── Colonne gauche — brand + contact ── */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/Astronaute-qui-vole-point-en-avant.webp"
                alt="lemurian"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-lg font-bold text-white">lemurian</span>
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              Agence SEO locale. On transforme votre visibilité Google en
              machine à générer des leads qualifiés.
            </p>

            <ul className="flex flex-col gap-2">
              {CONTACT.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm text-gray-400">
                  <Icon size={14} className="shrink-0 text-gray-500" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Colonnes droite — nav ── */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {NAV_COLUMNS.map(({ title, links }) => (
              <div key={title} className="flex flex-col gap-4">
                <h4 className="text-sm font-semibold text-white">{title}</h4>
                <nav className="flex flex-col gap-2">
                  {links.map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className="text-sm text-gray-400 transition-colors
                                 hover:text-white"
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bas de page ── */}
        <div className="mt-16 flex flex-col items-center justify-between
                        gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Lemurian. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#audit-form"
              className="rounded-full bg-orange-500 px-4 py-2 text-sm
                         font-semibold text-white transition-colors
                         hover:bg-orange-400"
            >
              Prendre RDV
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}