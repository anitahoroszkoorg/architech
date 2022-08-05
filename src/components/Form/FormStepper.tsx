import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
interface IProps {
  step: number;
}
const stepNames = [
  "Dane Twojej firmy",
  "Pozostałe informacje",
  "Wymagane dokumenty",
  "Podsumowanie",
];

export default function FormStepper({ step }: IProps) {
  const activeStep = step - 1;
  return (
    <Stepper activeStep={activeStep} orientation="vertical" sx={{ margin: 7 }}>
      {stepNames.map((stepName) => (
        <Step key={stepName}>
          <StepLabel>{stepName}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
