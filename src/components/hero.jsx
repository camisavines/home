import { Grid, Column } from "@carbon/react";
import { Profile } from "./appCards/profile";
import { Articles } from "./appCards/articles";
import { Links } from "./appCards/links";
import { About } from "./appCards/about";

export const Hero = ({ isDark }) => {
  return (
    <div
      id="hero"
      style={{
        minHeight: "100vh",
        padding: "128px 16px 32px",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <Grid fullWidth style={{ alignItems: "stretch", rowGap: "16px" }}>
        <Column
          sm={4}
          md={4}
          lg={5}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Profile isDark={isDark} />
        </Column>
        <Column
          sm={4}
          md={8}
          lg={10}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <About isDark={isDark} />
        </Column>
        <Column
          sm={4}
          md={8}
          lg={10}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Articles isDark={isDark} />
        </Column>
        <Column
          sm={4}
          md={4}
          lg={5}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Links isDark={isDark} />
        </Column>
      </Grid>
    </div>
  );
};
