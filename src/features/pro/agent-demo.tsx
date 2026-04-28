"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// ── Types ─────────────────────────────────────────────────────────

type Message = {
  id: number;
  from: "user" | "agent";
  text: string;
  time: string;
};

type LogicStep =
  | { type: "thinking"; label: string; cards: { icon: ReactNode; label: string; value: string }[] }
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

const ORANGE = "#e8680a";

// ── Component ─────────────────────────────────────────────────────

export const AgentDemo = () => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  // ── Lance l'animation uniquement quand la section est visible ──
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.25 } // démarre quand 25% de la section est visible
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  // ── Déclenche les timers seulement après que started = true ──
  useEffect(() => {
    if (!started) return;

    const delays     = [0, 1400, 2800, 4200];
    const stepDelays = [1000, 2400, 3800, 5200];

    const msgTimers = delays.map((delay, i) =>
      setTimeout(() => setVisibleMessages((prev) => [...prev, i]), delay)
    );
    const stepTimers = stepDelays.map((delay, i) =>
      setTimeout(() => setVisibleSteps((prev) => [...prev, i]), delay)
    );

    timersRef.current = [...msgTimers, ...stepTimers];

    return () => {
      timersRef.current.forEach(clearTimeout);
    };
  }, [started]);

  return (
    <div ref={sectionRef} className="flex flex-col gap-3 mx-auto max-w-6xl">

      {/* Badge + titre + sous-titre */}
      <div className="mx-auto max-w-2xl text-center mb-8">
        <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold tracking-widest text-orange-700 uppercase dark:border-orange-800/60 dark:bg-orange-950/60 dark:text-orange-300">
          Agent IA en action
        </span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
          Votre agent travaille.{" "}
          <span className="text-orange-500">Vous encaissez.</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground text-pretty">
          Envoyez une instruction en langage naturel — votre agent l'exécute,
          contacte vos prospects et planifie les relances. Sans vous.
        </p>
      </div>

      {/* Mobile mockup */}
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
              <div
                className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white"
                style={{ background: ORANGE }}
              >
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
                  className={cn(
                    "flex transition-all duration-500",
                    msg.from === "user" ? "justify-end" : "justify-start",
                    visibleMessages.includes(i)
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  )}
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
                  style={{ borderColor: ORANGE }}
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
                className={cn(
                  "transition-all duration-500",
                  visibleSteps.includes(i)
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                )}
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
                          className={cn(
                            "flex items-center gap-2.5 px-3 py-2.5",
                            j < step.cards.length - 1 ? "border-b border-border" : ""
                          )}
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
    </div>
  );
};

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