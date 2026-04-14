import { Testimonials } from "@/features/landing/testimonials";
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

vi.mock("@/components/nowts/typography", () => ({
  Typography: ({
    children,
    variant,
    className,
  }: {
    children: React.ReactNode;
    variant?: string;
    className?: string;
  }) => (
    <div data-testid={`typography-${variant}`} className={className}>
      {children}
    </div>
  ),
}));

describe("Testimonials", () => {

  // ── Header ──────────────────────────────────────────────

  it("affiche le badge 'Avis clients'", () => {
    setup(<Testimonials />);
    expect(screen.getByText(/avis clients/i)).toBeInTheDocument();
  });

  it("affiche le titre", () => {
    setup(<Testimonials />);
    expect(
      screen.getByText(/ce que disent nos clients/i)
    ).toBeInTheDocument();
  });

  it("affiche le sous-titre", () => {
    setup(<Testimonials />);
    expect(
      screen.getByText(/retours concrets de professionnels/i)
    ).toBeInTheDocument();
  });

  // ── Carousel ────────────────────────────────────────────

  it("affiche le carousel", () => {
    const { container } = setup(<Testimonials />);
    expect(
      container.querySelector("[data-testid='testimonials-carousel']")
    ).toBeInTheDocument();
  });

  it("n'affiche pas la flèche gauche au départ", () => {
    setup(<Testimonials />);
    expect(
      screen.queryByTestId("scroll-left")
    ).not.toBeInTheDocument();
  });

  it("affiche la flèche droite au départ", () => {
    setup(<Testimonials />);
    expect(screen.getByTestId("scroll-right")).toBeInTheDocument();
  });

  // ── Cartes ──────────────────────────────────────────────

  it("affiche 6 cartes", () => {
    const { container } = setup(<Testimonials />);
    expect(
      container.querySelectorAll("[data-testid='testimonial-card']")
    ).toHaveLength(6);
  });

  it("affiche 6 blocs d'étoiles", () => {
    const { container } = setup(<Testimonials />);
    expect(
      container.querySelectorAll("[data-testid='testimonial-stars']")
    ).toHaveLength(6);
  });

  it("affiche 6 quotes non vides", () => {
    const { container } = setup(<Testimonials />);
    const quotes = container.querySelectorAll(
      "[data-testid='testimonial-quote']"
    );
    expect(quotes).toHaveLength(6);
    quotes.forEach((q) => expect(q.textContent?.length).toBeGreaterThan(0));
  });

  it("affiche 6 avatars avec initiales", () => {
    const { container } = setup(<Testimonials />);
    expect(
      container.querySelectorAll("[data-testid='testimonial-avatar']")
    ).toHaveLength(6);
  });

  // ── Auteurs ─────────────────────────────────────────────

  it("affiche Isabelle de Tarbes", () => {
    setup(<Testimonials />);
    expect(screen.getByText("Isabelle")).toBeInTheDocument();
    expect(screen.getByText("Tarbes")).toBeInTheDocument();
  });

  it("affiche Éric de Toulouse", () => {
    setup(<Testimonials />);
    expect(screen.getByText("Éric")).toBeInTheDocument();
    expect(screen.getByText("Toulouse")).toBeInTheDocument();
  });

  it("affiche Claire de Montpellier", () => {
    setup(<Testimonials />);
    expect(screen.getByText("Claire")).toBeInTheDocument();
    expect(screen.getByText("Montpellier")).toBeInTheDocument();
  });

  // ── CTA ─────────────────────────────────────────────────

  it("affiche le CTA 'Voir tous les avis'", () => {
    setup(<Testimonials />);
    expect(
      screen.getByRole("link", { name: /voir tous les avis/i })
    ).toBeInTheDocument();
  });

  it("le CTA pointe vers /avis", () => {
    setup(<Testimonials />);
    expect(
      screen.getByRole("link", { name: /voir tous les avis/i })
    ).toHaveAttribute("href", "/avis");
  });
});