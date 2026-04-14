import { ProofSection } from "@/features/solutions/proof-section";
import { setup } from "@test/utils";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("ProofSection", () => {
  it("affiche le badge 'Preuves'", () => {
    setup(<ProofSection />);
    expect(screen.getByText("Preuves")).toBeInTheDocument();
  });

  it("affiche le titre de section", () => {
    setup(<ProofSection />);
    expect(
      screen.getByText("Des chiffres, pas des promesses")
    ).toBeInTheDocument();
  });

  it("affiche exactement 4 stats", () => {
    const { container } = setup(<ProofSection />);
    expect(
      container.querySelectorAll("[data-testid='proof-stat']").length
    ).toBe(4);
  });

  it("affiche la stat '+280%'", () => {
    setup(<ProofSection />);
    expect(screen.getByText("+280%")).toBeInTheDocument();
  });

  it("affiche la stat '+240%'", () => {
    setup(<ProofSection />);
    expect(screen.getByText("+240%")).toBeInTheDocument();
  });

  it("affiche la stat '+310%'", () => {
    setup(<ProofSection />);
    expect(screen.getByText("+310%")).toBeInTheDocument();
  });

  it("affiche la stat '4.9/5'", () => {
    setup(<ProofSection />);
    expect(screen.getByText("4.9/5")).toBeInTheDocument();
  });

  it("affiche exactement 3 témoignages", () => {
    const { container } = setup(<ProofSection />);
    expect(
      container.querySelectorAll("[data-testid='proof-testimonial']").length
    ).toBe(3);
  });

  it("affiche le témoignage de Thomas R.", () => {
    setup(<ProofSection />);
    expect(screen.getByText("Thomas R.")).toBeInTheDocument();
  });

  it("affiche le témoignage de Nadia K.", () => {
    setup(<ProofSection />);
    expect(screen.getByText("Nadia K.")).toBeInTheDocument();
  });

  it("affiche le témoignage de Marc D.", () => {
    setup(<ProofSection />);
    expect(screen.getByText("Marc D.")).toBeInTheDocument();
  });

  it("affiche les badges de croissance", () => {
    setup(<ProofSection />);
    expect(screen.getByText("+336% d'appels")).toBeInTheDocument();
    expect(screen.getByText("+314% de RDV")).toBeInTheDocument();
    expect(screen.getByText("Top 3 Google")).toBeInTheDocument();
  });
});