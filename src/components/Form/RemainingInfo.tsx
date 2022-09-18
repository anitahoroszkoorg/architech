import { Grid, Typography } from "@mui/material";
import WhiteContainer from "containers/WhiteContainer";
import FormikTextField from "./FormikTextField";

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
          <FormikTextField
            name="sumOfSales"
            label="Combined sales of the last 3 years"
          />
        </Grid>
        <Grid item md={6}>
          <FormikTextField name="departments" label="Departments" />
        </Grid>
        <Grid item md={6}>
          <FormikTextField name="service" label="Offered range of services" />
        </Grid>
        <Grid item md={6}>
          <FormikTextField name="equity" label="Equity" />
        </Grid>

        <Grid item md={6}>
          <FormikTextField name="accountNumber" label="Bank account number" />
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
        <Grid item md={6}>
          <FormikTextField name="supplierCategory" label="Supplier category" />
        </Grid>
      </Grid>
    </WhiteContainer>
  );
};

export default RemainingInfo;
