import React from "react";
import { Grid, Typography } from "@mui/material";
import { SubmitInfoRequestBody } from "hooks/ApiContext";
import { useFormikContext } from "formik";
import { Paper } from "@material-ui/core";

export const dataToVerify = () => {
  const { values } = useFormikContext<SubmitInfoRequestBody>();
  const actualVals = Object.values(values);
  return (
    <Paper elevation={3} style={{ padding: 20 }}>
      <Grid item xs={12}>
        <Typography variant="body2">
          Name of the company: {actualVals[1]}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">NIP number: {actualVals[2]}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">Phone number: {actualVals[3]}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">Email address: {actualVals[4]}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">Street: {actualVals[5]}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">City: {actualVals[6]}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">
          Building number: {actualVals[7]}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">Zip code: {actualVals[8]}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">
          Contact person's name: {actualVals[9]}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">
          Contact person's position: {actualVals[10]}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">
          Contact person's phone number: {actualVals[11]}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">
          Contact person's email address: {actualVals[12]}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">
          Bank account number: {actualVals[13]}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">REGON: {actualVals[14]}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">VAT taxpayer: {actualVals[15]}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">
          Company's founding year: {actualVals[16]}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">
          Supplier category {actualVals[17]}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">
          Amount of employees: {actualVals[18]}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">
          Combined sales of the last 3 years: {actualVals[19]}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">Departments: {actualVals[20]}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">
          Offered range of services: {actualVals[21]}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">Equity: {actualVals[22]}</Typography>
      </Grid>
    </Paper>
  );
};
