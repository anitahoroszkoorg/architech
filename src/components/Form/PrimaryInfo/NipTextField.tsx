import { FormHelperText, TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";
import { makeStyles } from "@material-ui/core";
import { validateNip } from "Validation/formValidationSchema";
interface IProps {
  name: string;
  label: string;
  setShouldShowAllFields: (shouldShowAllFields: boolean) => void;
}
const useStyles = makeStyles({
  whiteFieldStyle: {
    backgroundColor: "white",
  },
});
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const NipTextField = ({ name, label, setShouldShowAllFields }: IProps) => {
  const [field, meta] = useField(name);
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const classes = useStyles();
  return (
    <>
      <p>{label}</p>
      <TextField
        className={classes.whiteFieldStyle}
        id={field.name}
        error={meta.touched && Boolean(meta.error)}
        variant="outlined"
        size="small"
        {...field}
        onChange={(e) => {
          field.onChange(e);
          const input = {
            nip: e.target.value,
          };
          if (validateNip(e.target.value)) {
            fetch(
              "https://europe-central2-architech-362918.cloudfunctions.net/nip-info/",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(input),
              }
            )
              .then((response) => response.json())
              .then(async (data) => {
                const fieldMap: { [key: string]: string } = {
                  name: "companyName",
                  address: "street",
                  city: "city",
                  address_number: "buildingNumber",
                  postal_code: "zipCode",
                  regon: "regon",
                };
                Object.keys(data).forEach((key: string) => {
                  setFieldValue(fieldMap[key], data[key]);
                });
                setFieldValue("legalForm", data.legal_form.name);
                // Hack to wait for new value to be applied
                // Pending https://github.com/jaredpalmer/formik/issues/529
                await delay(1);
                Object.keys(data).forEach((key: string) => {
                  setFieldTouched(fieldMap[key], true);
                });
                setFieldValue("legalForm", true);
              });
            setShouldShowAllFields(true);
          }
        }}
      />
      {meta.touched && Boolean(meta.error) ? (
        <FormHelperText sx={{ color: "error.main" }}>
          {meta.error}
        </FormHelperText>
      ) : null}
    </>
  );
};

export default NipTextField;
