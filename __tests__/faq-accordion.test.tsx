import { FaqAccordion } from "@/features/landing/faq-accordion";
import { setup } from "@test/utils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

describe("FaqAccordion", () => {
  it("affiche le badge 'FAQ'", () => {
    setup(<FaqAccordion />);
    expect(screen.getByText("FAQ")).toBeInTheDocument();
  });

  it("affiche le titre de section", () => {
    setup(<FaqAccordion />);
    expect(screen.getByText("Questions fréquentes")).toBeInTheDocument();
  });

  it("affiche exactement 8 items FAQ", () => {
    const { container } = setup(<FaqAccordion />);
    expect(
      container.querySelectorAll("[data-testid='faq-item']").length
    ).toBe(8);
  });

  it("le premier item est ouvert par défaut", () => {
    setup(<FaqAccordion />);
    const firstBtn = screen.getAllByRole("button")[0];
    expect(firstBtn).toHaveAttribute("aria-expanded", "true");
  });

  it("affiche la question sur les délais", () => {
    setup(<FaqAccordion />);
    expect(
      screen.getByText(/combien de temps avant de voir des résultats/i)
    ).toBeInTheDocument();
  });

  it("affiche la question sur les villes", () => {
    setup(<FaqAccordion />);
    expect(
      screen.getByText(/vous intervenez dans quelles villes/i)
    ).toBeInTheDocument();
  });

  it("affiche la question sur l'engagement", () => {
    setup(<FaqAccordion />);
    expect(
      screen.getByText(/y a-t-il un engagement de durée/i)
    ).toBeInTheDocument();
  });

  it("ouvre un item au clic", async () => {
    const user = userEvent.setup();
    setup(<FaqAccordion />);
    const btn = screen.getByRole("button", {
      name: /vous intervenez dans quelles villes/i,
    });
    await user.click(btn);
    expect(btn).toHaveAttribute("aria-expanded", "true");
  });

  it("ferme le précédent en ouvrant un nouveau", async () => {
    const user = userEvent.setup();
    setup(<FaqAccordion />);
    const first = screen.getAllByRole("button")[0];
    const second = screen.getAllByRole("button")[1];
    await user.click(second);
    expect(first).toHaveAttribute("aria-expanded", "false");
    expect(second).toHaveAttribute("aria-expanded", "true");
  });

  it("referme un item au second clic", async () => {
    const user = userEvent.setup();
    setup(<FaqAccordion />);
    const btn = screen.getAllByRole("button")[0];
    await user.click(btn); // ferme
    expect(btn).toHaveAttribute("aria-expanded", "false");
  });

  it("affiche le lien email en bas", () => {
    setup(<FaqAccordion />);
    expect(
      screen.getByRole("link", { name: /posez-la directement/i })
    ).toHaveAttribute("href", "mailto:lemurian734@gmail.com");
  });
});