import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Grid } from "@mui/material";
import { FormContext } from "hooks/FormContext";
import { useContext } from "react";

const stepNames = [
  "Your company details",
  "Remainig information",
  "Documents",
  "Summary",
  "Contract"
];

export default function FormStepper() {
  const { step } = useContext(FormContext);

  return (
    <Grid item sx={{ display: { md: "block", xs: "none" } }}>
      <Stepper
        activeStep={step - 1}
        orientation="vertical"
        sx={{ ml: 7, mt: 2 }}
      >
        {stepNames.map((stepName) => (
          <Step key={stepName}>
            <StepLabel>{stepName}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Grid>
  );
}
