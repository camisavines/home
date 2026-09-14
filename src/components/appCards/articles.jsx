import { Tile } from "@carbon/react";
import { LogoLinkedin, ArrowRight } from "@carbon/react/icons";

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
    date: new Date("2026-09-24"),
    label: "Sep 2026",
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

export const Articles = () => {
  return (
    <Tile
      style={{
        borderRadius: "10px",
        backgroundColor: "rgba(137, 117, 224, 0.5)",
        padding: "0",
        overflow: "hidden",
        flex: 1,
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "0.875rem 1rem",
          background: "rgba(255, 255, 255, 0.25)",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          borderBottom: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        <LogoLinkedin size={24} />
        <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>
          Recent Writings
        </span>
      </div>

      {/* Article list */}
      <ul style={{ listStyle: "none", margin: 0, padding: "0 1rem" }}>
        {sorted.map((art, i) => (
          <li
            key={art.link}
            style={{
              borderBottom:
                i < sorted.length - 1
                  ? "1px solid rgba(255,255,255,0.2)"
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
                gap: "2rem",
                padding: "1rem 0",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  flex: 1,
                  minWidth: 0,
                }}
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: "rgba(255,255,255,0.7)",
                    whiteSpace: "nowrap",
                    paddingTop: "2px",
                    minWidth: "52px",
                  }}
                >
                  {art.label}
                </span>
                <span
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: 1.4,
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {art.title}
                </span>
              </div>
              <ArrowRight size={16} style={{ flexShrink: 0, opacity: 0.6 }} />
            </a>
          </li>
        ))}
      </ul>
    </Tile>
  );
};
