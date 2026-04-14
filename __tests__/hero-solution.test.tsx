import { HeroSolution } from "@/features/solutions/hero-solution";
import { setup } from "@test/utils";
import { screen } from "@testing-library/react";
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

describe("HeroSolution", () => {
  it("affiche le badge 'Nos solutions SEO local'", () => {
    setup(<HeroSolution />);
    expect(screen.getByText(/nos solutions seo local/i)).toBeInTheDocument();
  });

  it("affiche le titre principal", () => {
    setup(<HeroSolution />);
    expect(
      screen.getByRole("heading", { level: 1 })
    ).toBeInTheDocument();
  });

  it("affiche 'génère de vrais clients' en orange", () => {
    setup(<HeroSolution />);
    expect(
      screen.getByText(/génère de vrais clients/i)
    ).toBeInTheDocument();
  });

  it("affiche le sous-titre", () => {
    setup(<HeroSolution />);
    expect(
      screen.getByText(/résultats mesurables/i)
    ).toBeInTheDocument();
  });

  it("affiche les 3 highlights", () => {
    setup(<HeroSolution />);
    expect(screen.getByText("Sans engagement")).toBeInTheDocument();
    expect(screen.getByText("Résultats mesurables")).toBeInTheDocument();
    expect(screen.getByText("Accompagnement local")).toBeInTheDocument();
  });

  it("affiche le CTA primaire 'Démarrer mon audit gratuit'", () => {
    setup(<HeroSolution />);
    expect(
      screen.getByRole("link", { name: /démarrer mon audit gratuit/i })
    ).toBeInTheDocument();
  });

  it("le CTA primaire pointe vers #audit-form", () => {
    setup(<HeroSolution />);
    expect(
      screen.getByRole("link", { name: /démarrer mon audit gratuit/i })
    ).toHaveAttribute("href", "#audit-form");
  });

  it("affiche le CTA secondaire 'Découvrir les offres'", () => {
    setup(<HeroSolution />);
    expect(
      screen.getByRole("link", { name: /découvrir les offres/i })
    ).toBeInTheDocument();
  });

  it("le CTA secondaire pointe vers #solutions", () => {
    setup(<HeroSolution />);
    expect(
      screen.getByRole("link", { name: /découvrir les offres/i })
    ).toHaveAttribute("href", "#solutions");
  });
});