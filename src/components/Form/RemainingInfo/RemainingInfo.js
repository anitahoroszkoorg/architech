import React from "react";
import { Grid } from "@material-ui/core";
import { Typography } from "@mui/material";
import LegalInfo from "./LegalInfo";
import CommercialInfo from "./CommercialInfo";
const RemainingInfo = () => {
  return (
    <Grid container>
      <Grid item xs={3}>
        panel smh
      </Grid>
      <Grid item>
        <Typography variant="h6" gutterBottom component="div">
          Pozostałe informacje
        </Typography>
        <LegalInfo />
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item>
        <CommercialInfo />
      </Grid>
    </Grid>
  );
};

export default RemainingInfo;
