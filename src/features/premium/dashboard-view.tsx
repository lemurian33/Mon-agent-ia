"use client";

import { cn } from "@/lib/utils";

// ── Types ─────────────────────────────────────────────────────────

type Status = "Chaud" | "Tiède" | "Froid";
type PipelineKey = "nouveau" | "negociation" | "signe";

// ── Data ──────────────────────────────────────────────────────────

const LEADS = [
  { initials: "TG", name: "TechGroup SAS",      meta: "SaaS B2B — Paris",          status: "Chaud" as Status },
  { initials: "IF", name: "IndusFrance",         meta: "Industrie — Lyon",           status: "Tiède" as Status },
  { initials: "AC", name: "Altacom Conseil",     meta: "Conseil — Bordeaux",         status: "Chaud" as Status },
  { initials: "NX", name: "Nexora Group",        meta: "Finance — Toulouse",         status: "Tiède" as Status },
  { initials: "DS", name: "DataSphere SARL",     meta: "Data & IA — Nantes",         status: "Froid" as Status },
];

const PIPELINE: Record<PipelineKey, { name: string; type: string; val: string }[]> = {
  nouveau: [
    { name: "TechGroup SAS",   type: "SaaS B2B — Paris",      val: "~42 000 €" },
    { name: "IndusFrance",     type: "Industrie — Lyon",       val: "~67 000 €" },
    { name: "Meridian Corp",   type: "Logistique — Marseille", val: "~28 500 €" },
  ],
  negociation: [
    { name: "Altacom Conseil", type: "Conseil — Bordeaux",     val: "~38 000 €" },
    { name: "Nexora Group",    type: "Finance — Toulouse",     val: "~91 000 €" },
  ],
  signe: [
    { name: "Vertex Industries", type: "Industrie",            val: "54 000 € ✓" },
    { name: "BluePeak SAS",      type: "SaaS B2B",             val: "83 200 € ✓" },
  ],
};

const STATUS_STYLES: Record<Status, { bg: string; text: string }> = {
  Chaud: { bg: "#EAF3DE", text: "#27500A" },
  Tiède: { bg: "#FAEEDA", text: "#633806" },
  Froid: { bg: "#FCEBEB", text: "#791F1F" },
};

const ORANGE = "#e8680a";

// ── Component ─────────────────────────────────────────────────────

