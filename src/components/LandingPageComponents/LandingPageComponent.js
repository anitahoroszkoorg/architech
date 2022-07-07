import React from "react";
import image from "../../images/imagegrid.png";
import { Button, Typography } from "@mui/material";
import { Grid } from "@material-ui/core";
import logo from "../../images/logo.png";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  typoStyle: {
    color: "white",
    padding: 5,
  },
  gridStyle: {
    alignItems: "center",
    textAlign: "center",
  },
  background: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    alignItems: "center",
    direction: "row",
    backgroundImage: `url(${image})`,
    height: "100vh",
  },
  logo: {
    marginTop: 15,
    marginLeft: 20,
    position: "absolute",
    height: 75,
  },
});

export default function LandingPageComponent() {
  const classes = useStyles();
  return (
    <>
      <Grid item className={classes.logo}>
        <img src={logo} className={classes.logo} />
      </Grid>
      <Grid container className={classes.background}>
        <Grid container direction="column" className={classes.gridStyle}>
          <Grid item xs={5}>
            <Typography variant="h4" className={classes.typoStyle}>
              Witamy w Architech
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" className={classes.typoStyle}>
              Zmieniamy polski przemysł budowlany
            </Typography>
          </Grid>
          <Grid item>
            <Button contained lpbutton>
              <Typography variant="button">Zarejestruj się</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
