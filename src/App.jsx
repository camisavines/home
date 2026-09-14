import { useState } from "react";
import { Theme } from "@carbon/react";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

function App() {
  const [theme, setTheme] = useState("white");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "white" ? "g100" : "white"));
  };

  return (
    <Theme theme={theme}>
      <div
        style={{
          background:
            theme === "white"
              ? "url('/apple-wallpaper-light.jpg')"
              : "url('/apple-wallpaper-dark.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "fixed",
        }}
      >
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <Hero />
      </div>
      <Contact />
      <Footer />
    </Theme>
  );
}

export default App;
