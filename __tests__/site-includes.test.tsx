import { SiteIncludes } from "@/features/création/site-web/site-includes";
import { setup } from "@test/utils";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("SiteIncludes", () => {
  it("affiche le badge 'Ce qui est inclus'", () => {
    setup(<SiteIncludes />);
    expect(screen.getByText("Ce qui est inclus")).toBeInTheDocument();
  });

  it("affiche le titre 'Un site complet, clé en main'", () => {
    setup(<SiteIncludes />);
    expect(
      screen.getByText("Un site complet, clé en main")
    ).toBeInTheDocument();
  });

  it("affiche exactement 6 cartes", () => {
    const { container } = setup(<SiteIncludes />);
    expect(
      container.querySelectorAll("[data-testid='site-feature-card']").length
    ).toBe(6);
  });

  it("affiche 'Design sur-mesure'", () => {
    setup(<SiteIncludes />);
    expect(screen.getByText("Design sur-mesure")).toBeInTheDocument();
  });

  it("affiche 'Responsive & mobile-first'", () => {
    setup(<SiteIncludes />);
    expect(screen.getByText("Responsive & mobile-first")).toBeInTheDocument();
  });

  it("affiche 'Optimisation SEO native'", () => {
    setup(<SiteIncludes />);
    expect(screen.getByText("Optimisation SEO native")).toBeInTheDocument();
  });

  it("affiche 'Performances maximales'", () => {
    setup(<SiteIncludes />);
    expect(screen.getByText("Performances maximales")).toBeInTheDocument();
  });

  it("affiche 'Formulaires de contact'", () => {
    setup(<SiteIncludes />);
    expect(screen.getByText("Formulaires de contact")).toBeInTheDocument();
  });

  it("affiche 'Formation à la gestion'", () => {
    setup(<SiteIncludes />);
    expect(screen.getByText("Formation à la gestion")).toBeInTheDocument();
  });

  it("affiche le badge 'Inclus SEO' sur la carte SEO", () => {
    const { container } = setup(<SiteIncludes />);
    expect(
      container.querySelectorAll("[data-testid='site-feature-badge']").length
    ).toBe(1);
    expect(screen.getByText("Inclus SEO")).toBeInTheDocument();
  });
});