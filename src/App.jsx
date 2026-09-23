import { useState } from "react";
import { Theme } from "@carbon/react";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Footer } from "./components/footer";
import { Contact } from "./components/contact";

function App() {
  const [theme, setTheme] = useState("white");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "white" ? "g100" : "white"));
  };

  const isDark = theme === "g100";

  return (
    <Theme theme={theme}>
      <div
        style={{
          minHeight: "100vh",
          background: isDark
            ? "url('/apple-wallpaper-dark.jpg')"
            : "url('/apple-wallpaper-light.jpg')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        {/* Subtle tint overlay so frosted cards contrast against the wallpaper */}
        <div
          style={{
            minHeight: "100vh",
            background: isDark
              ? "rgba(0,0,0,0.18)"
              : "rgba(255,255,255,0.12)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Navbar theme={theme} onToggleTheme={toggleTheme} />
          <div style={{ flex: 1 }}>
            <Hero isDark={isDark} />
          </div>
          <Contact isDark={isDark} />
          <Footer isDark={isDark} />
        </div>
      </div>
    </Theme>
  );
}

export default App;
