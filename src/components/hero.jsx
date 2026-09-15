import { Grid, Column } from "@carbon/react";
import { Profile } from "./appCards/profile";
import { Articles } from "./appCards/articles";
import { Links } from "./appCards/links";
import { About } from "./appCards/about";


export const Hero = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "10vh 1rem",
        maxWidth: "1300px",
        minWidth: "50vh",
        margin: "auto",
      }}
    >

      <Grid fullWidth style={{ alignItems: "stretch" }}>
        <Column
          sm={4}
          md={4}
          lg={5}
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "2rem",
          }}
        >
          <Profile />
        </Column>
        <Column
          sm={4}
          md={8}
          lg={10}
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "2rem",
          }}
        >
          <About />
        </Column>
        <Column
          sm={4}
          md={8}
          lg={10}
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "2rem",
          }}
        >
          <Articles />
        </Column>
        <Column
          sm={4}
          md={4}
          lg={5}
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "2rem",
          }}
        >
          <Links />
        </Column>
      </Grid>
    </div>
  );
};
