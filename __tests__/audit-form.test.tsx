import { AuditForm } from "@/features/landing/audit/audit-form";
import { setup } from "@test/utils";
import { screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("@/features/landing/audit-form.action", () => ({
  submitAuditFormAction: vi.fn().mockResolvedValue({ success: true }),
}));

describe("AuditForm", () => {

  // ── Rendu initial ────────────────────────────────────────

  it("affiche le badge 'Commencer maintenant'", () => {
    setup(<AuditForm />);
    expect(
      screen.getByText(/commencer maintenant/i)
    ).toBeInTheDocument();
  });

  it("affiche le titre", () => {
    setup(<AuditForm />);
    expect(
      screen.getByText(/réservez votre appel stratégique/i)
    ).toBeInTheDocument();
  });

  it("affiche l'étape 1 au départ", () => {
    setup(<AuditForm />);
    expect(screen.getByTestId("step-1")).toBeInTheDocument();
  });

  it("affiche les 3 indicateurs d'étapes", () => {
    setup(<AuditForm />);
    expect(screen.getByTestId("step-indicator-1")).toBeInTheDocument();
    expect(screen.getByTestId("step-indicator-2")).toBeInTheDocument();
    expect(screen.getByTestId("step-indicator-3")).toBeInTheDocument();
  });

  // ── Étape 1 — champs ────────────────────────────────────

  it("affiche les champs Prénom, Nom, Téléphone, Email", () => {
    setup(<AuditForm />);
    expect(screen.getByPlaceholderText("Votre prénom")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Votre nom")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("+33 6 12 34 56 78")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("votre@email.fr")).toBeInTheDocument();
  });

  it("affiche le bouton 'Continuer'", () => {
    setup(<AuditForm />);
    expect(screen.getByTestId("next-btn")).toBeInTheDocument();
  });

  // ── Validation ──────────────────────────────────────────

  it("affiche des erreurs si on clique Continuer sans remplir", async () => {
    const { user } = setup(<AuditForm />);
    await user.click(screen.getByTestId("next-btn"));
    await waitFor(() => {
      expect(
        screen.getAllByTestId("field-error").length
      ).toBeGreaterThan(0);
    });
  });

  // ── Navigation étape 1 → 2 ──────────────────────────────

  it("passe à l'étape 2 après avoir rempli l'étape 1", async () => {
    const { user } = setup(<AuditForm />);

    await user.type(screen.getByPlaceholderText("Votre prénom"), "Andy");
    await user.type(screen.getByPlaceholderText("Votre nom"), "Ramaroson");
    await user.type(screen.getByPlaceholderText("+33 6 12 34 56 78"), "0612345678");
    await user.type(screen.getByPlaceholderText("votre@email.fr"), "andy@lemurian.fr");

    await user.click(screen.getByTestId("next-btn"));

    await waitFor(() => {
      expect(screen.getByTestId("step-2")).toBeInTheDocument();
    });
  });

  // ── Navigation retour ───────────────────────────────────

  it("revient à l'étape 1 avec le bouton Retour", async () => {
    const { user } = setup(<AuditForm />);

    await user.type(screen.getByPlaceholderText("Votre prénom"), "Andy");
    await user.type(screen.getByPlaceholderText("Votre nom"), "Ramaroson");
    await user.type(screen.getByPlaceholderText("+33 6 12 34 56 78"), "0612345678");
    await user.type(screen.getByPlaceholderText("votre@email.fr"), "andy@lemurian.fr");
    await user.click(screen.getByTestId("next-btn"));

    await waitFor(() => screen.getByTestId("step-2"));
    await user.click(screen.getByTestId("back-btn"));

    await waitFor(() => {
      expect(screen.getByTestId("step-1")).toBeInTheDocument();
    });
  });

  // ── Étape 2 → 3 ─────────────────────────────────────────

  it("passe à l'étape 3 après avoir rempli l'étape 2", async () => {
    const { user } = setup(<AuditForm />);

    // Étape 1
    await user.type(screen.getByPlaceholderText("Votre prénom"), "Andy");
    await user.type(screen.getByPlaceholderText("Votre nom"), "Ramaroson");
    await user.type(screen.getByPlaceholderText("+33 6 12 34 56 78"), "0612345678");
    await user.type(screen.getByPlaceholderText("votre@email.fr"), "andy@lemurian.fr");
    await user.click(screen.getByTestId("next-btn"));

    // Étape 2
    await waitFor(() => screen.getByTestId("step-2"));
    await user.type(
      screen.getByPlaceholderText(/plombier/i),
      "Consultant SEO"
    );
    await user.type(screen.getByPlaceholderText("Votre ville"), "Bordeaux");
    await user.click(screen.getByTestId("next-btn"));

    await waitFor(() => {
      expect(screen.getByTestId("step-3")).toBeInTheDocument();
    });
  });
});