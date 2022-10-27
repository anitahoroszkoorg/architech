import { Grid, Typography } from "@mui/material";
import WhiteContainer from "containers/WhiteContainer";
import FormikTextField from "../FormikTextField";
import EquitySelectField from "./EquitySelectField";
import SalesSelectField from "./SalesSelectField";
import SupplierSelectField from "./SupplierSelectField";
import SelectTextField from "./SupplierSelectField";

const RemainingInfo = () => {
  return (
    <WhiteContainer isLast>
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        sx={{ color: "primary.main" }}
      >
        Remaining information
      </Typography>
      <Grid container>
        <Grid item md={6}>
          <FormikTextField name="employeesAmount" label="Amount of employees" />
        </Grid>
        <Grid item md={6}>
          <SalesSelectField />
        </Grid>
        <Grid item md={6}>
          <FormikTextField name="departments" label="Departments" />
        </Grid>
        <Grid item md={6}>
          <FormikTextField name="service" label="Offered range of services" />
        </Grid>
        <Grid item md={6}>
          <EquitySelectField />
        </Grid>

        <Grid item md={6}>
          <FormikTextField name="regon" label="REGON" />
        </Grid>
        <Grid item md={6}>
          <FormikTextField name="taxPayer" label="VAT taxpayer" />
        </Grid>
        <Grid item md={6}>
          <FormikTextField name="foundingYear" label="Founding year" />
        </Grid>
        <Grid item md={6} xs={12}>
          <SupplierSelectField />
        </Grid>
      </Grid>
    </WhiteContainer>
  );
};

export default RemainingInfo;
