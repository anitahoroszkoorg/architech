import React from "react";
import form from "../../images/form.jpg";
import { makeStyles } from "@material-ui/core";
import AppBar from "../AppBarComponents/ResponsiveAppBar";
const useStyles = makeStyles({
  imgStyle: {
    width: "100%",
    height: "40vh",
  },
});

function FormPageComponent() {
  const classes = useStyles();
  return (
    <>
      <AppBar color="secondary" />
      <img src={form} className={classes.imgStyle} />
    </>
  );
}

export default FormPageComponent;
