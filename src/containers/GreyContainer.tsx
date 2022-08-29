import { Divider, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import ButtonContainer from "components/Form/FormButton/ButtonContainer";
import { IState } from "components/Form/types";

interface IProps {
  step: number;
  children: JSX.Element | JSX.Element[];
  safeSetState: (stateUpdate: Partial<IState>) => void;
  shouldShowAllFields: boolean;
  setShouldShowAllFields: (shouldShowAllFields: boolean) => void;
}

const useStyles = makeStyles({
  containerStyle: {
    backgroundColor: "#F1F1F1",
    marginTop: 30,
  },
});
function GreyContainer({
  children,
  safeSetState,
  step,
  shouldShowAllFields,
}: IProps) {
  const classes = useStyles();
  if (shouldShowAllFields) {
    return (
      <Grid container className={classes.containerStyle}>
        <Divider sx={{ width: "100%" }} />
        <Grid item xs={3} />
        {/* replace with styles */}
        <Grid container xs={9}>
          {children}
        </Grid>
        <Grid container xs={11} justifyContent="flex-end">
          <ButtonContainer safeSetState={safeSetState} step={step} />
        </Grid>
      </Grid>
    );
  }
  return null;
}

export default GreyContainer;
