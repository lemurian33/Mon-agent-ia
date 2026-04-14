import { Header } from "@/features/layout/header";
import { setup } from "@test/utils";
import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/image", () => ({
  default: ({ alt, ...props }: { alt: string }) => <img alt={alt} {...props} />,
}));

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("next/navigation", async () => {
  const actual = await vi.importActual("next/navigation");
  return {
    ...actual,
    useRouter: () => ({ push: vi.fn() }),
    usePathname: () => "/",
  };
});

vi.mock("@/lib/auth-client", () => ({
  useSession: () => ({ data: null }),
}));

vi.mock("motion/react", async () => {
  const actual = await vi.importActual("motion/react");
  return {
    ...actual,
    motion: {
      header: ({ children, style: _s, ...props }: React.HTMLAttributes<HTMLElement> & { style?: unknown }) => (
        <header {...props}>{children}</header>
      ),
      nav: ({ children, style: _s, ...props }: React.HTMLAttributes<HTMLElement> & { style?: unknown }) => (
        <nav {...props}>{children}</nav>
      ),
      p: ({ children, style: _s, ...props }: React.HTMLAttributes<HTMLParagraphElement> & { style?: unknown }) => (
        <p {...props}>{children}</p>
      ),
      div: ({ children, style: _s, ...props }: React.HTMLAttributes<HTMLDivElement> & { style?: unknown }) => (
        <div {...props}>{children}</div>
      ),
    },
    useScroll: () => ({
      scrollY: {
        on: vi.fn(() => vi.fn()),
        getPrevious: vi.fn(() => 0),
      },
    }),
    useMotionValue: (initial: number) => ({
      get: vi.fn(() => initial),
      set: vi.fn(),
      on: vi.fn(() => vi.fn()),
    }),
    useTransform: vi.fn(() => 0),
  };
});

vi.mock("@/features/auth/auth-button-client", () => ({
  AuthButtonClient: () => <button>Auth</button>,
}));

vi.mock("@/components/nowts/typography", () => ({
  Typography: ({ children, variant, className }: { children: React.ReactNode; variant?: string; className?: string }) => (
    <div data-testid={`typography-${variant}`} className={className}>{children}</div>
  ),
}));

vi.mock("framer-motion", async () => {
  const actual = await vi.importActual("framer-motion");
  return {
    ...actual,
    motion: {
      header: ({ children, style: _s, ...props }: React.HTMLAttributes<HTMLElement> & { style?: unknown }) => (
        <header {...props}>{children}</header>
      ),
      p: ({ children, style: _s, ...props }: React.HTMLAttributes<HTMLParagraphElement> & { style?: unknown }) => (
        <p {...props}>{children}</p>
      ),
    },
    useScroll: () => ({
      scrollY: { on: vi.fn(() => vi.fn()), getPrevious: vi.fn(() => 0) },
    }),
    useMotionValue: (v: number) => ({ get: vi.fn(() => v), set: vi.fn(), on: vi.fn(() => vi.fn()) }),
    useTransform: vi.fn(() => 0),
  };
});

describe("Header", () => {
  it("affiche tous les liens de navigation", () => {
    setup(<Header />);
    ["Création", "Solutions", "Réalisations","Blog","Contact"].forEach(
      (label) => {
        expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
      }
    );
  });

  it("chaque lien a le bon href", () => {
    setup(<Header />);
    const expected = [
      { label: "Créations",     href: "/site-web" },
      { label: "Solutions",     href: "/solutions" },
      { label: "Réalisations",  href: "/realisations" },
      { label: "Blog",          href: "/posts" },
      { label: "Contact",       href: "/contact" },
      // { label: "Avis",          href: "/avis" },
      // { label: "FAQ",           href: "/faq" },
      // { label: "Documentation", href: "/docs" },
    ];
    expected.forEach(({ label, href }) => {
      expect(screen.getByRole("link", { name: label }))
        .toHaveAttribute("href", href);
    });
  });

  it("affiche le CTA 'Prendre RDV' vers /#audit-form", () => {
    setup(<Header />);
    screen.getAllByRole("link", { name: /prendre rdv/i }).forEach((cta) => {
      expect(cta).toHaveAttribute("href", "/#audit-form");
    });
  });
});