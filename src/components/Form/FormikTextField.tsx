import { useField } from "formik";
import TextField from "@mui/material/TextField";
import { IFieldProps } from "./types";

function FormikTextField(props: IFieldProps) {
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
