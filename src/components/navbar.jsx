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
        background: isDark ? "rgba(1,1,1,0.5)" : "rgba(255, 255, 255, 0.5)",
      }}
    >
      <SkipToContent />

      <HeaderName href="#hero" prefix="CamisaCloud">
      </HeaderName>

      <HeaderGlobalBar>
        <HeaderGlobalAction
          aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          onClick={onToggleTheme}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </HeaderGlobalAction>

        <HeaderGlobalAction aria-label="App Switcher">
          <img
            src="/headshot.jpg"
            style={{ borderRadius: "50%", width: "60%" }}
          />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  );
};
