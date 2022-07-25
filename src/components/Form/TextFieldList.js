import React from "react";
import FormikTextField from "./FormikTextField";
import { Grid } from "@material-ui/core";

function TextFieldList({ fieldList }) {
  return (
    <Grid container>
      {fieldList.map((field) => (
        <Grid item xs={6}>
          <FormikTextField name={field.name} label={field.label} />
        </Grid>
      ))}
    </Grid>
  );
}

export default TextFieldList;
