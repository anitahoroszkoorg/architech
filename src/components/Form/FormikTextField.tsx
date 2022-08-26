import { useField, useFormikContext } from "formik";
import TextField from "@mui/material/TextField";
import { IFieldProps, IState } from "./types";
import { makeStyles } from "@material-ui/core";
import { FormHelperText } from "@mui/material";
import { useState, useEffect } from "react";

const useStyles = makeStyles({
  whiteFieldStyle: {
    backgroundColor: "white",
  },
});

function FormikTextField(props: IFieldProps) {
  const [field, meta] = useField(props.name);
  const { setFieldTouched } = useFormikContext<IState>();
  console.log(field, meta);
  useEffect(() => {
    if (field.value !== "") {
      setFieldTouched(field.name, true);
    }
  }, [field.value]);
  const classes = useStyles();

  return (
    <>
      <p>{props.label}</p>
      <TextField
        className={classes.whiteFieldStyle}
        id={field.name}
        error={meta.touched && Boolean(meta.error)}
        variant="outlined"
        size="small"
        {...field}
      />
      {meta.touched && Boolean(meta.error) ? (
        <FormHelperText sx={{ color: "error.main" }}>
          {meta.error}
        </FormHelperText>
      ) : null}
    </>
  );
}

export default FormikTextField;
