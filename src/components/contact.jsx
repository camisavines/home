import { Column, Grid } from "@carbon/react";
import { ChevronRight } from "@carbon/react/icons";

export const Contact = () => {
  return (
    <div
      style={{
        padding: "10vh 48px",
        maxWidth: "1500px",
        margin: "auto",
      }}
    >
      <Grid>
        <Column sm={4} md={4} lg={5} style={{ marginBottom: "1rem" }}>
          <h4>
            Your Plan <ChevronRight size={18} />
          </h4>
        </Column>
        <Column sm={4} md={4} lg={5} style={{ marginBottom: "1rem" }}>
          <h4>
            Your Storage <ChevronRight size={18} />
          </h4>
        </Column>
        <Column sm={4} md={4} lg={5} style={{ marginBottom: "1rem" }}>
          <h4>
            Data Recovery <ChevronRight size={18} />
          </h4>
        </Column>
      </Grid>
    </div>
  );
};
