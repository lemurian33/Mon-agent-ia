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
  | { type: "action"; app: "gmail" | "meet"; title: string; sub: string };

// ── Data ──────────────────────────────────────────────────────────

const MESSAGES: Message[] = [
  {
    id: 1,
    from: "user",
    text: "Envoie un e-mail à Thomas (thoma@gmail.com) pour lui dire que nous devons faire un point très rapidement sur le développement de Limova",
    time: "11:00",
  },
  {
    id: 2,
    from: "agent",
    text: "Bonjour Rui, j'ai bien informé Thomas par email de ta requête.",
    time: "11:00",
  },
  {
    id: 3,
    from: "user",
    text: "Tu peux aussi lui envoyer un Google Meet pour demain à 18H ?",
    time: "11:02",
  },
  {
    id: 4,
    from: "agent",
    text: "Bien sûr ! Je lui ai envoyé une invitation Google Meet pour demain à 18h. Souhaites-tu que je te tienne informé de sa confirmation ?",
    time: "11:02",
  },
];

const STEPS: LogicStep[] = [
  {
    type: "thinking",
    label: "réflexion agent",
    cards: [
      {
        icon: <MailIcon />,
        label: "Action à effectuer",
        value: "Email à envoyer",
      },
      {
        icon: <AtIcon />,
        label: "Destinataire",
        value: "thoma@gmail.com",
      },
    ],
  },
  { type: "action", app: "gmail", title: "Email envoyé avec succès", sub: "thoma@gmail.com" },
  {
    type: "thinking",
    label: "réflexion agent",
    cards: [
      {
        icon: <CalIcon />,
        label: "Action à effectuer",
        value: "Google Meet à créer et envoyer",
      },
      {
        icon: <AtIcon />,
        label: "Destinataire",
        value: "thoma@gmail.com",
      },
    ],
  },
  {
    type: "action",
    app: "meet",
    title: "Google Meet envoyé avec succès",
    sub: "thoma@gmail.com — demain 18h",
  },
];

// ── Main component ────────────────────────────────────────────────

