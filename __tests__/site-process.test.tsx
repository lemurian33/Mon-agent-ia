// src/features/solution-site/__tests__/site-process.test.tsx
import { SiteProcess } from "@/features/solution-site/site-process";
import { setup } from "@test/utils";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("SiteProcess", () => {
  it("affiche le badge 'Processus'", () => {
    setup(<SiteProcess />);
    expect(screen.getByText("Processus")).toBeInTheDocument();
  });

  it("affiche le titre 'De l'idée au site en ligne'", () => {
    setup(<SiteProcess />);
    expect(
      screen.getByText("De l'idée au site en ligne")
    ).toBeInTheDocument();
  });

  it("affiche exactement 4 étapes", () => {
    const { container } = setup(<SiteProcess />);
    expect(
      container.querySelectorAll("[data-testid='site-step']").length
    ).toBe(4);
  });

  it("affiche les numéros 01, 02, 03, 04", () => {
    setup(<SiteProcess />);
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("02")).toBeInTheDocument();
    expect(screen.getByText("03")).toBeInTheDocument();
    expect(screen.getByText("04")).toBeInTheDocument();
  });

  it("affiche l'étape 'Brief & cahier des charges'", () => {
    setup(<SiteProcess />);
    expect(
      screen.getByText("Brief & cahier des charges")
    ).toBeInTheDocument();
  });

  it("affiche l'étape 'Maquette & design'", () => {
    setup(<SiteProcess />);
    expect(screen.getByText("Maquette & design")).toBeInTheDocument();
  });

  it("affiche l'étape 'Développement & SEO'", () => {
    setup(<SiteProcess />);
    expect(screen.getByText("Développement & SEO")).toBeInTheDocument();
  });

  it("affiche l'étape 'Mise en ligne & formation'", () => {
    setup(<SiteProcess />);
    expect(screen.getByText("Mise en ligne & formation")).toBeInTheDocument();
  });

  it("affiche 4 descriptions non vides", () => {
    const { container } = setup(<SiteProcess />);
    const descs = container.querySelectorAll(
      "[data-testid='site-step-description']"
    );
    expect(descs.length).toBe(4);
    descs.forEach((d) => expect(d.textContent?.trim().length).toBeGreaterThan(0));
  });
});