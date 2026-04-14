import { Footer } from "@/features/layout/footer";
import { setup } from "@test/utils";
import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("@/features/landing/footer-scroll-top", () => ({
  ScrollTopButton: () => <button>Retour en haut</button>,
}));

vi.mock("next/image", () => ({
  default: ({ alt, ...props }: { alt: string }) => <img alt={alt} {...props} />,
}));

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

describe("Footer", () => {

  // ── Brand ──────────────────────────────────────────────

  it("affiche le logo", () => {
    setup(<Footer />);
    expect(screen.getByAltText("lemurian app logo")).toBeInTheDocument();
  });

  it("affiche le nom de marque", () => {
    setup(<Footer />);
    expect(screen.getByText("Lemurian Agency")).toBeInTheDocument();
  });

  it("le logo pointe vers /", () => {
    setup(<Footer />);
    expect(screen.getByRole("link", { name: /lemurian agency/i }))
      .toHaveAttribute("href", "/");
  });

  // ── Contact ─────────────────────────────────────────────

  it("affiche Bordeaux", () => {
    setup(<Footer />);
    expect(screen.getByText("Bordeaux, Gironde")).toBeInTheDocument();
  });

  it("affiche l'email", () => {
    setup(<Footer />);
    expect(screen.getByText("lemurian734@gmail.com")).toBeInTheDocument();
  });

  it("affiche le téléphone", () => {
    setup(<Footer />);
    expect(screen.getByText("06 30 83 28 75")).toBeInTheDocument();
  });

  // ── Colonnes nav ────────────────────────────────────────

  it("affiche le titre 'Navigation'", () => {
    setup(<Footer />);
    expect(screen.getByText("Navigation")).toBeInTheDocument();
  });

  it("affiche le titre 'Services'", () => {
    setup(<Footer />);
    expect(screen.getByText("Services")).toBeInTheDocument();
  });

  it("affiche le titre 'Informations'", () => {
    setup(<Footer />);
    expect(screen.getByText("Informations")).toBeInTheDocument();
  });

  it("affiche le titre 'Légal'", () => {
    setup(<Footer />);
    expect(screen.getByText("Légal")).toBeInTheDocument();
  });

  // ── Liens nav ───────────────────────────────────────────

  it("affiche le lien Mentions légales", () => {
    setup(<Footer />);
    expect(screen.getByRole("link", { name: "Mentions légales" }))
      .toHaveAttribute("href", "/legal/mentions");
  });

  it("affiche le lien À propos", () => {
    setup(<Footer />);
    expect(screen.getByRole("link", { name: "À propos" }))
      .toHaveAttribute("href", "/about");
  });

  it("affiche le lien Réalisations", () => {
    setup(<Footer />);
    expect(screen.getByRole("link", { name: "Réalisations" }))
      .toHaveAttribute("href", "/realisations");
  });

  it("affiche le lien Audit de visibilité", () => {
    setup(<Footer />);
    expect(screen.getByRole("link", { name: "Audit de visibilité" }))
      .toHaveAttribute("href", "/solutions/audit");
  });

  // ── Bannière ────────────────────────────────────────────

  it("affiche la bannière Zone d'intervention", () => {
    setup(<Footer />);
    expect(screen.getByText(/zone d'intervention/i)).toBeInTheDocument();
  });

  it("affiche Nouvelle-Aquitaine", () => {
    setup(<Footer />);
    expect(screen.getByText("Nouvelle-Aquitaine")).toBeInTheDocument();
  });

  it("la bannière pointe vers /zone-intervention", () => {
    setup(<Footer />);
    expect(
      screen.getByRole("link", { name: /nouvelle-aquitaine/i })
    ).toHaveAttribute("href", "/zone-intervention");
  });
});