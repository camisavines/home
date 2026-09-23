import { Tile } from "@carbon/react";

const appleFont =
  '-apple-system, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif';

export const Profile = ({ isDark }) => {
  return (
    <Tile
      style={{
        borderRadius: "18px",
        padding: "2rem 1.75rem",
        flex: 1,
        background: isDark
          ? "linear-gradient(145deg, rgba(44,44,46,0.85) 0%, rgba(28,28,30,0.75) 100%)"
          : "linear-gradient(145deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.52) 100%)",
        backdropFilter: "saturate(180%) blur(16px)",
        WebkitBackdropFilter: "saturate(180%) blur(16px)",
        border: isDark
          ? "1px solid rgba(255,255,255,0.1)"
          : "1px solid rgba(255,255,255,0.85)",
        boxShadow: isDark
          ? "0 2px 12px rgba(0,0,0,0.4), 0 0 0 0.5px rgba(255,255,255,0.06)"
          : "0 2px 8px rgba(0,0,0,0.08), 0 0 0 0.5px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        fontFamily: appleFont,
        marginBottom: "1rem"
      }}
    >
      <div
        style={{
          position: "relative",
          marginBottom: "1.25rem",
        }}
      >
        <img
          src="/headshot.jpg"
          alt="Camisa"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid rgba(255,255,255,0.9)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            display: "block",
          }}
        />
        {/* Online indicator */}
        <span
          style={{
            position: "absolute",
            bottom: "3px",
            right: "3px",
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            background: "#34c759",
            border: "2px solid white",
          }}
        />
      </div>

      <h1
        style={{
          margin: "0 0 0.2rem",
          fontSize: "22px",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          color: isDark ? "#f5f5f7" : "#1d1d1f",
          fontFamily: appleFont,
        }}
      >
        Camisa
      </h1>
      <p
        style={{
          margin: 0,
          fontSize: "13px",
          fontWeight: 400,
          letterSpacing: "-0.01em",
          color: isDark ? "#98989d" : "#6e6e73",
          fontFamily: appleFont,
        }}
      >
        Software Engineer · IBM
      </p>
    </Tile>
  );
};
