import { Hero } from "@/features/landing/hero";
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

describe("Hero", () => {

  // ── Badge ───────────────────────────────────────────────

  it("affiche le badge 'Appel gratuit'", () => {
    setup(<Hero />);
    expect(
      screen.getByText(/appel gratuit/i)
    ).toBeInTheDocument();
  });

  // ── Titre ───────────────────────────────────────────────

  it("affiche le titre principal", () => {
    setup(<Hero />);
    expect(
      screen.getByText(/je booste votre visibilité sur google/i)
    ).toBeInTheDocument();
  });

  it("affiche ' avec un site qui crée une machine à clients", () => {
    setup(<Hero />);
    expect(
      screen.getByText(/ avec un site qui crée une machine à clients/i)
    ).toBeInTheDocument();
  });

  it("affiche le sous-titre", () => {
    setup(<Hero />);
    expect(
      screen.getByText(/réservez un appel de 30 minutes/i)
    ).toBeInTheDocument();
  });

  // ── CTAs ────────────────────────────────────────────────

  it("affiche le CTA primaire 'Prendre rendez-vous'", () => {
    setup(<Hero />);
    expect(
      screen.getByRole("link", { name: /prendre rendez-vous/i })
    ).toBeInTheDocument();
  });

  it("le CTA primaire pointe vers #audit-form", () => {
    setup(<Hero />);
    expect(
      screen.getByRole("link", { name: /prendre rendez-vous/i })
    ).toHaveAttribute("href", "#audit-form");
  });

  it("affiche le CTA secondaire 'Voir nos réalisations'", () => {
    setup(<Hero />);
    expect(
      screen.getByRole("link", { name: /voir nos réalisations/i })
    ).toBeInTheDocument();
  });

  it("le CTA secondaire pointe vers /realisations", () => {
    setup(<Hero />);
    expect(
      screen.getByRole("link", { name: /voir nos réalisations/i })
    ).toHaveAttribute("href", "/realisations");
  });

  // ── Badges inline ───────────────────────────────────────

  it("affiche les 3 badges inline", () => {
    setup(<Hero />);
    expect(screen.getByText("Sans engagement")).toBeInTheDocument();
    expect(screen.getByText("Appel de 30 min")).toBeInTheDocument();
    expect(screen.getByText("Créneaux limités")).toBeInTheDocument();
  });

  // ── Stats bar ───────────────────────────────────────────

  it("affiche les 4 stats", () => {
    setup(<Hero />);
    expect(screen.getByText("+20 audits réalisés")).toBeInTheDocument();
    expect(screen.getByText("Réponse < 24h")).toBeInTheDocument();
    expect(screen.getByText("Optimisé SEO local")).toBeInTheDocument();
    expect(screen.getByText("Orienté leads")).toBeInTheDocument();
  });

  // ── Backgrounds ─────────────────────────────────────────

  it("affiche les deux blobs GradientBackground", () => {
    const { container } = setup(<Hero />);
    const blobs = container.querySelectorAll("[aria-hidden='true']");
    expect(blobs.length).toBeGreaterThanOrEqual(2);
  });
});