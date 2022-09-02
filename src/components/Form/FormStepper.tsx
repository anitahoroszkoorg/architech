import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Grid } from "@mui/material";
interface IProps {
  step: number;
}
const stepNames = [
  "Your company details",
  "Remainig information",
  "Documents",
  "Summary",
];

export default function FormStepper({ step }: IProps) {
  return (
    <Grid item sx={{ display: { xs: "none", md: "block" } }}>
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
