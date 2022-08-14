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
  return (
    <Stepper activeStep={step - 1} orientation="vertical" sx={{ ml: 7, mt: 2 }}>
      {stepNames.map((stepName) => (
        <Step key={stepName}>
          <StepLabel>{stepName}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
