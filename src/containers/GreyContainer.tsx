import { Divider, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import ButtonContainer from "components/Form/FormButton/ButtonContainer";
const useStyles = makeStyles({
  containerStyle: {
    backgroundColor: "#F1F1F1",
    marginTop: 30,
    marginBottom: 30,
  },
});
function GreyContainer({ children, safeSetState, state, isLast }: any) {
  const classes = useStyles();

  return (
    <Grid container className={classes.containerStyle}>
      <Divider sx={{ width: "100%" }} />
      <Grid item xs={3}></Grid>
      <Grid container xs={9} sx={{ display: { xs: "none", md: "flex" } }}>
        {children}
      </Grid>
      {isLast ? (
        <ButtonContainer safeSetState={safeSetState} state={state} />
      ) : null}
    </Grid>
  );
}

export default GreyContainer;
