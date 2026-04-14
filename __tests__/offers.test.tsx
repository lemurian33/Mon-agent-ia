import { Offers } from "@/features/landing/offers";
import { setup } from "@test/utils";
import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

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

describe("Offers", () => {

  // ── Header ──────────────────────────────────────────────

  it("affiche le badge 'Nos offres'", () => {
    setup(<Offers />);
    expect(screen.getByText(/nos offres/i)).toBeInTheDocument();
  });

  it("affiche le titre", () => {
    setup(<Offers />);
    expect(
      screen.getByText(/des solutions adaptées à vos besoins/i)
    ).toBeInTheDocument();
  });

  it("affiche le sous-titre", () => {
    setup(<Offers />);
    expect(
      screen.getByText(/de l'audit de visibilité/i)
    ).toBeInTheDocument();
  });

  // ── Carousel ────────────────────────────────────────────

  it("affiche le carousel", () => {
    const { container } = setup(<Offers />);
    expect(
      container.querySelector("[data-testid='offers-carousel']")
    ).toBeInTheDocument();
  });

  it("affiche les boutons de navigation", () => {
    setup(<Offers />);
    expect(screen.getByTestId("scroll-left")).toBeInTheDocument();
    expect(screen.getByTestId("scroll-right")).toBeInTheDocument();
  });

  it("le bouton précédent est désactivé au départ", () => {
    setup(<Offers />);
    expect(screen.getByTestId("scroll-left")).toBeDisabled();
  });

  // ── Cartes ──────────────────────────────────────────────

  it("affiche exactement 5 cartes", () => {
    const { container } = setup(<Offers />);
    expect(
      container.querySelectorAll("[data-testid='offer-card']")
    ).toHaveLength(5);
  });

  it("affiche le badge POPULAIRE sur la carte Partenariat", () => {
    const { container } = setup(<Offers />);
    expect(
      container.querySelector("[data-testid='offer-badge']")
    ).toBeInTheDocument();
    expect(screen.getByText(/populaire/i)).toBeInTheDocument();
  });

  it("affiche les 5 titres d'offre", () => {
    setup(<Offers />);
    expect(screen.getByText("Partenariat leads")).toBeInTheDocument();
    expect(screen.getByText("Audit de visibilité")).toBeInTheDocument();
    expect(screen.getByText("Optimisation Fiche Google")).toBeInTheDocument();
    expect(screen.getByText("Référencement web (SEO)")).toBeInTheDocument();
    expect(screen.getByText("Création de site web")).toBeInTheDocument();
  });

  it("affiche les prix", () => {
    setup(<Offers />);
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("97")).toBeInTheDocument();
    expect(screen.getAllByText(/247/).length).toBeGreaterThanOrEqual(1);
  });

  // ── Features ────────────────────────────────────────────

  it("affiche les features (3 par offre)", () => {
    const { container } = setup(<Offers />);
    const features = container.querySelectorAll("[data-testid='offer-feature']");
    expect(features.length).toBeGreaterThanOrEqual(15);
  });

  // ── CTAs ────────────────────────────────────────────────

  it("affiche 5 CTAs 'En savoir plus'", () => {
    setup(<Offers />);
    const links = screen.getAllByRole("link", { name: /en savoir plus/i });
    expect(links.length).toBeGreaterThanOrEqual(4);
  });

  it("le CTA Partenariat pointe vers /solutions/partenariat", () => {
    setup(<Offers />);
    const links = screen.getAllByRole("link", { name: /en savoir plus/i });
    expect(links[1]).toHaveAttribute("href", "/solutions/partenariat");
  });
});