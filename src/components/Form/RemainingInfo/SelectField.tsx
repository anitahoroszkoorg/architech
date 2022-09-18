import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useContext, useEffect, useState } from "react";
import { useField } from "formik";
import { FormHelperText } from "@mui/material";
import { ApiContext } from "hooks/ApiContext";

export default function SelectTextField() {
  const [field, meta] = useField("supplierCategory");
  const [categories, setCategories] = useState<string[]>([]);
  const { getSupplierInfo } = useContext(ApiContext);

  console.log(field);
  useEffect(() => {
    async function fetchMyAPI() {
      const data = await getSupplierInfo();
      setCategories(data);
    }

    fetchMyAPI();
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
      {meta.touched && Boolean(meta.error) && (
        <FormHelperText sx={{ color: "error.main" }}>
          {meta.error}
        </FormHelperText>
      )}
    </>
  );
}
