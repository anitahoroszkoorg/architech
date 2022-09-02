import ResponsiveAppBar from "../AppBar/ResponsiveAppBar";
import FormContainer from "./FormContainer";
import form from "images/formpage.png";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
const useStyles = makeStyles({
  imgStyleMD: {
    height: "40vh",
    width: "100%",
    margin: 0,
    padding: 0,
  },
  imgStyleXS: {
    height: "20vh",
    width: "100%",
    margin: 0,
    padding: 0,
  },
});
function Form() {
  const classes = useStyles();
  return (
    <>
      <ResponsiveAppBar />
      <Grid item sx={{ display: { xs: "none", md: "flex" } }}>
        <img src={form} className={classes.imgStyleMD} />
      </Grid>
      <Grid item sx={{ display: { xs: "flex", md: "none" } }}>
        <img src={form} className={classes.imgStyleXS} />
      </Grid>
      <FormContainer />
    </>
  );
}

export default Form;
