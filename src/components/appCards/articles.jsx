import { Tile } from "@carbon/react";

const appleFont =
  '-apple-system, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif';

const articles = [
  {
    link: "https://www.linkedin.com/pulse/who-answer-ai-navigating-accountability-camisa-vines-ld70c/",
    title: "Who Will Answer for AI? Navigating AI Accountability",
    date: new Date("2026-08-21"),
    label: "Aug 2026",
  },
  {
    link: "https://www.linkedin.com/pulse/stop-wasting-water-alternative-cooling-methods-data-centers-vines-hbd4c/",
    title:
      "Stop Wasting Water: The Alternative Cooling Methods Data Centers Don't Want You to Know About",
    date: new Date("2026-07-24"),
    label: "JUL 2026",
  },
  {
    link: "https://www.linkedin.com/pulse/belated-hello-because-i-jumped-right-camisa-vines-ldxsc/",
    title: "A Belated Hello",
    date: new Date("2026-06-26"),
    label: "Jun 2026",
  },
  {
    link: "https://www.linkedin.com/pulse/unspoken-pressure-25-year-old-billionaire-camisa-vines-m9mdc/",
    title: "The Unspoken Pressure to be a 25 Year Old Billionaire",
    date: new Date("2026-05-29"),
    label: "May 2026",
  },
  {
    link: "https://www.linkedin.com/pulse/ai-here-ignoring-has-cost-embracing-blindly-too-camisa-vines-whh6e/",
    title:
      "AI is here, ignoring it has a cost, but embracing it blindly has a cost too.",
    date: new Date("2026-04-27"),
    label: "Apr 2026",
  },
];

const sorted = [...articles].sort((a, b) => b.date - a.date);

export const Articles = ({ isDark }) => {
  return (
    <Tile
      style={{
        borderRadius: "18px",
        overflow: "hidden",
        padding: "0",
        flex: 1,
        background: isDark ? "rgba(28,28,30,0.78)" : "rgba(255,255,255,0.62)",
        backdropFilter: "saturate(180%) blur(16px)",
        WebkitBackdropFilter: "saturate(180%) blur(16px)",
        border: isDark
          ? "1px solid rgba(255,255,255,0.1)"
          : "1px solid rgba(255,255,255,0.85)",
        boxShadow: isDark
          ? "0 2px 12px rgba(0,0,0,0.4), 0 0 0 0.5px rgba(255,255,255,0.06)"
          : "0 2px 8px rgba(0,0,0,0.08), 0 0 0 0.5px rgba(0,0,0,0.06)",
        fontFamily: appleFont,
        minHeight: "30vh",
        marginBottom: "1rem"

      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "11px 16px 10px",
          background: isDark ? "rgba(44,44,46,0.6)" : "rgba(255,255,255,0.5)",
          borderBottom: isDark
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid rgba(0,0,0,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontWeight: 600,
            fontSize: "15px",
            letterSpacing: "-0.015em",
            color: isDark ? "#f5f5f7" : "#1d1d1f",
            fontFamily: appleFont,
          }}
        >
          Recent Writings
        </span>
        <span
          style={{
            fontSize: "13px",
            color: "#0071e3",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            fontFamily: appleFont,
          }}
        >
          LinkedIn
        </span>
      </div>

      {/* Article list */}
      <ul style={{ listStyle: "none", margin: 0, padding: "0 16px" }}>
        {sorted.map((art, i) => (
          <li
            key={art.link}
            style={{
              borderBottom:
                i < sorted.length - 1
                  ? isDark
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "1px solid rgba(0,0,0,0.06)"
                  : "none",
            }}
          >
            <a
              href={art.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                padding: "16px 0",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "12px",
                  flex: 1,
                  minWidth: 0,
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    color: isDark ? "#98989d" : "#6e6e73",
                    whiteSpace: "nowrap",
                    letterSpacing: "0.02em",
                    minWidth: "52px",
                    fontFamily: appleFont,
                  }}
                >
                  {art.label}
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.4,
                    letterSpacing: "-0.01em",
                    color: isDark ? "#f5f5f7" : "#1d1d1f",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    fontFamily: appleFont,
                  }}
                >
                  {art.title}
                </span>
              </div>
              {/* Chevron — Apple-style disclosure indicator */}
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                style={{ flexShrink: 0, opacity: 0.35 }}
              >
                <path
                  d="M1 1l5 5-5 5"
                  stroke={isDark ? "#f5f5f7" : "#1d1d1f"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </Tile>
  );
};
