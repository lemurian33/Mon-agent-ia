import { LandingHeader } from "@/features/landing/landing-header";
import { setup } from "@test/utils";
import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/image", () => ({
  default: ({ alt, src, width, height, className }: {
    alt: string;
    src: string;
    width?: number;
    height?: number;
    className?: string;
  }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} src={src} width={width} height={height} className={className} />
  ),
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

const mockPush = vi.fn();
vi.mock("next/navigation", async () => {
  const actual = await vi.importActual("next/navigation");
  return {
    ...actual,
    useRouter: () => ({ push: mockPush }),
    usePathname: () => "/",
  };
});

vi.mock("motion/react", async () => {
  const actual = await vi.importActual("motion/react");
  return {
    ...actual,
    motion: {
      header: ({ children, style: _style, ...props }: React.HTMLAttributes<HTMLElement> & { style?: unknown }) => (
        <header {...props}>{children}</header>
      ),
      nav: ({ children, style: _style, ...props }: React.HTMLAttributes<HTMLElement> & { style?: unknown }) => (
        <nav {...props}>{children}</nav>
      ),
      p: ({ children, style: _style, ...props }: React.HTMLAttributes<HTMLParagraphElement> & { style?: unknown }) => (
        <p {...props}>{children}</p>
      ),
      div: ({ children, style: _style, ...props }: React.HTMLAttributes<HTMLDivElement> & { style?: unknown }) => (
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

describe("LandingHeader", () => {

  // ── Rendu ──────────────────────────────────────────────

  it("affiche le logo", () => {
    setup(<LandingHeader />);
    // Le drawer utilise alt="lemurian", le header desktop alt="lemurian app logo"
    const logos = [
      ...screen.queryAllByAltText("lemurian"),
      ...screen.queryAllByAltText("lemurian app logo"),
    ];
    expect(logos.length).toBeGreaterThanOrEqual(1);
  });

  it("affiche le nom de marque", () => {
    setup(<LandingHeader />);
    expect(screen.getAllByText("Lemurian Agency").length).toBeGreaterThanOrEqual(1);
  });

  it("affiche tous les liens de navigation", () => {
    setup(<LandingHeader />);
    ["Créations", "Solutions", "Réalisations", "Blog", "Contact", "About"].forEach((label) => {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    });
  });

  it("affiche le CTA 'Prendre RDV' vers #audit-form", () => {
    setup(<LandingHeader />);
    screen.getAllByRole("link", { name: /prendre rdv/i }).forEach((cta) => {
      expect(cta).toHaveAttribute("href", "#audit-form");
    });
  });

  // ── Hrefs ──────────────────────────────────────────────

  it("chaque lien nav a le bon href", () => {
    setup(<LandingHeader />);
    const expected = [
      { label: "Créations",     href: "/site-web" },
      { label: "Solutions",    href: "/solutions" },
      { label: "Réalisations", href: "/realisations" },
      { label: "Blog",         href: "/posts" },
      { label: "Contact",      href: "/contact" },
      { label: "About",        href: "/about" },
    ];
    expected.forEach(({ label, href }) => {
      screen.getAllByRole("link", { name: label }).forEach((link) => {
        expect(link).toHaveAttribute("href", href);
      });
    });
  });

  // ── Interaction logo ───────────────────────────────────

  it("click sur le logo appelle router.push('/')", async () => {
    const { user } = setup(<LandingHeader />);
    // On prend n'importe quel logo présent (desktop ou drawer)
    const logos = [
      ...screen.queryAllByAltText("lemurian"),
      ...screen.queryAllByAltText("lemurian app logo"),
    ];
    expect(logos.length).toBeGreaterThanOrEqual(1);
    const logoWrapper = logos[0].closest("div") as HTMLElement;
    await user.click(logoWrapper);
    expect(mockPush).toHaveBeenCalledWith("/");
  });

  // ── Mobile drawer ──────────────────────────────────────

  it("affiche le bouton hamburger", () => {
    setup(<LandingHeader />);
    expect(
      screen.getByRole("button", { name: /ouvrir le menu/i })
    ).toBeInTheDocument();
  });

  it("ouvre le drawer au click hamburger", async () => {
    const { user } = setup(<LandingHeader />);
    await user.click(screen.getByRole("button", { name: /ouvrir le menu/i }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("ferme le drawer via le bouton Close", async () => {
    const { user } = setup(<LandingHeader />);
    await user.click(screen.getByRole("button", { name: /ouvrir le menu/i }));
    await user.click(screen.getByRole("button", { name: /close/i }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("ferme le drawer via Escape", async () => {
    const { user } = setup(<LandingHeader />);
    await user.click(screen.getByRole("button", { name: /ouvrir le menu/i }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("les liens du drawer sont accessibles", async () => {
    const { user } = setup(<LandingHeader />);
    await user.click(screen.getByRole("button", { name: /ouvrir le menu/i }));
    const contactLinks = screen.getAllByRole("link", { name: "Contact" });
    expect(contactLinks.length).toBeGreaterThanOrEqual(1);
  });
});