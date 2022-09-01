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
        <FormikTextField name="companyName" label="Full company name" />
      </Grid>
      <Grid item md={6}>
        <FormikTextField name="street" label="Street" />
      </Grid>
      <Grid item md={6}>
        <FormikTextField name="city" label="City" />
      </Grid>
      <Grid item md={6}>
        <FormikTextField name="buildingNumber" label="Building number" />
      </Grid>
      <Grid item md={6}>
        <FormikTextField name="zipCode" label="Zip code" />
      </Grid>
      <Grid item md={6}>
        <FormikTextField name="phoneNumber" label="Phone number" />
      </Grid>
      <Grid item md={6}>
        <FormikTextField name="email" label="E-mail address" />
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
        Qualification Questionnaire
      </Typography>
      <Grid container>
        <Grid item md={12}>
          <NipTextField
            name="nip"
            label="NIP number"
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
