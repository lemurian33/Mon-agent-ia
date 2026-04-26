"use client";

import { cn } from "@/lib/utils";

// ── Types ─────────────────────────────────────────────────────────

type Status = "Chaud" | "Tiède" | "Froid";
type PipelineKey = "nouveau" | "devis" | "signe";

// ── Data ──────────────────────────────────────────────────────────

const LEADS = [
  { initials: "FD", name: "Famille Dubois",  meta: "Menuiserie — Bordeaux (33)",  status: "Chaud" as Status },
  { initials: "PM", name: "Pierre Martin",   meta: "Photovoltaïque — Mérignac",   status: "Tiède" as Status },
  { initials: "SC", name: "SCI Chalons",     meta: "Pompe à chaleur — Pessac",    status: "Chaud" as Status },
  { initials: "LR", name: "Lucas Renard",    meta: "Menuiserie — Libourne",       status: "Tiède" as Status },
  { initials: "NB", name: "N. Bernard",      meta: "Photovoltaïque — Arcachon",   status: "Froid" as Status },
];

const PIPELINE: Record<PipelineKey, { name: string; type: string; val: string }[]> = {
  nouveau: [
    { name: "Famille Moreau", type: "Menuiserie — Talence", val: "~4 200 €" },
    { name: "J. Lefevre",     type: "PAC — Bègles",         val: "~9 800 €" },
    { name: "SARL Rénov 33",  type: "Photovoltaïque",       val: "~14 500 €" },
  ],
  devis: [
    { name: "Pierre Martin", type: "Photovoltaïque", val: "~7 200 €" },
    { name: "SCI Chalons",   type: "PAC — Pessac",   val: "~11 000 €" },
  ],
  signe: [
    { name: "Famille Dubois", type: "Menuiserie",    val: "6 400 € ✓" },
    { name: "M. Gauthier",    type: "Photovoltaïque", val: "12 800 € ✓" },
  ],
};

const STATUS_STYLES: Record<Status, { bg: string; text: string }> = {
  Chaud: { bg: "#EAF3DE", text: "#27500A" },
  Tiède: { bg: "#FAEEDA", text: "#633806" },
  Froid: { bg: "#FCEBEB", text: "#791F1F" },
};

const ORANGE = "#e8680a";

// ── Component ─────────────────────────────────────────────────────

