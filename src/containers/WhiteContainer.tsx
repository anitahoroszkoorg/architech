import { Grid } from "@mui/material";
import FormStepper from "components/Form/FormStepper";
import { IState } from "components/Form/types";
import ButtonContainer from "components/Form/FormButton/ButtonContainer";

interface IProps {
  step: number;
  children: JSX.Element;
  safeSetState: (stateUpdate: Partial<IState>) => void;
  isLast: boolean;
}
function WhiteContainer({ children, step, safeSetState, isLast }: IProps) {
  return (
    <Grid container>
      <Grid item xs={3}>
        <FormStepper step={step} />
      </Grid>
      <Grid container xs={9}>
        {children}
      </Grid>
      {isLast ? (
        <Grid container justifyContent="flex-end">
          <ButtonContainer safeSetState={safeSetState} step={step} />
        </Grid>
      ) : null}
    </Grid>
  );
}

export default WhiteContainer;
