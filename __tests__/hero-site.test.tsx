import { HeroSite } from "@/features/création/site-web/hero-site";
import { setup } from "@test/utils";
import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe("HeroSite", () => {
  it("affiche le badge 'Création de site internet'", () => {
    setup(<HeroSite />);
    expect(screen.getByText(/création de site internet/i)).toBeInTheDocument();
  });

  it("affiche le h1", () => {
    setup(<HeroSite />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("affiche 'Un site qui travaille'", () => {
    setup(<HeroSite />);
    expect(screen.getByText(/un site qui travaille/i)).toBeInTheDocument();
  });

  it("affiche 'pour vous' en orange", () => {
    setup(<HeroSite />);
    expect(screen.getByText("pour vous")).toBeInTheDocument();
  });

  it("affiche le sous-titre", () => {
    setup(<HeroSite />);
    expect(screen.getByText(/site web professionnel/i)).toBeInTheDocument();
  });

  it("affiche les 3 highlights", () => {
    setup(<HeroSite />);
    expect(screen.getByText("Design responsive")).toBeInTheDocument();
    expect(screen.getByText("Performances maximales")).toBeInTheDocument();
    expect(screen.getByText("SEO natif")).toBeInTheDocument();
  });

  it("affiche le CTA 'Créer mon site'", () => {
    setup(<HeroSite />);
    expect(
      screen.getByRole("link", { name: /créer mon site/i })
    ).toBeInTheDocument();
  });

  it("le CTA principal pointe vers #audit-form", () => {
    setup(<HeroSite />);
    expect(
      screen.getByRole("link", { name: /créer mon site/i })
    ).toHaveAttribute("href", "#audit-form");
  });

  it("affiche le CTA secondaire 'Voir nos réalisations'", () => {
    setup(<HeroSite />);
    expect(
      screen.getByRole("link", { name: /voir nos réalisations/i })
    ).toHaveAttribute("href", "/realisations");
  });
});