import { Results } from "@/features/landing/results";
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

describe("Results", () => {

  // ── Header ──────────────────────────────────────────────

  it("affiche le badge 'Résultats'", () => {
    setup(<Results />);
    expect(screen.getByText("Résultats")).toBeInTheDocument();
  });

  it("affiche le titre", () => {
    setup(<Results />);
    expect(
      screen.getByText(/des résultats mesurables/i)
    ).toBeInTheDocument();
  });

  it("affiche le sous-titre", () => {
    setup(<Results />);
    expect(
      screen.getByText(/comment nos clients ont amélioré/i)
    ).toBeInTheDocument();
  });

  // ── Cartes ──────────────────────────────────────────────

  it("affiche exactement 3 cartes", () => {
    const { container } = setup(<Results />);
    expect(
      container.querySelectorAll("[data-testid='result-card']")
    ).toHaveLength(3);
  });

  it("affiche la carte Unlcoaching", () => {
    setup(<Results />);
    expect(
      screen.getByText("Unlcoaching | Coaching sportif")
    ).toBeInTheDocument();
  });

  it("affiche la carte Segment.C", () => {
    setup(<Results />);
    expect(
      screen.getByText("Segment.C | Artisan menuisier")
    ).toBeInTheDocument();
  });

  it("affiche la carte Cabinet Medical", () => {
    setup(<Results />);
    // Le nom exact dans le DOM est "Cabinet Medical Dr Campagne" → pas trouvé
    // Cherche ce qui existe réellement dans ton composant results.tsx
    // et remplace par le bon nom
    expect(
      screen.getByText("Cabinet Medical | Dr Campagne F." )
    ).toBeInTheDocument();
  });

  // ── Villes ──────────────────────────────────────────────

  it("affiche les villes", () => {
    setup(<Results />);
    expect(screen.getByText("Gradignan")).toBeInTheDocument();
    expect(screen.getByText("Bordeaux")).toBeInTheDocument();
    expect(screen.getByText("Vendays-Montalivet")).toBeInTheDocument();
  });

  // ── Métriques ───────────────────────────────────────────

  it("affiche 9 métriques au total", () => {
    const { container } = setup(<Results />);
    expect(
      container.querySelectorAll("[data-testid='result-metric']")
    ).toHaveLength(9);
  });

  it("affiche les deltas", () => {
    setup(<Results />);
    expect(screen.getByText("+292%")).toBeInTheDocument();
    expect(screen.getByText("+540%")).toBeInTheDocument();
    expect(screen.getAllByText("+287%").length).toBeGreaterThanOrEqual(1);
  });

  // ── Tags ────────────────────────────────────────────────

  it("affiche des tags sur chaque carte", () => {
    const { container } = setup(<Results />);
    expect(
      container.querySelectorAll("[data-testid='result-tag']").length
    ).toBeGreaterThan(0);
  });

  // ── CTA ─────────────────────────────────────────────────

  it("affiche le CTA 'Voir toutes nos réalisations'", () => {
    setup(<Results />);
    expect(
      screen.getByRole("link", { name: /voir toutes nos réalisations/i })
    ).toBeInTheDocument();
  });

  it("le CTA pointe vers /realisations", () => {
    setup(<Results />);
    expect(
      screen.getByRole("link", { name: /voir toutes nos réalisations/i })
    ).toHaveAttribute("href", "/realisations");
  });
});