import { useField } from "formik";
import TextField from "@mui/material/TextField";
import { IFieldProps } from "./types";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  whiteFieldStyle: {
    backgroundColor: "white",
  },
});
function FormikTextField(props: IFieldProps) {
  const [field] = useField(props.name);
  const classes = useStyles();

  return (
    <>
      <p>{props.label}</p>
      <TextField
        className={classes.whiteFieldStyle}
        onChange={field.onChange}
        id={field.name}
        variant="outlined"
        size="small"
      />
    </>
  );
}

export default FormikTextField;
