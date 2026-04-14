import { CtaBannerSolutions } from "@/features/solutions/cta-banner-solutions";
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

describe("CtaBannerSolutions", () => {
  it("affiche le badge 'Appel gratuit · 30 min'", () => {
    setup(<CtaBannerSolutions />);
    expect(screen.getByText(/appel gratuit/i)).toBeInTheDocument();
  });

  it("affiche le titre", () => {
    setup(<CtaBannerSolutions />);
    expect(
      screen.getByRole("heading", { level: 2 })
    ).toBeInTheDocument();
  });

  it("affiche 'dominer' dans le titre", () => {
    setup(<CtaBannerSolutions />);
    expect(screen.getByText(/prêt à dominer/i)).toBeInTheDocument();
  });

  it("affiche 'Google dans votre ville' en orange", () => {
    setup(<CtaBannerSolutions />);
    expect(
      screen.getByText(/google dans votre ville/i)
    ).toBeInTheDocument();
  });

  it("affiche le CTA principal", () => {
    setup(<CtaBannerSolutions />);
    expect(
      screen.getByRole("link", { name: /réserver mon appel gratuit/i })
    ).toBeInTheDocument();
  });

  it("le CTA principal pointe vers #audit-form", () => {
    setup(<CtaBannerSolutions />);
    expect(
      screen.getByRole("link", { name: /réserver mon appel gratuit/i })
    ).toHaveAttribute("href", "#audit-form");
  });

  it("affiche le CTA secondaire 'Voir les résultats clients'", () => {
    setup(<CtaBannerSolutions />);
    expect(
      screen.getByRole("link", { name: /voir les résultats clients/i })
    ).toHaveAttribute("href", "/realisations");
  });

  it("affiche les micro-preuves", () => {
    setup(<CtaBannerSolutions />);
    expect(screen.getByText(/\+30 audits réalisés/i)).toBeInTheDocument();
  });
});