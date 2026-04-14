import { SitePricing } from "@/features/création/site-web/site-pricing";
import { setup } from "@test/utils";
import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe("SitePricing", () => {
  it("affiche le badge 'Tarif unique'", () => {
    setup(<SitePricing />);
    expect(screen.getByText("Tarif unique")).toBeInTheDocument();
  });

  it("affiche la carte pricing", () => {
    const { container } = setup(<SitePricing />);
    expect(
      container.querySelector("[data-testid='site-pricing-card']")
    ).toBeInTheDocument();
  });

  it("affiche le prix '997'", () => {
    setup(<SitePricing />);
    expect(screen.getByTestId("site-price")).toHaveTextContent("997");
  });

  it("affiche le symbole euro orange", () => {
    setup(<SitePricing />);
    expect(screen.getByText("€")).toBeInTheDocument();
  });

  it("affiche 8 features incluses", () => {
    const { container } = setup(<SitePricing />);
    expect(
      container.querySelectorAll("[data-testid='site-pricing-feature']").length
    ).toBe(8);
  });

  it("affiche 'Design sur-mesure responsive'", () => {
    setup(<SitePricing />);
    expect(
      screen.getByText("Design sur-mesure responsive")
    ).toBeInTheDocument();
  });

  it("affiche 'Optimisation SEO native complète'", () => {
    setup(<SitePricing />);
    expect(
      screen.getByText("Optimisation SEO native complète")
    ).toBeInTheDocument();
  });

  it("affiche 'Support inclus pendant 30 jours'", () => {
    setup(<SitePricing />);
    expect(
      screen.getByText("Support inclus pendant 30 jours")
    ).toBeInTheDocument();
  });

  it("le CTA pointe vers #audit-form", () => {
    setup(<SitePricing />);
    expect(
      screen.getByRole("link", { name: /créer mon site/i })
    ).toHaveAttribute("href", "#audit-form");
  });

  it("affiche la note 'Sans engagement'", () => {
    setup(<SitePricing />);
    expect(screen.getByText(/sans engagement/i)).toBeInTheDocument();
  });
});