// src/features/landing/__tests__/cta-banner.test.tsx
import { CtaBanner } from "@/features/landing/cta-banner";
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

describe("CtaBanner", () => {

  it("affiche le badge 'Prêt à décoller ?'", () => {
    setup(<CtaBanner />);
    expect(screen.getByText(/prêt à décoller/i)).toBeInTheDocument();
  });

  it("affiche le titre principal", () => {
    setup(<CtaBanner />);
    expect(
      screen.getByText(/faites le premier pas vers une/i)
    ).toBeInTheDocument();
  });

  it("affiche 'visibilité qui convertit' en orange", () => {
    setup(<CtaBanner />);
    expect(
      screen.getByText(/visibilité qui convertit/i)
    ).toBeInTheDocument();
  });

  it("affiche le sous-titre", () => {
    setup(<CtaBanner />);
    expect(
      screen.getByText(/appel stratégique gratuit de 30 minutes/i)
    ).toBeInTheDocument();
  });

  it("affiche le CTA", () => {
    setup(<CtaBanner />);
    expect(
      screen.getByRole("link", { name: /réserver un appel stratégique/i })
    ).toBeInTheDocument();
  });

  it("le CTA pointe vers #audit-form", () => {
    setup(<CtaBanner />);
    expect(
      screen.getByRole("link", { name: /réserver un appel stratégique/i })
    ).toHaveAttribute("href", "#audit-form");
  });
});