"use client";

import { useEffect, useState } from "react";

// ── Types ─────────────────────────────────────────────────────────

type Message = {
  id: number;
  from: "user" | "agent";
  text: string;
  time: string;
};

type LogicStep =
  | { type: "thinking"; label: string; cards: { icon: React.ReactNode; label: string; value: string }[] }
  | { type: "action"; app: "leads" | "campaign"; title: string; sub: string };

// ── Data ──────────────────────────────────────────────────────────

const MESSAGES: Message[] = [
  {
    id: 1,
    from: "user",
    text: "Trouve-moi des leads menuiserie dans la Gironde dans un rayon de 30 km",
    time: "9:03",
  },
  {
    id: 2,
    from: "agent",
    text: "J'ai trouvé 8 prospects qualifiés en menuiserie sur la Gironde. Je lance la séquence de contact automatique.",
    time: "9:04",
  },
  {
    id: 3,
    from: "user",
    text: "Tu peux aussi chercher des leads pompe à chaleur et photovoltaïque ?",
    time: "9:06",
  },
  {
    id: 4,
    from: "agent",
    text: "Bien sûr ! 14 leads supplémentaires identifiés — PAC et photovoltaïque. Campagne email lancée, rappels planifiés demain 9h.",
    time: "9:07",
  },
];

const STEPS: LogicStep[] = [
  {
    type: "thinking",
    label: "réflexion agent",
    cards: [
      { icon: <UserIcon />, label: "Demande reçue", value: "Leads menuiserie 33" },
      { icon: <MapPinIcon />, label: "Zone ciblée", value: "Gironde — 30 km" },
    ],
  },
  { type: "action", app: "leads", title: "8 leads qualifiés trouvés", sub: "Menuiserie — Gironde" },
  {
    type: "thinking",
    label: "réflexion agent",
    cards: [
      { icon: <MailIcon />, label: "Action", value: "Séquence email x3" },
      { icon: <CalIcon />, label: "Rappel planifié", value: "Demain 9h — 3 prospects" },
    ],
  },
  { type: "action", app: "campaign", title: "Campagne lancée", sub: "8 contacts — suivi automatique" },
];

// ── Lead data for dashboard ────────────────────────────────────────

const LEADS = [
  { initials: "FD", name: "Famille Dubois", meta: "Menuiserie — Bordeaux (33)", status: "Chaud" as const },
  { initials: "PM", name: "Pierre Martin", meta: "Photovoltaïque — Mérignac", status: "Tiède" as const },
  { initials: "SC", name: "SCI Chalons", meta: "Pompe à chaleur — Pessac", status: "Chaud" as const },
  { initials: "LR", name: "Lucas Renard", meta: "Menuiserie — Libourne", status: "Tiède" as const },
  { initials: "NB", name: "N. Bernard", meta: "Photovoltaïque — Arcachon", status: "Froid" as const },
];

const PIPELINE = {
  nouveau: [
    { name: "Famille Moreau", type: "Menuiserie — Talence", val: "~4 200 €" },
    { name: "J. Lefevre", type: "PAC — Bègles", val: "~9 800 €" },
    { name: "SARL Rénov 33", type: "Photovoltaïque", val: "~14 500 €" },
  ],
  devis: [
    { name: "Pierre Martin", type: "Photovoltaïque", val: "~7 200 €" },
    { name: "SCI Chalons", type: "PAC — Pessac", val: "~11 000 €" },
  ],
  signe: [
    { name: "Famille Dubois", type: "Menuiserie", val: "6 400 € ✓" },
    { name: "M. Gauthier", type: "Photovoltaïque", val: "12 800 € ✓" },
  ],
};

type Status = "Chaud" | "Tiède" | "Froid";
const STATUS_STYLES: Record<Status, { bg: string; text: string }> = {
  Chaud: { bg: "#EAF3DE", text: "#27500A" },
  Tiède: { bg: "#FAEEDA", text: "#633806" },
  Froid: { bg: "#FCEBEB", text: "#791F1F" },
};

// ── Main component ────────────────────────────────────────────────

