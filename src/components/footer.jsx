const appleFont =
  '-apple-system, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif';

export const Footer = ({ isDark }) => {
  return (
    <div
      style={{
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        borderTop: isDark
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid rgba(0,0,0,0.08)",
        background: isDark ? "rgba(28,28,30,0.8)" : "rgba(255,255,255,0.6)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
      }}
    >
      <a
        href="https://www.linkedin.com/in/camisavines/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          fontSize: "12px",
          color: "#0071e3",
          fontFamily: appleFont,
          letterSpacing: "-0.01em",
        }}
      >
        LinkedIn
      </a>
      <span
        style={{
          fontSize: "10px",
          color: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)",
        }}
      >
        ·
      </span>
      <a
        href="https://www.dev.camisavines.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          fontSize: "12px",
          color: "#0071e3",
          fontFamily: appleFont,
          letterSpacing: "-0.01em",
        }}
      >
        Dev Site
      </a>
      <span
        style={{
          fontSize: "10px",
          color: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)",
        }}
      >
        ·
      </span>
      <span
        style={{
          fontSize: "12px",
          color: isDark ? "#98989d" : "#6e6e73",
          fontFamily: appleFont,
          letterSpacing: "-0.01em",
        }}
      >
        Copyright © 2026 Camisa Vines
      </span>
    </div>
  );
};
