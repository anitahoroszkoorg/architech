import { Grid, Typography, Divider, Fade } from "@mui/material";
import FormikTextField from "../FormikTextField";
import NipTextField from "./NipTextField";
import { useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

interface IProps {
  shouldShowAllFields: boolean;
  setShouldShowAllFields: (shouldShowAllFields: boolean) => void;
}
const CompanyInfo = ({
  shouldShowAllFields,
  setShouldShowAllFields,
}: IProps) => {
  const [isLoading, setIsLoading] = useState(false);

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
            setIsLoading={setIsLoading}
          />
        </Grid>
        <Divider sx={{ width: "100%", marginTop: 5 }} />
        <Grid item md={12}>
          {isLoading ? (
            <Grid container justifyContent={"center"}>
              <InfinitySpin width="200" color="#99c24d" />
            </Grid>
          ) : (
            <Fade data-testid="fade" in={shouldShowAllFields}>
              <Grid container>
                <Grid item md={12}>
                  <FormikTextField
                    name="companyName"
                    label="Full company name"
                  />
                </Grid>
                <Grid item md={6}>
                  <FormikTextField name="street" label="Street" />
                </Grid>
                <Grid item md={6}>
                  <FormikTextField name="city" label="City" />
                </Grid>
                <Grid item md={6}>
                  <FormikTextField
                    name="buildingNumber"
                    label="Building number"
                  />
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
            </Fade>
          )}
        </Grid>
      </Grid>
    </>
  );
};
export default CompanyInfo;
