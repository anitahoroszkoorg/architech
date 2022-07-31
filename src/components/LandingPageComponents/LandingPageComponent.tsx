import image from "images/imagegrid.png";
import { Button, Typography } from "@mui/material";
import { Grid } from "@material-ui/core";
import logo from "images/logo.png";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  typoStyle: {
    color: "white",
  },
  gridStyle: {
    alignItems: "center",
    textAlign: "center",
  },
  background: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    alignItems: "center",
    backgroundImage: `url(${image})`,
    height: "100vh",
  },
  logo: {
    marginTop: 15,
    marginLeft: 20,
    position: "absolute",
    height: 75,
  },
  link: {
    textDecoration: "none",
    color: "white",
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
          <Typography variant="h4" className={classes.typoStyle}>
            Witamy w Architech
          </Typography>
          <Typography variant="h6" className={classes.typoStyle}>
            Zmieniamy polski przemysł budowlany
          </Typography>
          <Button variant="contained">
            <Link to="form" className={classes.link}>
              Zarejestruj się
            </Link>
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
