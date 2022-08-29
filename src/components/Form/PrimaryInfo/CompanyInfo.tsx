import { Grid, Typography, Divider, Fade } from "@mui/material";
import FormikTextField from "../FormikTextField";
import NipTextField from "./NipTextField";
interface IProps {
  shouldShowAllFields: boolean;
  setShouldShowAllFields: (shouldShowAllFields: boolean) => void;
}
const CompanyInfo = ({
  shouldShowAllFields,
  setShouldShowAllFields,
}: IProps) => {
  const companyFields = (
    <Grid container>
      <Grid item md={12}>
        <FormikTextField name="companyName" label="Pełna nazwa firmy" />
      </Grid>
      <Grid item md={6}>
        <FormikTextField name="street" label="Ulica" />
      </Grid>
      <Grid item md={6}>
        <FormikTextField name="city" label="Miejscowość" />
      </Grid>
      <Grid item md={6}>
        <FormikTextField name="buildingNumber" label="Nr budynku/lokalu" />
      </Grid>
      <Grid item md={6}>
        <FormikTextField name="zipCode" label="Kod pocztowy" />
      </Grid>
      <Grid item md={6}>
        <FormikTextField name="phoneNumber" label="Telefon" />
      </Grid>
      <Grid item md={6}>
        <FormikTextField name="email" label="E-mail" />
      </Grid>
    </Grid>
  );
  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        sx={{ color: "primary.main" }}
      >
        Ankieta kwalifikacyjna
      </Typography>
      <Grid container>
        <Grid item md={12}>
          <NipTextField
            name="nip"
            label="numer NIP"
            setShouldShowAllFields={setShouldShowAllFields}
          />
        </Grid>
        <Divider sx={{ width: "100%", marginTop: 5 }} />
        <Grid item md={12}>
          <Fade in={shouldShowAllFields}>{companyFields}</Fade>
        </Grid>
      </Grid>
    </>
  );
};
export default CompanyInfo;
