import { Grid } from "@mui/material";
import FormStepper from "components/Form/FormStepper";
import { IState } from "components/Form/types";
import ButtonContainer from "components/Form/FormButton/ButtonContainer";
import ButtonGrid from "./ButtonGrid";
import ContainerGrid from "./ContainerGrid";

interface IProps {
  step: number;
  children: React.ReactNode;
  safeSetState: (stateUpdate: Partial<IState>) => void;
  isLast: boolean;
}
function WhiteContainer({ children, step, safeSetState, isLast }: IProps) {
  return (
    <Grid container>
      <Grid item xs={3}>
        <FormStepper step={step} />
      </Grid>
      <ContainerGrid>{children}</ContainerGrid>
      {isLast ? (
        <ButtonGrid>
          <ButtonContainer safeSetState={safeSetState} step={step} />
        </ButtonGrid>
      ) : null}
    </Grid>
  );
}

export default WhiteContainer;
