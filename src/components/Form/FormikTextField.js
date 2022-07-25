import React from "react";
import { useField } from "formik";
import TextField from "@mui/material/TextField";
import { Grid } from "@material-ui/core";

function FormikTextField(props) {
  const [field] = useField(props.name);

  return (
    <>
      <p>{props.label}</p>
      <TextField
        onChange={field.onChange}
        id={field.name}
        variant="outlined"
        size="small"
      />
    </>
  );
}

export default FormikTextField;
