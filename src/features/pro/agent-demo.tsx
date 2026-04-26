"use client";

import { useState } from "react";

type Status = "Chaud" | "Tiède" | "Froid";

type Lead = {
  initials: string;
  name: string;
  meta: string;
  status: Status;
};

type PipelineKey = "nouveau" | "devis" | "signe";

type PipelineCard = {
  name: string;
  type: string;
  val: string;
};

const LEADS: Lead[] = [
  {
    initials: "FD",
    name: "Famille Dubois",
    meta: "Menuiserie — Bordeaux (33)",
    status: "Chaud",
  },
  {
    initials: "PM",
    name: "Pierre Martin",
    meta: "Photovoltaïque — Mérignac",
    status: "Tiède",
  },
  {
    initials: "SC",
    name: "SCI Chalons",
    meta: "Pompe à chaleur — Pessac",
    status: "Chaud",
  },
  {
    initials: "LR",
    name: "Lucas Renard",
    meta: "Menuiserie — Libourne",
    status: "Tiède",
  },
  {
    initials: "NB",
    name: "N. Bernard",
    meta: "Photovoltaïque — Arcachon",
    status: "Froid",
  },
];

const PIPELINE: Record<PipelineKey, PipelineCard[]> = {
  nouveau: [
    {
      name: "Famille Moreau",
      type: "Menuiserie — Talence",
      val: "~4 200 €",
    },
    {
      name: "J. Lefevre",
      type: "PAC — Bègles",
      val: "~9 800 €",
    },
    {
      name: "SARL Rénov 33",
      type: "Photovoltaïque",
      val: "~14 500 €",
    },
  ],
  devis: [
    {
      name: "Pierre Martin",
      type: "Photovoltaïque",
      val: "~7 200 €",
    },
    {
      name: "SCI Chalons",
      type: "PAC — Pessac",
      val: "~11 000 €",
    },
  ],
  signe: [
    {
      name: "Famille Dubois",
      type: "Menuiserie",
      val: "6 400 € ✓",
    },
    {
      name: "M. Gauthier",
      type: "Photovoltaïque",
      val: "12 800 € ✓",
    },
  ],
};

const STATUS_STYLES: Record<Status, { bg: string; text: string }> = {
  Chaud: {
    bg: "#EAF3DE",
    text: "#27500A",
  },
  Tiède: {
    bg: "#FAEEDA",
    text: "#633806",
  },
  Froid: {
    bg: "#FCEBEB",
    text: "#791F1F",
  },
};

