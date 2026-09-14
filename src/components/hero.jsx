import { Grid, Column } from "@carbon/react";
import { Profile } from "./appCards/profile";

export const Hero = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "10vh 48px",
        margintop: "48px",
        maxWidth: "1500px",
        margin: "auto",
      }}
    >
      <Grid fullWidth>
        <Column sm={4} md={4} lg={6}>
          <Profile />
        </Column>
        <Column sm={4} md={4} lg={10}>
          photos (Links)
        </Column>
        <Column sm={4} md={4} lg={12}>
          mail (recent publishings)
        </Column>
        <Column sm={4} md={4} lg={4}>
          drive (contact)
        </Column>
      </Grid>
    </div>
  );
};
