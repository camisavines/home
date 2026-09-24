import { Column, Grid } from "@carbon/react";

const appleFont =
  '-apple-system, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif';

/* ─── Storage bar ─────────────────────────────────────────────────────────── */
// Segments fill left-to-right, each representing a category of used storage.
const storageSegments = [
  { label: "Photos", pct: 38, color: "#ff9f0a" },
  { label: "Apps", pct: 22, color: "#30d158" },
  { label: "Mail", pct: 14, color: "#0071e3" },
  { label: "Docs", pct: 11, color: "#bf5af2" },
  { label: "Other", pct: 9, color: "#ff375f" },
  // remaining ~6% is "free" — shown as the track background
];

const StorageBar = ({ isDark }) => {
  const usedPct = storageSegments.reduce((sum, s) => sum + s.pct, 0);

  return (
    <div style={{ marginTop: "10px" }}>
      {/* Bar track */}
      <div
        style={{
          height: "8px",
          borderRadius: "4px",
          overflow: "hidden",
          background: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)",
          display: "flex",
        }}
      >
        {storageSegments.map((seg, i) => (
          <div
            key={seg.label}
            title={`${seg.label}: ${seg.pct}%`}
            style={{
              width: `${seg.pct}%`,
              background: seg.color,
              marginRight: i < storageSegments.length - 1 ? "1.5px" : 0,
              borderRadius:
                i === 0
                  ? "4px 0 0 4px"
                  : i === storageSegments.length - 1
                    ? "0 4px 4px 0"
                    : 0,
            }}
          />
        ))}
      </div>

      {/* Usage label */}
      <p
        style={{
          margin: "6px 0 8px",
          fontSize: "11px",
          color: isDark ? "#ff453a" : "#ff3b30",
          fontFamily: appleFont,
          fontWeight: 500,
          letterSpacing: "-0.01em",
        }}
      >
        {usedPct} GB of 5 GB used — storage full
      </p>

      {/* Legend */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px 14px",
        }}
      >
        {storageSegments.map((seg) => (
          <div
            key={seg.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "2px",
                background: seg.color,
                flexShrink: 0,
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: "11px",
                color: isDark ? "#98989d" : "#6e6e73",
                fontFamily: appleFont,
                letterSpacing: "-0.01em",
              }}
            >
              {seg.label}
            </span>
          </div>
        ))}
      </div>

      {/* Upgrade CTA */}
      <button
        onClick={() => window.open("https://dev.camisavines.com", "_blank")}
        style={{
          marginTop: "12px",
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          background: "#0071e3",
          color: "#fff",
          border: "none",
          borderRadius: "980px",
          padding: "5px 14px",
          fontSize: "12px",
          fontWeight: 500,
          fontFamily: appleFont,
          letterSpacing: "-0.01em",
          cursor: "pointer",
        }}
      >
        Upgrade to CamisaCloud+
      </button>
    </div>
  );
};

/* ─── Section rows ────────────────────────────────────────────────────────── */
const sectionTitle = (isDark) => ({
  margin: "0 0 2px",
  fontSize: "15px",
  fontWeight: 600,
  letterSpacing: "-0.02em",
  color: isDark ? "#f5f5f7" : "#1d1d1f",
  fontFamily: appleFont,
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

const sectionValue = (isDark) => ({
  margin: 0,
  fontSize: "13px",
  fontWeight: 400,
  letterSpacing: "-0.01em",
  color: isDark ? "#98989d" : "#6e6e73",
  fontFamily: appleFont,
});

/* Inline chevron — same one used throughout the page */
const Chevron = ({ isDark }) => (
  <svg
    width="6"
    height="10"
    viewBox="0 0 7 12"
    fill="none"
    style={{ opacity: 0.35, flexShrink: 0 }}
  >
    <path
      d="M1 1l5 5-5 5"
      stroke={isDark ? "#f5f5f7" : "#1d1d1f"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ─── Exported section ────────────────────────────────────────────────────── */
export const Contact = ({ isDark }) => {
  const divider = {
    borderTop: isDark
      ? "1px solid rgba(255,255,255,0.08)"
      : "1px solid rgba(0,0,0,0.06)",
  };

  return (
    <div
      style={{
        padding: "3rem 0 5rem",
        background: isDark ? "rgba(28,28,30,0.78)" : "rgba(255,255,255,0.62)",
        backdropFilter: "saturate(180%) blur(24px)",
        WebkitBackdropFilter: "saturate(180%) blur(24px)",
        borderTop: isDark
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid rgba(0,0,0,0.06)",
        borderBottom: isDark
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "auto", padding: "0 16px" }}>
        <Grid>
          {/* ── Your Plan ── */}
          <Column
            sm={4}
            md={4}
            lg={5}
            style={{
              padding: "16px 0",
              ...divider,
            }}
          >
            <button
              style={{
                all: "unset",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                marginBottom: "4px",
              }}
            >
              <h4 style={sectionTitle(isDark)}>
                Your Plan <Chevron isDark={isDark} />
              </h4>
            </button>
            <p style={sectionValue(isDark)}>Free · iCloud 5 GB</p>
          </Column>

          {/* ── Your Storage ── */}
          <Column
            sm={4}
            md={4}
            lg={5}
            style={{
              padding: "16px 0",
              ...divider,
            }}
          >
            <button
              style={{
                all: "unset",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                marginBottom: "4px",
              }}
            >
              <h4 style={sectionTitle(isDark)}>
                Your Storage <Chevron isDark={isDark} />
              </h4>
            </button>
            <StorageBar isDark={isDark} />
          </Column>

          {/* ── Data Recovery ── */}
          <Column
            sm={4}
            md={4}
            lg={5}
            style={{
              padding: "16px 0",
              ...divider,
            }}
          >
            <button
              style={{
                all: "unset",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                marginBottom: "4px",
              }}
            >
              <h4 style={sectionTitle(isDark)}>
                Data Discovery <Chevron isDark={isDark} />
              </h4>
            </button>
            <p style={sectionValue(isDark)}>See my latest <a href="https://magnets.camisavines.com/" target="_blank">travel plans</a> and collections</p>
          </Column>
        </Grid>
      </div>
    </div>
  );
};
