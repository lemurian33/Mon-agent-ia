import { About } from "@/features/landing/about";
import { setup } from "@test/utils";
import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/image", () => ({
  default: ({ alt, ...props }: { alt: string }) => (
    <img alt={alt} {...props} />
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

vi.mock("@/components/nowts/typography", () => ({
  Typography: ({
    children,
    variant,
    className,
  }: {
    children: React.ReactNode;
    variant?: string;
    className?: string;
  }) => (
    <div data-testid={`typography-${variant}`} className={className}>
      {children}
    </div>
  ),
}));

describe("About", () => {

  // ── Header ──────────────────────────────────────────────

  it("affiche le badge 'À propos'", () => {
    setup(<About />);
    expect(screen.getByText(/à propos/i)).toBeInTheDocument();
  });

  it("affiche le titre", () => {
    setup(<About />);
    expect(
      screen.getByText(/de la tech à la génération de clients locaux/i)
    ).toBeInTheDocument();
  });

  it("affiche le sous-titre", () => {
    setup(<About />);
    expect(
      screen.getByText(/culture de l'exigence/i)
    ).toBeInTheDocument();
  });

  // ── Photo ───────────────────────────────────────────────

  it("affiche la photo d'Andy", () => {
    setup(<About />);
    expect(screen.getByAltText("Andy Ramaroson")).toBeInTheDocument();
  });

  it("affiche le nom Andy Ramaroson", () => {
    setup(<About />);
    expect(
      screen.getAllByText(/andy ramaroson/i).length
    ).toBeGreaterThanOrEqual(1);
  });

  it("affiche le rôle Fondateur Lemurian", () => {
    setup(<About />);
    expect(screen.getByText(/fondateur, lemurian/i)).toBeInTheDocument();
  });

  // ── Valeurs ─────────────────────────────────────────────

  it("affiche 4 badges valeurs", () => {
    const { container } = setup(<About />);
    expect(
      container.querySelectorAll("[data-testid='about-value']")
    ).toHaveLength(4);
  });

  it("affiche 'Rigueur non négociable'", () => {
    setup(<About />);
    expect(
      screen.getByText("Rigueur non négociable")
    ).toBeInTheDocument();
  });

  it("affiche 'Précision avant tout'", () => {
    setup(<About />);
    expect(screen.getByText("Précision avant tout")).toBeInTheDocument();
  });

  // ── Engagement ──────────────────────────────────────────

  it("affiche le bloc 'Mon engagement'", () => {
    setup(<About />);
    expect(screen.getByText(/mon engagement/i)).toBeInTheDocument();
  });

  it("affiche 4 engagements", () => {
    const { container } = setup(<About />);
    expect(
      container.querySelectorAll("[data-testid='about-commitment']")
    ).toHaveLength(4);
  });

  it("affiche 'Vous ne payez que les résultats'", () => {
    setup(<About />);
    expect(
      screen.getByText("Vous ne payez que les résultats")
    ).toBeInTheDocument();
  });

  // ── CTA ─────────────────────────────────────────────────

  it("affiche le CTA 'Découvrir mon histoire complète'", () => {
    setup(<About />);
    expect(
      screen.getByRole("link", { name: /découvrir mon histoire complète/i })
    ).toBeInTheDocument();
  });

  it("le CTA pointe vers /about", () => {
    setup(<About />);
    expect(
      screen.getByRole("link", { name: /découvrir mon histoire complète/i })
    ).toHaveAttribute("href", "/about");
  });
});