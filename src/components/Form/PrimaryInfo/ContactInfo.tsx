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
        Contact information
      </Typography>
      <Grid container>
        <Grid item md={6}>
          <FormikTextField
            name="contactName"
            label="Contact person's full name"
          />
        </Grid>
        <Grid item md={6}>
          <FormikTextField name="contactPosition" label="Position" />
        </Grid>
        <Grid item md={6}>
          <FormikTextField name="contactPhoneNumber" label="Phone number" />
        </Grid>
        <Grid item md={6}>
          <FormikTextField name="contactEmail" label="E-mail address " />
        </Grid>
      </Grid>
    </>
  );
}

export default ContactInfo;