export const AgentDemo = () => {
  const [view, setView] = useState<"mobile" | "dashboard">("mobile");
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const delays = [400, 1800, 3200, 4600];
    const stepDelays = [1400, 2800, 4200, 5600];

    const msgTimers = delays.map((delay, i) =>
      setTimeout(() => setVisibleMessages((prev) => [...prev, i]), delay)
    );
    const stepTimers = stepDelays.map((delay, i) =>
      setTimeout(() => setVisibleSteps((prev) => [...prev, i]), delay)
    );

    return () => {
      [...msgTimers, ...stepTimers].forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="flex flex-col gap-3">
      {/* ── Toggle ── */}
      <div className="flex gap-2">
        <button
          onClick={() => setView("mobile")}
          className={`rounded-md border px-3 py-1.5 text-[13px] transition-all ${
            view === "mobile"
              ? "border-border bg-muted font-medium text-foreground"
              : "border-border bg-background text-muted-foreground hover:bg-muted/50"
          }`}
        >
          Vue mobile
        </button>
        <button
          onClick={() => setView("dashboard")}
          className={`rounded-md border px-3 py-1.5 text-[13px] transition-all ${
            view === "dashboard"
              ? "border-border bg-muted font-medium text-foreground"
              : "border-border bg-background text-muted-foreground hover:bg-muted/50"
          }`}
        >
          Dashboard Leads
        </button>
      </div>

      {/* ── Mobile view ── */}
      {view === "mobile" && (
        <div className="flex min-h-[580px] max-w-6xl overflow-hidden rounded-md border border-border bg-muted/20">
          {/* iPhone */}
          <div className="flex w-[320px] shrink-0 items-center justify-center p-5">
            <div className="w-[248px] overflow-hidden rounded-[32px] border-[2.5px] border-zinc-800 bg-zinc-900 shadow-2xl">
              {/* Status bar */}
              <div className="flex items-center justify-between bg-zinc-900 px-3 py-1.5">
                <span className="text-[10px] font-semibold text-white">9:41</span>
                <div className="flex items-center gap-1">
                  <SignalIcon />
                  <BatteryIcon />
                </div>
              </div>

              {/* Contact bar */}
              <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900 px-2 py-1.5">
                <div className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ background: "#e8680a" }}>
                  A
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-white">Artisan Pro</div>
                  <div className="text-[8px] text-green-400">en ligne</div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex min-h-[290px] flex-col gap-2 px-2 py-2.5" style={{ background: "#0f1a10" }}>
                <div className="text-center text-[9px] text-white/30">Aujourd'hui</div>

                {MESSAGES.map((msg, i) => (
                  <div
                    key={msg.id}
                    className={`flex transition-all duration-500 ${
                      msg.from === "user" ? "justify-end" : "justify-start"
                    } ${
                      visibleMessages.includes(i)
                        ? "translate-y-0 opacity-100"
                        : "translate-y-3 opacity-0"
                    }`}
                  >
                    <div
                      className="max-w-[130px] px-2.5 py-1.5 text-[9px] leading-[1.4] text-white"
                      style={{
                        borderRadius: msg.from === "user" ? "10px 10px 3px 10px" : "10px 10px 10px 3px",
                        background: msg.from === "user" ? "#7c3100" : "#2d2d2d",
                      }}
                    >
                      {msg.text}
                      <div className="mt-1 text-right text-[7px] text-white/35">{msg.time}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input bar */}
              <div className="flex items-center gap-1.5 border-t border-zinc-800 bg-zinc-900 px-2 py-1.5">
                <div className="flex-1 rounded-xl bg-zinc-800 px-2.5 py-1 text-[9px] text-zinc-500">
                  Message
                </div>
              </div>

              {/* Home bar */}
              <div className="flex items-center justify-center bg-zinc-900 py-1.5">
                <div className="h-[3px] w-12 rounded-full bg-white/20" />
              </div>
            </div>
          </div>

          {/* Animated flow line */}
          <div className="flex w-9 shrink-0 flex-col items-center py-8">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-1 flex-col items-center">
                <div className="relative w-px flex-1 overflow-hidden bg-border">
                  <div
                    className="absolute left-0 w-full animate-[flowDown_2s_linear_infinite]"
                    style={{
                      height: "60%",
                      background: "linear-gradient(to bottom, transparent, #e8680a 50%, transparent)",
                      animationDelay: `${i * 0.4}s`,
                    }}
                  />
                </div>
                {i < 4 && (
                  <div
                    className="z-10 h-2 w-2 shrink-0 rounded-full border-[1.5px] bg-background"
                    style={{ borderColor: "#e8680a" }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Logic column */}
          <div className="flex flex-1 flex-col justify-center gap-0 py-6 pr-5">
            {STEPS.map((step, i) => (
              <div key={i}>
                <div
                  className={`transition-all duration-500 ${
                    visibleSteps.includes(i)
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                >
                  {step.type === "thinking" ? (
                    <div>
                      <p className="mb-1.5 text-[9px] font-medium uppercase tracking-widest text-muted-foreground/60">
                        {step.label}
                      </p>
                      <div className="overflow-hidden rounded-lg border border-border bg-background">
                        {step.cards.map((card, j) => (
                          <div
                            key={j}
                            className={`flex items-center gap-2.5 px-3 py-2.5 ${
                              j < step.cards.length - 1 ? "border-b border-border" : ""
                            }`}
                          >
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border bg-muted/50">
                              {card.icon}
                            </div>
                            <div>
                              <p className="text-[10px] text-muted-foreground">{card.label}</p>
                              <p className="text-[11px] font-medium text-foreground">{card.value}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 rounded-lg border border-border bg-background px-3 py-2.5">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                        style={{ background: step.app === "leads" ? "#EAF3DE" : "#FAEEDA" }}
                      >
                        {step.app === "leads" ? <LeadsIcon /> : <CampaignIcon />}
                      </div>
                      <div>
                        <p className="text-[12px] font-medium text-foreground">{step.title}</p>
                        <p className="text-[10px] text-muted-foreground">{step.sub}</p>
                      </div>
                    </div>
                  )}
                </div>

                {i < STEPS.length - 1 && (
                  <div className="relative flex h-5 items-center justify-center">
                    <div className="absolute h-full w-px bg-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Dashboard view ── */}
      {view === "dashboard" && (
        <div className="overflow-hidden rounded-md border border-border bg-background" style={{ minHeight: 580 }}>
          <div className="flex" style={{ minHeight: 580 }}>

            {/* Sidebar */}
            <div className="flex w-[210px] shrink-0 flex-col border-r border-border py-3">
              {/* Logo */}
              <div className="flex items-center gap-2 border-b border-border px-3 pb-3 mb-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md text-[13px] font-bold text-white" style={{ background: "#e8680a" }}>A</div>
                <span className="text-[13px] font-medium text-foreground">Artisan Pro</span>
              </div>

              <p className="px-3 pt-1 pb-0.5 text-[9px] font-medium uppercase tracking-widest text-muted-foreground/60">Principal</p>
              <SidebarItem icon={<GridIcon />} label="Vue d'ensemble" />
              <SidebarItem icon={<UsersIcon />} label="Acquisition leads" active badge="24" badgeVariant="green" />
              <SidebarItem icon={<HouseIcon />} label="Chantiers actifs" badge="5" badgeVariant="amber" />
              <SidebarItem icon={<MailIcon />} label="Campagnes email" />

              <p className="px-3 pt-3 pb-0.5 text-[9px] font-medium uppercase tracking-widest text-muted-foreground/60">Métiers</p>
              <SidebarItem icon={<WindowIcon />} label="Menuiserie" />
              <SidebarItem icon={<SunIcon />} label="Photovoltaïque" />
              <SidebarItem icon={<ThermIcon />} label="Pompe à chaleur" />

              {/* Agent */}
              <div className="mt-auto mx-3 mb-1 flex items-center gap-2 rounded-md border border-border p-2">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-medium text-white" style={{ background: "#e8680a" }}>M</div>
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
                  <h2 className="text-[15px] font-medium text-foreground">Acquisition de leads — BTP & Artisans</h2>
                  <p className="text-[12px] text-muted-foreground mt-0.5">Trouvez, qualifiez et contactez vos prospects automatiquement, sans effort.</p>
                </div>
                <button className="shrink-0 rounded-md px-3 py-1.5 text-[12px] font-medium text-white" style={{ background: "#e8680a" }}>
                  + Nouvelle recherche
                </button>
              </div>

              {/* KPIs */}
              <div className="grid grid-cols-4 gap-2.5">
                {[
                  { label: "Leads ce mois", val: "47", sub: "+12 vs mois dernier", up: true },
                  { label: "Taux de contact", val: "68%", sub: "+4 pts", up: true },
                  { label: "Devis envoyés", val: "19", sub: "en attente : 7", up: false },
                  { label: "CA potentiel", val: "84k€", sub: "pipeline actif", up: true },
                ].map((k) => (
                  <div key={k.label} className="rounded-md bg-muted/50 p-3">
                    <p className="text-[11px] text-muted-foreground">{k.label}</p>
                    <p className="mt-1 text-[20px] font-medium text-foreground">{k.val}</p>
                    <p className={`mt-0.5 text-[10px] ${k.up ? "text-green-700" : "text-muted-foreground"}`}>{k.sub}</p>
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
                    { label: "Menuiserie", val: 18, pct: 55 },
                    { label: "Photovoltaïque", val: 17, pct: 51 },
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
                          style={{ width: `${m.pct}%`, background: "#e8680a", opacity: 1 - idx * 0.2 }}
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
                        <span className="font-medium text-foreground">{s === "Chaud" ? 19 : s === "Tiède" ? 17 : 11}</span>
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
                      { key: "nouveau", label: "Nouveau lead", count: 3 },
                      { key: "devis", label: "Devis envoyé", count: 2 },
                      { key: "signe", label: "Signé", count: 2 },
                    ] as const
                  ).map(({ key, label, count }) => (
                    <div key={key} className="rounded-md bg-muted/40 p-2.5">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-[11px] font-medium text-muted-foreground">{label}</span>
                        <span
                          className="rounded-full px-1.5 py-0.5 text-[9px] font-medium"
                          style={
                            key === "signe"
                              ? { background: "#EAF3DE", color: "#27500A" }
                              : { background: "var(--color-background-primary, white)", color: "var(--color-text-secondary, #666)", border: "0.5px solid var(--color-border-tertiary, #ddd)" }
                          }
                        >
                          {count}
                        </span>
                      </div>
                      {PIPELINE[key].map((card) => (
                        <div key={card.name} className="mb-1.5 last:mb-0 rounded-md border border-border bg-background p-2">
                          <p className="text-[11px] font-medium text-foreground">{card.name}</p>
                          <p className="text-[10px] text-muted-foreground">{card.type}</p>
                          <p
                            className="mt-0.5 text-[11px] font-medium"
                            style={{ color: key === "signe" ? "#27500A" : undefined }}
                          >
                            {card.val}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ── Sidebar item ──────────────────────────────────────────────────

function SidebarItem({
  icon,
  label,
  active,
  badge,
  badgeVariant,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: string;
  badgeVariant?: "green" | "amber";
}) {
  const badgeStyle =
    badgeVariant === "green"
      ? { background: "#EAF3DE", color: "#27500A" }
      : badgeVariant === "amber"
      ? { background: "#FAEEDA", color: "#633806" }
      : {};

  return (
    <div
      className={`flex cursor-pointer items-center gap-2 px-3 py-1.5 text-[12px] transition-colors hover:bg-muted/50 ${
        active ? "bg-muted/60 font-medium text-foreground" : "text-muted-foreground"
      }`}
      style={active ? { borderLeft: "2px solid #e8680a" } : {}}
    >
      <span className="h-3.5 w-3.5 shrink-0">{icon}</span>
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

function CalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="4" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 2v3M14 2v3M2 8h16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3 18c0-4 3-6 7-6s7 2 7 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
      <path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function LeadsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="7" r="3" stroke="#27500A" strokeWidth="1.3" />
      <path d="M3 18c0-4 3-6 7-6s7 2 7 6" stroke="#27500A" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function CampaignIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
      <path d="M2 6l8 5.5L18 6M2 6h16v11H2z" stroke="#633806" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SignalIcon() {
  return (
    <svg width="11" height="7" viewBox="0 0 11 7" fill="none">
      <rect x="0" y="3" width="2" height="4" rx="0.5" fill="white" opacity="0.4" />
      <rect x="3" y="2" width="2" height="5" rx="0.5" fill="white" opacity="0.6" />
      <rect x="6" y="1" width="2" height="6" rx="0.5" fill="white" />
      <rect x="9" y="0" width="2" height="7" rx="0.5" fill="white" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
      <rect x="0.5" y="0.5" width="12" height="7" rx="2" stroke="white" strokeOpacity="0.35" strokeWidth="0.65" />
      <rect x="1.5" y="1.5" width="9" height="5" rx="1" fill="white" />
      <path d="M13.5 2.8v2.4c.6-.2.9-.6.9-1.2s-.3-1-.9-1.2z" fill="white" opacity="0.4" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="12" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="2" y="12" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
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