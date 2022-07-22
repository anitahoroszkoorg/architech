import React from "react";
import ResponsiveAppBar from "../AppBar/ResponsiveAppBar";
import FormContainer from "./FormContainer";
import form from "../../images/form.jpg";
import { makeStyles } from "@mui/styles";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles({
  imgStyle: {
    height: "40vh",
    width: "100%",
  },
});
function Form() {
  const classes = useStyles();
  return (
    <Grid>
      <ResponsiveAppBar />
      <img src={form} className={classes.imgStyle} />
      <FormContainer />
    </Grid>
  );
}

export default Form;
