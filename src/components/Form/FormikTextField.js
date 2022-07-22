import React from "react";
import { useField } from "formik";
import TextField from "@mui/material/TextField";

function FormikTextField(props) {
  const [field] = useField(props.name);

  return (
    <div>
      <p>{props.label}</p>
      <TextField
        onChange={field.onChange}
        id={field.name}
        // label={props.label}
        variant="outlined"
        size="small"
      />
    </div>
  );
}

export default FormikTextField;
