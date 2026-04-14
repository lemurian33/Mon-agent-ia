import { Partnership } from "@/features/landing/partnership";
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

vi.mock("next/image", () => ({
  default: ({ alt, src, width, height, className }: {
    alt: string;
    src: string;
    width?: number;
    height?: number;
    className?: string;
  }) => <img alt={alt} src={src} width={width} height={height} className={className} />,
}));

describe("Partnership", () => {

  // ── Badge ───────────────────────────────────────────────

  it("affiche le badge 'Partenariat'", () => {
    setup(<Partnership />);
    expect(screen.getByText("Partenariat")).toBeInTheDocument();
  });

  // ── Titre ───────────────────────────────────────────────

  it("affiche le titre", () => {
    setup(<Partnership />);
    expect(
      screen.getByText(/des clients tous les mois/i)
    ).toBeInTheDocument();
  });

  it("affiche 'sans avancer 1€' en orange", () => {
    setup(<Partnership />);
    expect(
      screen.getByText(/sans avancer 1€/i)
    ).toBeInTheDocument();
  });

  // ── Description ─────────────────────────────────────────

  it("affiche la description", () => {
    setup(<Partnership />);
    expect(
      screen.getByText(/partenariats avec les tpe\/pme/i)
    ).toBeInTheDocument();
  });

  // ── Badges icônes ───────────────────────────────────────

  it("affiche 4 badges", () => {
    const { container } = setup(<Partnership />);
    expect(
      container.querySelectorAll("[data-testid='partnership-badge']")
    ).toHaveLength(4);
  });

  it("affiche 'Sans frais initiaux'", () => {
    setup(<Partnership />);
    expect(screen.getByText("Sans frais initiaux")).toBeInTheDocument();
  });

  it("affiche 'Leads qualifiés'", () => {
    setup(<Partnership />);
    expect(screen.getByText("Leads qualifiés")).toBeInTheDocument();
  });

  it("affiche 'Zéro risque'", () => {
    setup(<Partnership />);
    expect(screen.getByText("Zéro risque")).toBeInTheDocument();
  });

  it("affiche 'Transfert direct'", () => {
    setup(<Partnership />);
    expect(screen.getByText("Transfert direct")).toBeInTheDocument();
  });

  // ── CTAs ────────────────────────────────────────────────

  it("affiche le CTA primaire 'Découvrir le partenariat'", () => {
    setup(<Partnership />);
    expect(
      screen.getByRole("link", { name: /découvrir le partenariat/i })
    ).toBeInTheDocument();
  });

  it("le CTA primaire pointe vers /solutions/partenariat", () => {
    setup(<Partnership />);
    expect(
      screen.getByRole("link", { name: /découvrir le partenariat/i })
    ).toHaveAttribute("href", "/solutions/partenariat");
  });

  it("affiche le CTA secondaire 'Prendre rendez-vous'", () => {
    setup(<Partnership />);
    expect(
      screen.getByRole("link", { name: /prendre rendez-vous/i })
    ).toBeInTheDocument();
  });

  it("le CTA secondaire pointe vers #audit-form", () => {
    setup(<Partnership />);
    expect(
      screen.getByRole("link", { name: /prendre rendez-vous/i })
    ).toHaveAttribute("href", "#audit-form");
  });

  // ── Image placeholder ───────────────────────────────────

  it("affiche image", () => {
    const { container } = setup(<Partnership />);
    expect(
      container.querySelector("[data-testid='partnership-image']")
    ).toBeInTheDocument();
  });
});