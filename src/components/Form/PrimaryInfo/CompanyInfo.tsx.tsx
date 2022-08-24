import { Grid, Typography } from "@mui/material";

import FormikTextField from "../FormikTextField";
const CompanyInfo = () => {
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
        <Grid item md={6}>
          <FormikTextField name="companyName" label="Pełna nazwa firmy" />
        </Grid>
        <Grid item md={6}>
          <FormikTextField name="nip" label="NIP" />
        </Grid>
        <Grid item md={6}>
          <FormikTextField name="phoneNumber" label="Telefon" />
        </Grid>
        <Grid item md={6}>
          <FormikTextField name="email" label="E-mail" />
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
      </Grid>
    </>
  );
};
export default CompanyInfo;
