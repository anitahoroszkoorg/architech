import { FormHelperText, TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";
import { makeStyles } from "@material-ui/core";
import { validateNip } from "Validation/formValidationSchema";
import { toast } from "react-toastify";
import { ApiContext, NipInfoResponse } from "hooks/ApiContext";
import { useContext } from "react";

interface IProps {
  name: string;
  label: string;
  setShouldShowAllFields: (shouldShowAllFields: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
}
const useStyles = makeStyles({
  whiteFieldStyle: {
    backgroundColor: "white",
  },
});
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const NipTextField = ({
  name,
  label,
  setShouldShowAllFields,
  setIsLoading,
}: IProps) => {
  const [field, meta] = useField(name);
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const classes = useStyles();
  const { getNipInfo } = useContext(ApiContext);

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
        onChange={async (e) => {
          field.onChange(e);

          if (validateNip(e.target.value)) {
            setIsLoading(true);
            setShouldShowAllFields(false);

            try {
              const data = await getNipInfo({ nip: e.target.value });
              const fieldMap: { [key: string]: string } = {
                name: "companyName",
                address: "street",
                city: "city",
                address_number: "buildingNumber",
                postal_code: "zipCode",
                regon: "regon",
              };
              Object.keys(data).forEach((key) => {
                setFieldValue(
                  fieldMap[key],
                  data[key as keyof NipInfoResponse]
                );
              });
              setFieldValue("legalForm", data.legal_form.name);
              // Hack to wait for new value to be applied
              // Pending https://github.com/jaredpalmer/formik/issues/529
              await delay(1);
              Object.keys(data).forEach((key: string) => {
                setFieldTouched(fieldMap[key], true);
              });
              setFieldValue("legalForm", true);
              setShouldShowAllFields(true);
            } catch (e: unknown) {
              setShouldShowAllFields(true);

              toast.error("Something went wrong!");
            }
            setIsLoading(false);
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
