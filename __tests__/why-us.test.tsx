import { WhyUs } from "@/features/solutions/why-us";
import { setup } from "@test/utils";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("WhyUs", () => {
  it("affiche le badge 'Pourquoi nous'", () => {
    setup(<WhyUs />);
    expect(screen.getByText("Pourquoi nous")).toBeInTheDocument();
  });

  it("affiche le titre de section", () => {
    setup(<WhyUs />);
    expect(
      screen.getByText("Ce qui nous rend différents")
    ).toBeInTheDocument();
  });

  it("affiche exactement 6 cartes", () => {
    const { container } = setup(<WhyUs />);
    expect(
      container.querySelectorAll("[data-testid='why-us-card']").length
    ).toBe(6);
  });

  it("affiche 'Uniquement le SEO local'", () => {
    setup(<WhyUs />);
    expect(screen.getByText("Uniquement le SEO local")).toBeInTheDocument();
  });

  it("affiche 'Résultats mesurables'", () => {
    setup(<WhyUs />);
    // Plusieurs éléments peuvent contenir ce texte — on vérifie l'heading
    expect(
      screen.getAllByText(/résultats mesurables/i).length
    ).toBeGreaterThanOrEqual(1);
  });

  it("affiche 'Zéro bullshit'", () => {
    setup(<WhyUs />);
    expect(screen.getByText("Zéro bullshit")).toBeInTheDocument();
  });

  it("affiche 'Interlocuteur unique'", () => {
    setup(<WhyUs />);
    expect(screen.getByText("Interlocuteur unique")).toBeInTheDocument();
  });

  it("affiche 'Réponse en moins de 24h'", () => {
    setup(<WhyUs />);
    expect(
      screen.getByText("Réponse en moins de 24h")
    ).toBeInTheDocument();
  });

  it("affiche 'Ancré en Nouvelle-Aquitaine'", () => {
    setup(<WhyUs />);
    expect(
      screen.getByText("Ancré en Nouvelle-Aquitaine")
    ).toBeInTheDocument();
  });

  it("affiche le bloc garantie", () => {
    setup(<WhyUs />);
    expect(
      screen.getByText(/garantie résultats ou remboursement/i)
    ).toBeInTheDocument();
  });

  it("le CTA garantie pointe vers #audit-form", () => {
    setup(<WhyUs />);
    expect(
      screen.getByRole("link", { name: /tester sans risque/i })
    ).toHaveAttribute("href", "#audit-form");
  });
});