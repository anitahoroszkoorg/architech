import { Box } from "@mui/system";
import CustomIcon from "./CustomIcon";

interface IProps {
  step: number;
}

const stepNames = [
  "Dane Twojej Firmy",
  "Pozostałe informacje",
  "Wymagane dokumenty",
  "Podsumowanie",
];

export default function MyStepper({ step }: IProps) {
  const activeStep = step - 1;
  return (
    <div>
      {stepNames.map((stepName) => (
        <Box>
          {stepName}
          <CustomIcon />
        </Box>
      ))}
    </div>
  );
}
