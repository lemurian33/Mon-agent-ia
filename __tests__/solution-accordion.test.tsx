import { SolutionAccordion } from "@/features/solutions/solution-accordion";
import { setup } from "@test/utils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

describe("SolutionAccordion", () => {
  it("affiche le badge 'Solutions'", () => {
    setup(<SolutionAccordion />);
    expect(screen.getByText("Solutions")).toBeInTheDocument();
  });

  it("affiche le titre de section", () => {
    setup(<SolutionAccordion />);
    expect(screen.getByText("Ce qu'on fait pour vous")).toBeInTheDocument();
  });

  it("affiche exactement 4 solutions", () => {
    const { container } = setup(<SolutionAccordion />);
    expect(
      container.querySelectorAll("[data-testid='solution-item']").length
    ).toBe(4);
  });

  it("affiche le titre 'Audit de visibilité'", () => {
    setup(<SolutionAccordion />);
    expect(screen.getByText("Audit de visibilité")).toBeInTheDocument();
  });

  it("affiche le titre 'Optimisation Fiche Google'", () => {
    setup(<SolutionAccordion />);
    expect(
      screen.getByText("Optimisation Fiche Google")
    ).toBeInTheDocument();
  });

  it("affiche le titre 'Référencement web (SEO)'", () => {
    setup(<SolutionAccordion />);
    expect(
      screen.getByText("Référencement web (SEO)")
    ).toBeInTheDocument();
  });

  it("affiche le titre 'Création de site web'", () => {
    setup(<SolutionAccordion />);
    expect(screen.getByText("Création de site web")).toBeInTheDocument();
  });

  it("les solutions sont fermées par défaut", () => {
    setup(<SolutionAccordion />);
    expect(screen.queryByText("Gratuit")).not.toBeInTheDocument();
  });

  it("ouvre une solution au clic", async () => {
    const user = userEvent.setup();
    setup(<SolutionAccordion />);
    const btn = screen.getByRole("button", { name: /audit de visibilité/i });
    await user.click(btn);
    expect(btn).toHaveAttribute("aria-expanded", "true");
  });

  it("affiche le contenu après ouverture", async () => {
    const user = userEvent.setup();
    setup(<SolutionAccordion />);
    await user.click(
      screen.getByRole("button", { name: /audit de visibilité/i })
    );
    expect(screen.getByText("Gratuit")).toBeInTheDocument();
  });

  it("affiche le CTA 'Demander mon audit' après ouverture", async () => {
    const user = userEvent.setup();
    setup(<SolutionAccordion />);
    await user.click(
      screen.getByRole("button", { name: /audit de visibilité/i })
    );
    expect(screen.getByText(/demander mon audit/i)).toBeInTheDocument();
  });

  it("referme la solution au second clic", async () => {
    const user = userEvent.setup();
    setup(<SolutionAccordion />);
    const btn = screen.getByRole("button", { name: /audit de visibilité/i });
    await user.click(btn);
    await user.click(btn);
    expect(btn).toHaveAttribute("aria-expanded", "false");
  });
});