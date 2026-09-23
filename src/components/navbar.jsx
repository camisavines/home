import React from "react";
import {
  Header,
  HeaderName,
  SkipToContent,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from "@carbon/react";
import { Sun, Moon } from "@carbon/react/icons";

export const Navbar = ({ theme, onToggleTheme }) => {
  const isDark = theme === "g100";

  return (
    <Header
      aria-label="navigation"
      style={{
        fontFamily:
          '-apple-system, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
        background: isDark
          ? "rgba(28, 28, 30, 0.82)"
          : "rgba(255, 255, 255, 0.82)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        borderBottom: isDark
          ? "1px solid rgba(255, 255, 255, 0.08)"
          : "1px solid rgba(0, 0, 0, 0.08)",
        height: "44px",
      }}
    >
      <SkipToContent />

      <HeaderName
        href="#hero"
        prefix=""
        style={{
          fontSize: "17px",
          fontWeight: 600,
          letterSpacing: "-0.022em",
          color: isDark ? "#f5f5f7" : "#1d1d1f",
          paddingLeft: "1.25rem",
        }}
      >
        CamisaCloud
      </HeaderName>

      <HeaderGlobalBar>
        <HeaderGlobalAction
          aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          onClick={onToggleTheme}
          style={{ color: isDark ? "#98989d" : "#6e6e73" }}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </HeaderGlobalAction>

        <HeaderGlobalAction
          aria-label="Profile"
          style={{ padding: "0 0.75rem" }}
        >
          <img
            src="/headshot.jpg"
            alt="Profile"
            style={{
              borderRadius: "50%",
              width: "28px",
              height: "28px",
              objectFit: "cover",
              border: isDark
                ? "1.5px solid rgba(255,255,255,0.18)"
                : "1.5px solid rgba(0,0,0,0.12)",
            }}
          />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  );
};
