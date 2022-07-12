import React from "react";
import form from "../../images/form.jpg";
import { makeStyles } from "@material-ui/core";
// import ResponsiveAppBar from "./ResponsiveMenuAppBar";
import NewAppBar from "./NewAppBar";
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
      <NewAppBar color="secondary" />
      <img src={form} className={classes.imgStyle} />
    </>
  );
}

export default FormPageComponent;
