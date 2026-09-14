import { Column, Grid } from "@carbon/react";

export const Contact = () => {
  return (
    <div style={{ maxWidth: "1500px", minHeight: "25vh", margin: "auto", padding: "3rem 0" }}>
      <Grid>
        <Column sm={4} md={4} lg={4}>your plan</Column>
        <Column sm={4} md={4} lg={4}>your plan</Column>
        <Column sm={4} md={4} lg={4}>your plan</Column>
      </Grid>
    </div>
  );
};
