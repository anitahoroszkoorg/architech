import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useField } from "formik";
import { FormHelperText } from "@mui/material";
function SalesSelectField() {
  const [field, meta] = useField("sumOfSales");
  const categories = [
    "1000 PLN - 10 000 PLN",
    "10 000 PLN - 100 000 PLN",
    "100 000 PLN - 1 000 000 PLN",
    "1mln PLN - 10mln PLN",
    ">10mln PLN",
  ];
  return (
    <>
      <p>Combined sales of the last 3 years</p>
      <TextField
        id="sumOfSales"
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

export default SalesSelectField;
