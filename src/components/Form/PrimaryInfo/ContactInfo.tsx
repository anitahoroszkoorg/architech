import { Grid, Typography } from "@mui/material";
import FormikTextField from "../FormikTextField";
function ContactInfo() {
  return (
    <>
      <Typography
        variant="subtitle2"
        gutterBottom
        component="div"
        sx={{ color: "#495057", fontWeight: "bold", mt: 2 }}
      >
        Dane Kontaktowe
      </Typography>
      <Grid container>
        <Grid item md={6}>
          <FormikTextField name="contactName" label="Imię i Nazwisko" />
        </Grid>
        <Grid item md={6}>
          <FormikTextField name="contactPosition" label="Stanowisko" />
        </Grid>
        <Grid item md={6}>
          <FormikTextField name="contactPhoneNumber" label="Telefon" />
        </Grid>
        <Grid item md={6}>
          <FormikTextField name="contactEmail" label="E-mail  " />
        </Grid>
      </Grid>
    </>
  );
}

export default ContactInfo;
