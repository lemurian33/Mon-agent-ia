import { CallProcess } from "@/features/landing/call-process";
import { setup } from "@test/utils";
import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

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

describe("CallProcess", () => {

  // ── Header ──────────────────────────────────────────────

  it("affiche le badge 'Déroulement de l'appel'", () => {
    setup(<CallProcess />);
    expect(
      screen.getByText(/déroulement de l'appel/i)
    ).toBeInTheDocument();
  });

  it("affiche le titre de section", () => {
    setup(<CallProcess />);
    expect(
      screen.getByText(/ce qui vous attend lors de notre échange/i)
    ).toBeInTheDocument();
  });

  it("affiche le sous-titre", () => {
    setup(<CallProcess />);
    expect(
      screen.getByText(/30 minutes pour analyser votre situation/i)
    ).toBeInTheDocument();
  });

  // ── Cartes ──────────────────────────────────────────────

  it("affiche exactement 5 cartes", () => {
    const { container } = setup(<CallProcess />);
    const cards = container.querySelectorAll("[data-testid='process-card']");
    expect(cards).toHaveLength(5);
  });

  it("affiche 5 icônes", () => {
    const { container } = setup(<CallProcess />);
    const icons = container.querySelectorAll("[data-testid='process-card-icon']");
    expect(icons).toHaveLength(5);
  });

  it("affiche 5 descriptions", () => {
    const { container } = setup(<CallProcess />);
    const descs = container.querySelectorAll("[data-testid='process-card-description']");
    expect(descs).toHaveLength(5);
    descs.forEach((d) => expect(d.textContent?.length).toBeGreaterThan(0));
  });

  // ── Titres des cartes ────────────────────────────────────

  it("affiche la carte 'Diagnostic de votre visibilité'", () => {
    setup(<CallProcess />);
    expect(
      screen.getByText("Diagnostic de votre visibilité")
    ).toBeInTheDocument();
  });

  it("affiche la carte 'Stratégie personnalisée'", () => {
    setup(<CallProcess />);
    expect(
      screen.getByText("Stratégie personnalisée")
    ).toBeInTheDocument();
  });

  it("affiche la carte 'Analyse concurrentielle'", () => {
    setup(<CallProcess />);
    expect(
      screen.getByText("Analyse concurrentielle")
    ).toBeInTheDocument();
  });

  it("affiche la carte 'Conseils actionnables'", () => {
    setup(<CallProcess />);
    expect(
      screen.getByText("Conseils actionnables")
    ).toBeInTheDocument();
  });

  it("affiche la carte 'Feuille de route prioritaire'", () => {
    setup(<CallProcess />);
    expect(
      screen.getByText("Feuille de route prioritaire")
    ).toBeInTheDocument();
  });
});