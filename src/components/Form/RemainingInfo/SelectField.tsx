import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import { useField } from "formik";
import { FormHelperText } from "@mui/material";

export default function SelectTextField() {
  const [field, meta] = useField("supplierCategory");
  const [categories, setCategories] = useState([]);
  console.log(field);
  useEffect(() => {
    fetch("http://localhost:8000/supplier/")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <>
      <p>Supplier category</p>
      <TextField
        id="supplierCategory"
        select
        error={meta.touched && Boolean(meta.error)}
        {...field}
        size="small"
        fullWidth
      >
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </TextField>
      {meta.touched && Boolean(meta.error) ? (
        <FormHelperText sx={{ color: "error.main" }}>
          {meta.error}
        </FormHelperText>
      ) : null}
    </>
  );
}
