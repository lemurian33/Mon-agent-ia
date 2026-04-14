import { HowItWorks } from "@/features/landing/how-it-works";
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

describe("HowItWorks", () => {

  // ── Header ──────────────────────────────────────────────

  it("affiche le badge 'Processus'", () => {
    setup(<HowItWorks />);
    expect(screen.getByText("Processus")).toBeInTheDocument();
  });

  it("affiche le titre 'Comment ça marche'", () => {
    setup(<HowItWorks />);
    expect(
      screen.getByText(/comment ça marche/i)
    ).toBeInTheDocument();
  });

  it("affiche le sous-titre", () => {
    setup(<HowItWorks />);
    expect(
      screen.getByText(/processus simple et transparent/i)
    ).toBeInTheDocument();
  });

  // ── Cartes ──────────────────────────────────────────────

  it("affiche exactement 6 cartes", () => {
    const { container } = setup(<HowItWorks />);
    const cards = container.querySelectorAll("[data-testid='step-card']");
    expect(cards).toHaveLength(6);
  });

  it("affiche les numéros 01, 02, 03, 04, 05, 06", () => {
    setup(<HowItWorks />);
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("02")).toBeInTheDocument();
    expect(screen.getByText("03")).toBeInTheDocument();
    expect(screen.getByText("04")).toBeInTheDocument();
    expect(screen.getByText("05")).toBeInTheDocument();
    expect(screen.getByText("06")).toBeInTheDocument();
  });

  it("affiche la carte 'Création de votre site web'", () => {
    setup(<HowItWorks />);
    expect(
      screen.getByText("Création de votre site web*")
    ).toBeInTheDocument();
  });

  it("affiche la carte 'Réservez votre appel stratégique'", () => {
    setup(<HowItWorks />);
    expect(
      screen.getByText("Réservez votre appel stratégique")
    ).toBeInTheDocument();
  });

  it("affiche la carte 'Élaboration de votre stratégie'", () => {
    setup(<HowItWorks />);
    expect(
      screen.getByText("Élaboration de votre stratégie")
    ).toBeInTheDocument();
  });

  it("affiche la carte 'Mise en application + suivi'", () => {
    setup(<HowItWorks />);
    expect(
      screen.getByText("Mise en application + suivi")
    ).toBeInTheDocument();
  });

  it("affiche 6 descriptions non vides", () => {
    const { container } = setup(<HowItWorks />);
    const descs = container.querySelectorAll(
      "[data-testid='step-description']"
    );
    expect(descs).toHaveLength(6);
    descs.forEach((d) => expect(d.textContent?.length).toBeGreaterThan(0));
  });

  it("pas de connecteurs entre étapes", () => {
    const { container } = setup(<HowItWorks />);
    const connectors = container.querySelectorAll(
      "[data-testid='step-connector']"
    );
    expect(connectors).toHaveLength(0);
  });
});