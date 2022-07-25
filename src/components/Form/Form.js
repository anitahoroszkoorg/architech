import React from "react";
import ResponsiveAppBar from "../AppBar/ResponsiveAppBar";
import FormContainer from "./FormContainer";
import form from "../../images/form.jpg";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  imgStyle: {
    height: "40vh",
    width: "100%",
  },
});
function Form() {
  const classes = useStyles();
  return (
    <>
      <ResponsiveAppBar />
      <img src={form} className={classes.imgStyle} />
      <FormContainer />
    </>
  );
}

export default Form;
