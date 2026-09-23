import { Tile } from "@carbon/react";
import {
  LogoLinkedin,
  Email,
  Plane,
  Code,
  ApplicationWeb,
} from "@carbon/react/icons";

const appleFont =
  '-apple-system, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif';

/* iOS-style app icon gradient backgrounds */
const iconStyles = {
  Mail: { background: "linear-gradient(145deg, #4facfe 0%, #00f2fe 100%)" },
  LinkedIn: { background: "linear-gradient(145deg, #0077b5 0%, #00a0dc 100%)" },
  "Tech Consulting": {
    background: "linear-gradient(145deg, #f093fb 0%, #f5576c 100%)",
  },
  ".dev": { background: "linear-gradient(145deg, #4e54c8 0%, #8f94fb 100%)" },
  Travel: { background: "linear-gradient(145deg, #43e97b 0%, #38f9d7 100%)" },
};

export const Links = ({ isDark }) => {
  const linksList = [
    {
      icon: Email,
      link: "mailto:camisa@camisavines.com",
      name: "Mail",
    },
    {
      icon: LogoLinkedin,
      link: "https://www.linkedin.com/in/camisavines/",
      name: "LinkedIn",
    },
    {
      icon: ApplicationWeb,
      link: "https://consulting.camisavines.com/",
      name: "Tech Consulting",
    },
    {
      icon: Code,
      link: "https://www.linkedin.com/in/camisavines/",
      name: ".dev",
    },
    {
      icon: Plane,
      link: "https://magnets.camisavines.com/",
      name: "Travel",
    },
  ];

  return (
    <Tile
      style={{
        borderRadius: "18px",
        padding: "1.5rem",
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
        marginBottom: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingTop: "4px",
        }}
      >
        {linksList.map((l) => (
          <a
            key={l.name}
            href={l.link}
            target={l.link.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              textAlign: "center",
              width: "68px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {/* iOS-style app icon */}
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "14px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.18), 0 0 0 0.5px rgba(0,0,0,0.06)",
                transition: "transform 0.15s ease, box-shadow 0.15s ease",
                ...iconStyles[l.name],
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0,0,0,0.22), 0 0 0 0.5px rgba(0,0,0,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 1px 3px rgba(0,0,0,0.18), 0 0 0 0.5px rgba(0,0,0,0.06)";
              }}
            >
              <l.icon size={28} style={{ color: "#fff" }} />
            </div>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                color: isDark ? "#f5f5f7" : "#1d1d1f",
                fontFamily: appleFont,
                lineHeight: 1.2,
              }}
            >
              {l.name}
            </span>
          </a>
        ))}
      </div>
    </Tile>
  );
};
