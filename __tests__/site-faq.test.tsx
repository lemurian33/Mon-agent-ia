import { SiteFaq } from "@/features/site-web/site-faq";
import { setup } from "@test/utils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

describe("SiteFaq", () => {
  it("affiche le badge 'FAQ'", () => {
    setup(<SiteFaq />);
    expect(screen.getByText("FAQ")).toBeInTheDocument();
  });

  it("affiche le titre de section", () => {
    setup(<SiteFaq />);
    expect(
      screen.getByText(/questions fréquentes sur la création de site/i)
    ).toBeInTheDocument();
  });

  it("affiche exactement 6 items FAQ", () => {
    const { container } = setup(<SiteFaq />);
    expect(
      container.querySelectorAll("[data-testid='site-faq-item']").length
    ).toBe(6);
  });

  it("le premier item est ouvert par défaut", () => {
    setup(<SiteFaq />);
    expect(screen.getAllByRole("button")[0]).toHaveAttribute(
      "aria-expanded",
      "true"
    );
  });

  it("affiche la question sur les délais", () => {
    setup(<SiteFaq />);
    expect(
      screen.getByText(/combien de temps faut-il pour créer un site/i)
    ).toBeInTheDocument();
  });

  it("affiche la question sur la modification autonome", () => {
    setup(<SiteFaq />);
    expect(
      screen.getByText(/modifier mon site moi-même/i)
    ).toBeInTheDocument();
  });

  it("affiche la question sur le référencement", () => {
    setup(<SiteFaq />);
    expect(
      screen.getByText(/référencé sur google/i)
    ).toBeInTheDocument();
  });

  it("affiche la question sur l'hébergement", () => {
    setup(<SiteFaq />);
    expect(
      screen.getByText(/que comprend l'hébergement/i)
    ).toBeInTheDocument();
  });

  it("ouvre un item au clic", async () => {
    const user = userEvent.setup();
    setup(<SiteFaq />);
    const btn = screen.getByRole("button", {
      name: /modifier mon site moi-même/i,
    });
    await user.click(btn);
    expect(btn).toHaveAttribute("aria-expanded", "true");
  });

  it("ferme le précédent en ouvrant un nouveau", async () => {
    const user = userEvent.setup();
    setup(<SiteFaq />);
    const first = screen.getAllByRole("button")[0];
    const second = screen.getAllByRole("button")[1];
    await user.click(second);
    expect(first).toHaveAttribute("aria-expanded", "false");
    expect(second).toHaveAttribute("aria-expanded", "true");
  });

  it("referme au second clic", async () => {
    const user = userEvent.setup();
    setup(<SiteFaq />);
    const btn = screen.getAllByRole("button")[0];
    await user.click(btn);
    expect(btn).toHaveAttribute("aria-expanded", "false");
  });

  it("affiche le lien email", () => {
    setup(<SiteFaq />);
    expect(
      screen.getByRole("link", { name: /posez-la directement/i })
    ).toHaveAttribute("href", "mailto:lemurian734@gmail.com");
  });
});