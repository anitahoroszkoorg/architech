import { Divider, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import ButtonContainer from "components/Form/FormButton/ButtonContainer";
import { IState } from "components/Form/types";

interface IProps {
  step: number;
  children: JSX.Element | JSX.Element[];
  safeSetState: (stateUpdate: Partial<IState>) => void;
}

const useStyles = makeStyles({
  containerStyle: {
    backgroundColor: "#F1F1F1",
    marginTop: 30,
  },
});
function GreyContainer({ children, safeSetState, step }: IProps) {
  const classes = useStyles();
  return (
    <Grid container className={classes.containerStyle}>
      <Divider sx={{ width: "100%" }} />
      <Grid item xs={3} sx={{ display: { xs: "none", md: "block" } }} />
      <Grid container xs={9} sx={{ display: { xs: "none", md: "flex" } }}>
        {children}
      </Grid>
      <Grid container sx={{ display: { xs: "flex", md: "none" }, ml: 5 }}>
        {children}
      </Grid>
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
    </Grid>
  );
}

export default GreyContainer;
