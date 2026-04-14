import { SiteBenefits } from "@/features/création/site-web/site-benefits";
import { setup } from "@test/utils";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("SiteBenefits", () => {
  it("affiche le badge 'Résultats'", () => {
    setup(<SiteBenefits />);
    expect(screen.getByText("Résultats")).toBeInTheDocument();
  });

  it("affiche le titre 'Ce que votre site vous apporte'", () => {
    setup(<SiteBenefits />);
    expect(
      screen.getByText("Ce que votre site vous apporte")
    ).toBeInTheDocument();
  });

  it("affiche exactement 7 bénéfices", () => {
    const { container } = setup(<SiteBenefits />);
    expect(
      container.querySelectorAll("[data-testid='site-benefit']").length
    ).toBe(7);
  });

  it("affiche le bénéfice 'inspire confiance'", () => {
    setup(<SiteBenefits />);
    expect(screen.getByText(/inspire confiance/i)).toBeInTheDocument();
  });

  it("affiche le bénéfice 'référencement naturel intégré'", () => {
    setup(<SiteBenefits />);
    expect(
      screen.getByText(/référencement naturel intégré/i)
    ).toBeInTheDocument();
  });

  it("affiche exactement 2 métriques", () => {
    const { container } = setup(<SiteBenefits />);
    expect(
      container.querySelectorAll("[data-testid='site-metric']").length
    ).toBe(2);
  });

  it("affiche la métrique '90+'", () => {
    setup(<SiteBenefits />);
    expect(screen.getByText("90+")).toBeInTheDocument();
  });

  it("affiche la métrique '100%'", () => {
    setup(<SiteBenefits />);
    expect(screen.getByText("100%")).toBeInTheDocument();
  });

  it("affiche 'SEO ready'", () => {
    setup(<SiteBenefits />);
    expect(screen.getByText("SEO ready")).toBeInTheDocument();
  });
});