export function AgentDemo() {
  const [view, setView] = useState<"mobile" | "dashboard">("dashboard");

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-4 p-4">
      {/* TOGGLE */}
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setView("mobile")}
          className={`rounded-md border px-4 py-2 text-sm transition ${
            view === "mobile"
              ? "bg-muted font-medium"
              : "bg-background text-muted-foreground"
          }`}
        >
          Vue mobile
        </button>

        <button
          type="button"
          onClick={() => setView("dashboard")}
          className={`rounded-md border px-4 py-2 text-sm transition ${
            view === "dashboard"
              ? "bg-muted font-medium"
              : "bg-background text-muted-foreground"
          }`}
        >
          Dashboard Leads
        </button>
      </div>

      {/* MOBILE PLACEHOLDER */}
      {view === "mobile" && (
        <div className="rounded-lg border p-10 text-center">
          <p className="text-sm text-muted-foreground">
            Vue mobile masquée — dashboard uniquement.
          </p>
        </div>
      )}

      {/* DASHBOARD */}
      {view === "dashboard" && (
        <div className="overflow-hidden rounded-lg border bg-background">
          <div className="flex min-h-[700px]">
            {/* SIDEBAR */}
            <aside className="w-[230px] shrink-0 border-r p-4">
              <div className="mb-6 flex items-center gap-2 border-b pb-4">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-md font-bold text-white"
                  style={{ background: "#e8680a" }}
                >
                  A
                </div>
                <span className="text-sm font-medium">Artisan Pro</span>
              </div>

              <p className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">
                Principal
              </p>

              <SidebarItem label="Vue d’ensemble" />
              <SidebarItem
                label="Acquisition leads"
                active
                badge="24"
                badgeVariant="green"
              />
              <SidebarItem
                label="Chantiers actifs"
                badge="5"
                badgeVariant="amber"
              />
              <SidebarItem label="Campagnes email" />

              <p className="mb-2 mt-6 text-xs uppercase tracking-wider text-muted-foreground">
                Métiers
              </p>

              <SidebarItem label="Menuiserie" />
              <SidebarItem label="Photovoltaïque" />
              <SidebarItem label="Pompe à chaleur" />
            </aside>

            {/* MAIN */}
            <main className="flex-1 p-6">
              {/* HEADER */}
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <h1 className="text-lg font-semibold">
                    Acquisition de leads — BTP & Artisans
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Trouvez, qualifiez et contactez vos prospects automatiquement.
                  </p>
                </div>

                <button
                  type="button"
                  className="rounded-md px-4 py-2 text-sm font-medium text-white"
                  style={{ background: "#e8680a" }}
                >
                  + Nouvelle recherche
                </button>
              </div>

              {/* KPI */}
              <div className="mb-5 grid grid-cols-4 gap-3">
                {[
                  {
                    label: "Leads ce mois",
                    val: "47",
                    sub: "+12 vs mois dernier",
                  },
                  {
                    label: "Taux de contact",
                    val: "68%",
                    sub: "+4 pts",
                  },
                  {
                    label: "Devis envoyés",
                    val: "19",
                    sub: "en attente : 7",
                  },
                  {
                    label: "CA potentiel",
                    val: "84k€",
                    sub: "pipeline actif",
                  },
                ].map((item) => (
                  <div key={item.label} className="rounded-md bg-muted/40 p-4">
                    <p className="text-xs text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-1 text-2xl font-semibold">{item.val}</p>
                    <p className="text-xs text-muted-foreground">{item.sub}</p>
                  </div>
                ))}
              </div>

              {/* LEADS */}
              <div className="mb-5 rounded-lg border p-4">
                <h2 className="mb-3 text-sm font-medium">
                  Derniers leads qualifiés
                </h2>

                {LEADS.map((lead) => (
                  <div
                    key={lead.name}
                    className="flex items-center gap-3 border-b py-3 last:border-0"
                  >
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium"
                      style={{
                        background: STATUS_STYLES[lead.status].bg,
                        color: STATUS_STYLES[lead.status].text,
                      }}
                    >
                      {lead.initials}
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-medium">{lead.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {lead.meta}
                      </p>
                    </div>

                    <span
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={{
                        background: STATUS_STYLES[lead.status].bg,
                        color: STATUS_STYLES[lead.status].text,
                      }}
                    >
                      {lead.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* PIPELINE */}
              <div className="rounded-lg border p-4">
                <h2 className="mb-3 text-sm font-medium">
                  Pipeline de conversion
                </h2>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    {
                      key: "nouveau" as PipelineKey,
                      label: "Nouveau lead",
                      count: 3,
                    },
                    {
                      key: "devis" as PipelineKey,
                      label: "Devis envoyé",
                      count: 2,
                    },
                    {
                      key: "signe" as PipelineKey,
                      label: "Signé",
                      count: 2,
                    },
                  ].map((column) => (
                    <div
                      key={column.key}
                      className="rounded-md bg-muted/30 p-3"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-sm font-medium">
                          {column.label}
                        </span>

                        <span className="rounded-full border px-2 py-1 text-xs">
                          {column.count}
                        </span>
                      </div>

                      {PIPELINE[column.key].map((card) => (
                        <div
                          key={card.name}
                          className="mb-2 rounded-md border bg-background p-3 last:mb-0"
                        >
                          <p className="text-sm font-medium">{card.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {card.type}
                          </p>
                          <p className="mt-1 text-sm font-medium">
                            {card.val}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      )}
    </div>
  );
}

function SidebarItem({
  label,
  active,
  badge,
  badgeVariant,
}: {
  label: string;
  active?: boolean;
  badge?: string;
  badgeVariant?: "green" | "amber";
}) {
  const badgeStyle =
    badgeVariant === "green"
      ? {
          background: "#EAF3DE",
          color: "#27500A",
        }
      : badgeVariant === "amber"
      ? {
          background: "#FAEEDA",
          color: "#633806",
        }
      : {};

  return (
    <div
      className={`mb-1 flex cursor-pointer items-center rounded-md px-3 py-2 text-sm transition ${
        active
          ? "bg-muted font-medium"
          : "text-muted-foreground hover:bg-muted/50"
      }`}
      style={active ? { borderLeft: "2px solid #e8680a" } : {}}
    >
      <span className="flex-1">{label}</span>

      {badge && (
        <span
          className="rounded-full px-2 py-1 text-xs font-medium"
          style={badgeStyle}
        >
          {badge}
        </span>
      )}
    </div>
  );
}