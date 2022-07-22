import React from "react";
import { Grid } from "@material-ui/core";
import CompanyInfo from "./CompanyInfo";
import Adress from "./Adress";
import ContactName from "./ContactName";
import Contact from "./Contact";
import { Typography } from "@mui/material";

const PrimaryInfo = () => {
  return (
    <Grid container>
      <Grid item xs={3}>
        panel smh
      </Grid>
      <Grid item>
        <Typography variant="h6" gutterBottom component="div">
          Ankieta kwalifikacyjna
        </Typography>
        <CompanyInfo />
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item>
        <Adress />
      </Grid>
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item>
          <ContactName />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <Contact />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default PrimaryInfo;
