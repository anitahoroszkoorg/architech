import { Box, Grid } from "@mui/material";
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
      <Grid item xs={12} md={5} lg={3}>
        <FormStepper step={step} />
      </Grid>
      <Grid container xs={12} md={7} lg={8} spacing={4}>
        <Box sx={{ mt: 4, mb: 2, ml: 5 }}>{children}</Box>
      </Grid>
      {isLast ? (
        <Grid container xs={11} justifyContent="flex-end">
          <ButtonContainer safeSetState={safeSetState} step={step} />
        </Grid>
      ) : null}
    </Grid>
  );
}

export default WhiteContainer;
