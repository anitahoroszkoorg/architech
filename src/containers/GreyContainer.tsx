import { Divider, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import ButtonContainer from "components/Form/FormButton/ButtonContainer";
import ContainerGrid from "./ContainerGrid";
import ButtonGrid from "./ButtonGrid";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const useStyles = makeStyles({
  containerStyle: {
    backgroundColor: "#F1F1F1",
    marginTop: 30,
  },
});
function GreyContainer({ children }: IProps) {
  const classes = useStyles();
  return (
    <Grid container className={classes.containerStyle}>
      <Divider sx={{ width: "100%" }} />
      <Grid item xs={3} />
      <ContainerGrid>{children}</ContainerGrid>
      <ButtonGrid>
        <ButtonContainer />
      </ButtonGrid>
    </Grid>
  );
}

export default GreyContainer;