export function DashboardView({ onBack }: { onBack?: () => void }) {
  return (
    <div className="flex flex-col gap-3 mx-auto max-w-6xl">

      {/* Toggle */}
      <div className="flex gap-2">
				{onBack && (
					<button
							type="button"
							onClick={onBack}
							className="rounded-md border border-border bg-background px-3 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-muted/50"
					>
						Vue mobile
					</button>
					)}
          Dashboard Leads
        </button>
      </div>

      {/* Dashboard */}
      <div className="overflow-hidden rounded-md border border-border bg-background" style={{ minHeight: 580 }}>
        <div className="flex" style={{ minHeight: 580 }}>

          {/* Sidebar */}
          <div className="flex w-[210px] shrink-0 flex-col border-r border-border py-3">

            {/* Logo */}
            <div className="flex items-center gap-2 border-b border-border px-3 pb-3 mb-2">
              <div
                className="flex h-6 w-6 items-center justify-center rounded-md text-[13px] font-bold text-white"
                style={{ background: ORANGE }}
              >
                A
              </div>
              <span className="text-[13px] font-medium text-foreground">Artisan Pro</span>
            </div>

            <p className="px-3 pt-1 pb-0.5 text-[9px] font-medium uppercase tracking-widest text-muted-foreground/60">
              Principal
            </p>
            <SidebarItem icon={<GridIcon />} label="Vue d'ensemble" />
            <SidebarItem icon={<UsersIcon />} label="Acquisition leads" active badge="24" badgeVariant="green" />
            <SidebarItem icon={<HouseIcon />} label="Chantiers actifs" badge="5" badgeVariant="amber" />
            <SidebarItem icon={<MailIcon />}  label="Campagnes email" />

            <p className="px-3 pt-3 pb-0.5 text-[9px] font-medium uppercase tracking-widest text-muted-foreground/60">
              Métiers
            </p>
            <SidebarItem icon={<WindowIcon />} label="Menuiserie" />
            <SidebarItem icon={<SunIcon />}    label="Photovoltaïque" />
            <SidebarItem icon={<ThermIcon />}  label="Pompe à chaleur" />

            {/* Agent */}
            <div className="mt-auto mx-3 mb-1 flex items-center gap-2 rounded-md border border-border p-2">
              <div
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-medium text-white"
                style={{ background: ORANGE }}
              >
                M
              </div>
              <div>
                <p className="text-[11px] font-medium text-foreground">Marco</p>
                <p className="text-[10px] text-muted-foreground">Agent commercial IA</p>
              </div>
            </div>
          </div>

          {/* Main */}
          <div className="flex flex-1 flex-col gap-3 overflow-auto p-5">

            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-[15px] font-medium text-foreground">
                  Acquisition de leads — BTP & Artisans
                </h2>
                <p className="text-[12px] text-muted-foreground mt-0.5">
                  Trouvez, qualifiez et contactez vos prospects automatiquement, sans effort.
                </p>
              </div>
              <button
                type="button"
                className="shrink-0 rounded-md px-3 py-1.5 text-[12px] font-medium text-white"
                style={{ background: ORANGE }}
              >
                + Nouvelle recherche
              </button>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-4 gap-2.5">
              {[
                { label: "Leads ce mois",   val: "47",   sub: "+12 vs mois dernier", up: true },
                { label: "Taux de contact", val: "68%",  sub: "+4 pts",              up: true },
                { label: "Devis envoyés",   val: "19",   sub: "en attente : 7",      up: false },
                { label: "CA potentiel",    val: "84k€", sub: "pipeline actif",      up: true },
              ].map((k) => (
                <div key={k.label} className="rounded-md bg-muted/50 p-3">
                  <p className="text-[11px] text-muted-foreground">{k.label}</p>
                  <p className="mt-1 text-[20px] font-medium text-foreground">{k.val}</p>
                  <p className={cn("mt-0.5 text-[10px]", k.up ? "text-green-700" : "text-muted-foreground")}>
                    {k.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Mid row */}
            <div className="grid gap-3" style={{ gridTemplateColumns: "1fr 200px" }}>

              {/* Leads list */}
              <div className="rounded-lg border border-border bg-background p-3">
                <p className="mb-2 text-[12px] font-medium text-foreground">Derniers leads qualifiés</p>
                {LEADS.map((l) => (
                  <div key={l.name} className="flex items-center gap-2.5 border-b border-border py-2 last:border-b-0">
                    <div
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-medium"
                      style={{ background: STATUS_STYLES[l.status].bg, color: STATUS_STYLES[l.status].text }}
                    >
                      {l.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[12px] font-medium text-foreground">{l.name}</p>
                      <p className="text-[10px] text-muted-foreground">{l.meta}</p>
                    </div>
                    <span
                      className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium"
                      style={{ background: STATUS_STYLES[l.status].bg, color: STATUS_STYLES[l.status].text }}
                    >
                      {l.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Répartition */}
              <div className="rounded-lg border border-border bg-background p-3">
                <p className="mb-2 text-[12px] font-medium text-foreground">Par métier</p>
                {[
                  { label: "Menuiserie",      val: 18, pct: 55 },
                  { label: "Photovoltaïque",  val: 17, pct: 51 },
                  { label: "Pompe à chaleur", val: 12, pct: 36 },
                ].map((m, idx) => (
                  <div key={m.label} className="mb-2.5">
                    <div className="mb-1 flex justify-between text-[11px]">
                      <span className="text-muted-foreground">{m.label}</span>
                      <span className="font-medium text-foreground">{m.val}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${m.pct}%`, background: ORANGE, opacity: 1 - idx * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
                <div className="mt-3 border-t border-border pt-2">
                  <p className="mb-1.5 text-[11px] font-medium text-foreground">Statuts</p>
                  {(["Chaud", "Tiède", "Froid"] as Status[]).map((s) => (
                    <div key={s} className="flex items-center gap-1.5 py-0.5 text-[11px]">
                      <div className="h-1.5 w-1.5 rounded-full" style={{ background: STATUS_STYLES[s].text }} />
                      <span className="flex-1 text-muted-foreground">{s}</span>
                      <span className="font-medium text-foreground">
                        {s === "Chaud" ? 19 : s === "Tiède" ? 17 : 11}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pipeline */}
            <div className="rounded-lg border border-border bg-background p-3">
              <p className="mb-2 text-[12px] font-medium text-foreground">Pipeline de conversion</p>
              <div className="grid grid-cols-3 gap-2">
                {(
                  [
                    { key: "nouveau" as PipelineKey, label: "Nouveau lead", count: 3 },
                    { key: "devis"   as PipelineKey, label: "Devis envoyé", count: 2 },
                    { key: "signe"   as PipelineKey, label: "Signé",        count: 2 },
                  ]
                ).map(({ key, label, count }) => (
                  <div key={key} className="rounded-md bg-muted/40 p-2.5">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[11px] font-medium text-muted-foreground">{label}</span>
                      <span className="rounded-full border border-border px-1.5 py-0.5 text-[9px] font-medium text-muted-foreground">
                        {count}
                      </span>
                    </div>
                    {PIPELINE[key].map((card) => (
                      <div
                        key={card.name}
                        className="mb-1.5 last:mb-0 rounded-md border border-border bg-background p-2"
                      >
                        <p className="text-[11px] font-medium text-foreground">{card.name}</p>
                        <p className="text-[10px] text-muted-foreground">{card.type}</p>
                        <p className="mt-0.5 text-[11px] font-medium text-foreground">{card.val}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// ── Sidebar item ──────────────────────────────────────────────────

function SidebarItem({
  icon,
  label,
  active,
  badge,
  badgeVariant,
}: {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: string;
  badgeVariant?: "green" | "amber";
}) {
  const badgeStyle =
    badgeVariant === "green" ? { background: "#EAF3DE", color: "#27500A" } :
    badgeVariant === "amber" ? { background: "#FAEEDA", color: "#633806" } :
    {};

  return (
    <div
      className={cn(
        "flex cursor-pointer items-center gap-2 px-3 py-1.5 text-[12px] transition-colors hover:bg-muted/50",
        active ? "bg-muted/60 font-medium text-foreground" : "text-muted-foreground"
      )}
      style={active ? { borderLeft: `2px solid ${ORANGE}` } : {}}
    >
      {icon && <span className="h-3.5 w-3.5 shrink-0">{icon}</span>}
      <span className="flex-1">{label}</span>
      {badge && (
        <span className="rounded-full px-1.5 py-0.5 text-[10px] font-medium" style={badgeStyle}>
          {badge}
        </span>
      )}
    </div>
  );
}

// ── Icons ─────────────────────────────────────────────────────────

function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
      <path d="M2 6l8 5.5L18 6M2 6h16v11H2z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
      <rect x="2"  y="2"  width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="12" y="2"  width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="2"  y="12" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="12" y="12" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
      <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 18c0-3.3 2.7-5 6-5s6 1.7 6 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M13 4a3 3 0 010 6M16 13c1.5.5 2 1.5 2 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function HouseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
      <path d="M10 2L2 7v11h5v-5h6v5h5V7z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WindowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="4" width="16" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 8h16" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 4v4M10 4v4" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.2 4.2l1.4 1.4M14.4 14.4l1.4 1.4M4.2 15.8l1.4-1.4M14.4 5.6l1.4-1.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ThermIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10 3v3M10 14v3M3 10h3M14 10h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}