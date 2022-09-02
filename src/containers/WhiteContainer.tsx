import { Grid } from "@mui/material";
import FormStepper from "components/Form/FormStepper";
import { IState } from "components/Form/types";
import ButtonContainer from "components/Form/FormButton/ButtonContainer";

interface IProps {
  step: number;
  children: React.ReactNode;
  safeSetState: (stateUpdate: Partial<IState>) => void;
  isLast: boolean;
}
function WhiteContainer({ children, step, safeSetState, isLast }: IProps) {
  return (
    <Grid container>
      <Grid item xs={3} sx={{ display: { xs: "none", md: "block" } }}>
        <FormStepper step={step} />
      </Grid>
      <Grid container xs={9} sx={{ display: { xs: "none", md: "flex" } }}>
        {children}
      </Grid>
      <Grid container sx={{ display: { xs: "flex", md: "none" }, ml: 5 }}>
        {children}
      </Grid>
      {isLast ? (
        <>
          <Grid
            container
            xs={11}
            justifyContent="flex-start"
            sx={{ mt: 3, ml: 3, display: { xs: "flex", md: "none" } }}
          >
            <ButtonContainer safeSetState={safeSetState} step={step} />
          </Grid>
          <Grid
            container
            xs={11}
            justifyContent="flex-end"
            sx={{ mt: 3, ml: 3, display: { xs: "none", md: "flex" } }}
          >
            <ButtonContainer safeSetState={safeSetState} step={step} />
          </Grid>
        </>
      ) : null}
    </Grid>
  );
}

export default WhiteContainer;