export function Dashboard() {
  return (
    <div className="flex flex-col gap-3 mx-auto max-w-6xl">

      {/* Badge + titre + sous-titre */}
      <div className="mx-auto max-w-2xl text-center mb-8">
        <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold tracking-widest text-orange-700 uppercase dark:border-orange-800/60 dark:bg-orange-950/60 dark:text-orange-300">
          Dashboard temps réel
        </span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
          Tout votre pipeline.{" "}
          <span className="text-orange-500">Un seul endroit.</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground text-pretty">
          Prospects qualifiés, taux de conversion, contrats en cours, CA pipeline —
          pilotez votre activité avec des données fraîches, pas des intuitions.
        </p>
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
                E
              </div>
              <span className="text-[13px] font-medium text-foreground">Enterprise Hub</span>
            </div>

            <p className="px-3 pt-1 pb-0.5 text-[9px] font-medium uppercase tracking-widest text-muted-foreground/60">
              Principal
            </p>
            <SidebarItem icon={<GridIcon />}  label="Vue d'ensemble" />
            <SidebarItem icon={<UsersIcon />} label="Acquisition leads" active badge="12" badgeVariant="green" />
            <SidebarItem icon={<PipeIcon />}  label="Pipeline commercial" badge="31" badgeVariant="amber" />
            <SidebarItem icon={<MailIcon />}  label="Campagnes email" />

            <p className="px-3 pt-3 pb-0.5 text-[9px] font-medium uppercase tracking-widest text-muted-foreground/60">
              Départements
            </p>
            <SidebarItem icon={<ChartIcon />} label="Finance IA" />
            <SidebarItem icon={<HrIcon />}    label="RH IA" />
            <SidebarItem icon={<BriefIcon />} label="Commercial IA" />
            <SidebarItem icon={<CogIcon />}   label="Opérations IA" />

            {/* Agent */}
            <div className="mt-auto mx-3 mb-1 flex items-center gap-2 rounded-md border border-border p-2">
              <div
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-medium text-white"
                style={{ background: ORANGE }}
              >
                At
              </div>
              <div>
                <p className="text-[11px] font-medium text-foreground">Atlas</p>
                <p className="text-[10px] text-muted-foreground">Agent Entreprise IA</p>
              </div>
            </div>
          </div>

          {/* Main */}
          <div className="flex flex-1 flex-col gap-3 overflow-auto p-5">

            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-[15px] font-medium text-foreground">
                  Acquisition de leads — B2B & Grands comptes
                </h2>
                <p className="text-[12px] text-muted-foreground mt-0.5">
                  Identifiez, qualifiez et engagez vos prospects automatiquement, à grande échelle.
                </p>
              </div>
              <button
                type="button"
                className="shrink-0 rounded-md px-3 py-1.5 text-[12px] font-medium text-white"
                style={{ background: ORANGE }}
              >
                + Nouvelle campagne
              </button>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-4 gap-2.5">
              {[
                { label: "Prospects qualifiés", val: "124",   sub: "+18 ce mois",      up: true  },
                { label: "Taux de conversion",  val: "34%",   sub: "+6 pts",           up: true  },
                { label: "Contrats en cours",   val: "31",    sub: "valeur : 12",      up: false },
                { label: "CA pipeline",         val: "380k€", sub: "actif",            up: true  },
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
                <p className="mb-2 text-[12px] font-medium text-foreground">Derniers prospects qualifiés</p>
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
                <p className="mb-2 text-[12px] font-medium text-foreground">Par département</p>
                {[
                  { label: "Commercial IA",  val: 42, pct: 65 },
                  { label: "Finance IA",     val: 31, pct: 48 },
                  { label: "Opérations IA",  val: 27, pct: 38 },
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
                        {s === "Chaud" ? 48 : s === "Tiède" ? 41 : 35}
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
                {([
                  { key: "nouveau"      as PipelineKey, label: "Nouveau prospect", count: 3 },
                  { key: "negociation"  as PipelineKey, label: "En négociation",   count: 2 },
                  { key: "signe"        as PipelineKey, label: "Signé",            count: 2 },
                ]).map(({ key, label, count }) => (
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
  icon, label, active, badge, badgeVariant,
}: {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: string;
  badgeVariant?: "green" | "amber";
}) {
  const badgeStyle =
    badgeVariant === "green" ? { background: "#EAF3DE", color: "#27500A" } :
    badgeVariant === "amber" ? { background: "#FAEEDA", color: "#633806" } : {};

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
      <path d="M2 6l8 5.5L18 6M2 6h16v11H2z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function GridIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
      <rect x="2"  y="2"  width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3"/>
      <rect x="12" y="2"  width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3"/>
      <rect x="2"  y="12" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3"/>
      <rect x="12" y="12" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
      <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M2 18c0-3.3 2.7-5 6-5s6 1.7 6 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M13 4a3 3 0 010 6M16 13c1.5.5 2 1.5 2 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}
function PipeIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
      <circle cx="4"  cy="10" r="2" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="16" cy="10" r="2" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M6 10h2M12 10h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}
function ChartIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
      <path d="M2 14l4-4 4 2 4-6 4 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 18h16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}
function HrIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M3 18c0-4 3-6 7-6s7 2 7 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}
function BriefIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="7" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M7 7V5a1 1 0 011-1h4a1 1 0 011 1v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M2 11h16" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  );
}
function CogIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.2 4.2l1.4 1.4M14.4 14.4l1.4 1.4M4.2 15.8l1.4-1.4M14.4 5.6l1.4-1.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}