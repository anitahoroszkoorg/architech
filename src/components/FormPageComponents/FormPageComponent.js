import React from "react";
import ButtonAppBar from "./AppBar";
import form from "../../images/form.jpg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  imgStyle: {
    width: "100%",
    height: "60vh",
  },
});

function FormPageComponent() {
  const classes = useStyles();
  return (
    <>
      <ButtonAppBar color="secondary" />
      <img src={form} className={classes.imgStyle} />
    </>
  );
}

export default FormPageComponent;
