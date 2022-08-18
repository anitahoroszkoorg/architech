import { Grid } from "@mui/material";
import FormStepper from "components/Form/FormStepper";
import { IState } from "components/Form/types";
import ButtonContainer from "components/Form/FormButton/ButtonContainer";

interface IProps {
  step: number;
  children: JSX.Element | JSX.Element[];
  safeSetState: (stateUpdate: Partial<IState>) => void;
  isLast: boolean;
}
function WhiteContainer({ children, step, safeSetState, isLast }: IProps) {
  console.log(step);
  return (
    <Grid container>
      <Grid item xs={3}>
        <FormStepper step={step} />
      </Grid>
      <Grid container xs={9} sx={{ display: { xs: "none", md: "flex" } }}>
        {children}
      </Grid>
      <Grid container xs={10} justifyContent="flex-end">
        {isLast ? (
          <ButtonContainer safeSetState={safeSetState} step={step} />
        ) : null}
      </Grid>
    </Grid>
  );
}

export default WhiteContainer;
