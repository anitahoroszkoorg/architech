import { Grid, Typography } from "@mui/material";
import WhiteContainer from "containers/WhiteContainer";
import FormikTextField from "./FormikTextField";
import { IState } from "./types";

interface IProps {
  step: number;
  safeSetState: (stateUpdate: Partial<IState>) => void;
}

const RemainingInfo = ({ step, safeSetState }: IProps) => {
  return (
    <WhiteContainer step={step} safeSetState={safeSetState} isLast>
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        sx={{ color: "primary.main" }}
      >
        Pozostałe informacje
      </Typography>
      <Grid container>
        <Grid item md={6}>
          <FormikTextField name="employeesAmount" label="Ilość zatrudnionych" />
        </Grid>
        <Grid item md={6}>
          <FormikTextField
            name="sumOfSales"
            label="Łączna sprzedaż z ostatnich 3 lat"
          />
        </Grid>
        <Grid item md={6}>
          <FormikTextField
            name="departments"
            label="Filie/przedstawicielstwa/oddziały"
          />
        </Grid>
        <Grid item md={6}>
          <FormikTextField
            name="service"
            label="Oferowany zakres dostaw/usług"
          />
        </Grid>
        <Grid item md={6}>
          <FormikTextField name="equity" label="Kapitał spółki" />
        </Grid>
        <Grid item md={6}>
          <FormikTextField name="legalForm" label="Forma prawna" />
        </Grid>
        <Grid item md={6}>
          <FormikTextField name="accountNumber" label="Konto bankowe" />
        </Grid>
        <Grid item md={6}>
          <FormikTextField name="regon" label="REGON" />
        </Grid>
        <Grid item md={6}>
          <FormikTextField name="taxPayer" label="Płatnik VAT" />
        </Grid>
        <Grid item md={6}>
          <FormikTextField name="foundingYear" label="Rok założenia" />
        </Grid>
        <Grid item md={6}>
          <FormikTextField name="supplierCategory" label="Kategoria dostawcy" />
        </Grid>
      </Grid>
    </WhiteContainer>
  );
};

export default RemainingInfo;
