import { Button, Typography } from "@mui/material";
import { Grid } from "@material-ui/core";
import { imageGrid, logo } from "config";
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
    backgroundImage: `url(${imageGrid})`,
    height: "100vh",
  },
  logo: {
    marginTop: 15,
    marginLeft: 20,
    position: "absolute",
    height: "30%",
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
            Welcome to Architech
          </Typography>
          <Typography variant="h6" className={classes.typoStyle}>
            Revolutionizing architecture{" "}
          </Typography>
          <Typography variant="h6" className={classes.typoStyle} sx={{ mb: 2 }}>
            since 1990
          </Typography>
          <Button variant="contained">
            <Link to="form" className={classes.link}>
              REGISTER
            </Link>
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