export const AgentDemo = () => {
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
    <div className="flex min-h-[580px] overflow-hidden rounded-xl border border-border bg-muted/20">
      {/* ── iPhone ── */}
      <div className="flex w-[220px] shrink-0 items-center justify-center p-5">
        <div className="w-[172px] overflow-hidden rounded-[34px] border-[2.5px] border-zinc-800 bg-zinc-900 shadow-2xl">
          {/* Status bar */}
          <div className="flex items-center justify-between bg-zinc-900 px-3 py-1.5">
            <span className="text-[10px] font-semibold text-white">11:02</span>
            <div className="flex items-center gap-1">
              <SignalIcon />
              <WifiIcon />
              <BatteryIcon />
            </div>
          </div>

          {/* Contact bar */}
          <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-2 py-1.5">
            <div className="flex items-center gap-1.5">
              <button className="flex items-center gap-0.5 text-[9px] text-blue-400">
                <svg width="5" height="9" viewBox="0 0 6 10" fill="none">
                  <path d="M5 1L1 5l4 4" stroke="#60a5fa" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                12
              </button>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">
                C
              </div>
              <div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-white">
                  Charly
                  <svg width="12" height="12" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="8" fill="#25D366"/>
                    <path d="M5.5 9l2.5 2.5 5-5" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="text-[8px] text-green-400">online</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M15 5H5C3.34 5 2 6.34 2 8v9c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3zM22 8.5l-4 3v3l4 3V8.5z" stroke="#60a5fa" strokeWidth="1.2"/>
              </svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M6.6 5c1.6 1.6 1.6 4.4 0 6L4 13.5C6 17.5 10.5 22 14.5 22l2.5-2.6c1.6-1.6 4.4-1.6 6 0l.5.5C22.5 21.9 21 24 19 24 9 24-2 13 2 3L6.6 5z" stroke="#60a5fa" strokeWidth="1.2"/>
              </svg>
            </div>
          </div>

          {/* Messages */}
          <div className="flex min-h-[300px] flex-col gap-2 bg-[#0b1a16] px-2 py-2.5">
            <div className="text-center text-[9px] text-white/40">Today</div>

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
                style={{ transitionDelay: "0ms" }}
              >
                <div
                  className={`max-w-[130px] rounded-xl px-2.5 py-1.5 text-[10px] leading-[1.4] text-white ${
                    msg.from === "user"
                      ? "rounded-br-[3px] bg-[#056162]"
                      : "rounded-bl-[3px] bg-[#3c3c3e]"
                  }`}
                >
                  {msg.text}
                  <div className="mt-1 text-right text-[8px] text-white/40">{msg.time}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Input bar */}
          <div className="flex items-center gap-1.5 border-t border-zinc-800 bg-zinc-900 px-2 py-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 4v16M4 12h16" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <div className="flex-1 rounded-xl bg-zinc-800 px-2.5 py-1 text-[9px] text-zinc-500">
              Message
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 5v6l4 2" stroke="#60a5fa" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Home bar */}
          <div className="flex items-center justify-center bg-zinc-900 py-1.5">
            <div className="h-[3px] w-14 rounded-full bg-white/20" />
          </div>
        </div>
      </div>

      {/* ── Animated lines ── */}
      <div className="flex w-10 shrink-0 flex-col items-center py-8">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-1 flex-col items-center">
            <div className="relative w-px flex-1 overflow-hidden bg-border">
              <div
                className="absolute left-0 w-full animate-[flowDown_2s_linear_infinite]"
                style={{
                  height: "60%",
                  background: "linear-gradient(to bottom, transparent, #1d9e75 50%, transparent)",
                  animationDelay: `${i * 0.4}s`,
                }}
              />
            </div>
            {i < 4 && (
              <div className="z-10 h-2 w-2 shrink-0 rounded-full border-[1.5px] border-[#1d9e75] bg-background" />
            )}
          </div>
        ))}
      </div>

      {/* ── Logic column ── */}
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
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white">
                    {step.app === "gmail" ? <GmailLogo /> : <MeetLogo />}
                  </div>
                  <div>
                    <p className="text-[12px] font-medium text-foreground">{step.title}</p>
                    <p className="text-[10px] text-muted-foreground">{step.sub}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Separator */}
            {i < STEPS.length - 1 && (
              <div className="relative flex h-5 items-center justify-center">
                <div className="absolute h-full w-px bg-border" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// ── Icons ─────────────────────────────────────────────────────────

function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
      <path d="M2 6l8 5.5L18 6M2 6h16v11H2z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function AtIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M13 10c0 2 1 3 2 3s2-2 2-3a7 7 0 10-7 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

function CalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="4" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M6 2v3M14 2v3M2 8h16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

function SignalIcon() {
  return (
    <svg width="11" height="7" viewBox="0 0 11 7" fill="none">
      <rect x="0" y="3" width="2" height="4" rx="0.5" fill="white" opacity="0.4"/>
      <rect x="3" y="2" width="2" height="5" rx="0.5" fill="white" opacity="0.6"/>
      <rect x="6" y="1" width="2" height="6" rx="0.5" fill="white"/>
      <rect x="9" y="0" width="2" height="7" rx="0.5" fill="white"/>
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
      <path d="M5 4.5C5.8 3.8 6.7 3.8 7.5 4.5" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
      <path d="M2.5 2.5C3.7 1.4 6.3 1.4 7.5 2.5" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
      <path d="M0.5 0.5C2.2-.2 7.8-.2 9.5 0.5" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.9"/>
      <circle cx="5" cy="6" r="0.8" fill="white"/>
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
      <rect x="0.5" y="0.5" width="12" height="7" rx="2" stroke="white" strokeOpacity="0.35" strokeWidth="0.65"/>
      <rect x="1.5" y="1.5" width="9" height="5" rx="1" fill="white"/>
      <path d="M13.5 2.8v2.4c.6-.2.9-.6.9-1.2s-.3-1-.9-1.2z" fill="white" opacity="0.4"/>
    </svg>
  );
}

function GmailLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 36 36" fill="none">
      <path d="M24.8 9.6L18 14.9l-6.9-5.4v-.1l.1.1V17l6.8 5.4L24.8 17V9.6z" fill="#FBBC05"/>
      <path d="M26.6 8.3L24.8 9.6V17l5.6-4.3V10.3c-.3-1.8-2.4.3-2.4.3z" fill="#FBBC05"/>
      <path d="M24.8 17L18 22.4v9.5H23.7c1 0 1.7-.7 1.7-1.6V22.8l5.6-4.3V13L24.8 17z" fill="#34A853"/>
      <path d="M11.2 27V17L11.1 17 11.2 27z" fill="#C5221F"/>
      <path d="M11.1 9.6L9.4 8.3C6.3 6.6 5.6 10.3 5.6 10.3v2.6L11.2 17V9.6z" fill="#C5221F"/>
      <path d="M5.6 12.9V25.5c.1 1.4 1.3 1.5 1.3 1.5H11.2L11.1 17 5.6 12.9z" fill="#4285F4"/>
    </svg>
  );
}

function MeetLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 36 36" fill="none">
      <path d="M5.5 26C5.5 27 6.3 27.9 7.3 27.9H7.3C6.3 27.9 5.5 27 5.5 26z" fill="#FBBC05"/>
      <path d="M19.5 14v4.2l5.8-4.6V9.5c0-.9-.7-1.6-1.6-1.6H11.3L11.3 14H19.5z" fill="#FBBC05"/>
      <path d="M19.5 22.4H11.3L11.3 27.9H23.7c1 0 1.7-.7 1.7-1.6v-3.7l-5.9-4.3v4.3z" fill="#34A853"/>
      <path d="M11.3 7.9L5.5 14H11.4L11.3 7.9z" fill="#EA4335"/>
      <path d="M5.5 12.9v13.1c0 .9.8 1.6 1.7 1.6H11.3L11.3 22.4H5.5V12.9z" fill="#1967D2"/>
      <path d="M11.3 14H5.5v8.4H11.4L11.3 14z" fill="#4285F4"/>
      <path d="M30.4 25V11.2c-.3-1.8-2.4.3-2.4.3L25.3 13.5v9.2l3.8 3.1C30.5 26 30.4 25 30.4 25z" fill="#34A853"/>
      <path d="M19.5 18.2l5.8 4.6V13.5L19.5 18.2z" fill="#188038"/>
    </svg>
  );
}