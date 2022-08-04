import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Grid } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleIcon from "@mui/icons-material/Circle";

import { makeStyles } from "@material-ui/core";
import CustomIcon from "./CustomIcon";

interface IProps {
  step: number;
}



function FormStepper({ step }: IProps) {
  return (
    <Grid
      sx={{
        display: { xs: "none", md: "flex", justifyContent: "center" },
        mt: 5,
      }}
    >
      <Stepper activeStep={step - 1} orientation="vertical">
        <Step key="Dane Twojej Firmy">
          <StepLabel StepIconComponent={CustomIcon}>
            Dane Twojej Firmy
          </StepLabel>
          <StepLabel StepIconComponent={CustomIcon}>
            Pozostałe informacje
          </StepLabel>
          <StepLabel StepIconComponent={CustomIcon}>
            Wymagane dokumenty{" "}
          </StepLabel>
          <StepLabel StepIconComponent={CustomIcon}>
            <CustomIcon/>
            Podsumowanie
          </StepLabel>
        </Step>
      </Stepper>
    </Grid>
  );
}

export default FormStepper;
