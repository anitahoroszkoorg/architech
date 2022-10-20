import { Grid, Typography } from "@mui/material";
import WhiteContainer from "containers/WhiteContainer";
import { makeStyles } from "@material-ui/core";
import Footer from "components/Footer/Footer";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Contract from "components/Contract";

const useStyles = makeStyles({
  pdf: {
    height: 1200,
    width: 900,
  },
});
function DesktopSummary() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={10}>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ color: "primary.main", marginTop: 2 }}
        >
          Thank you!
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          component="div"
          sx={{ color: "primary.main" }}
        >
          Your questionnaire data has been sent for verification.
        </Typography>
        <Link to="/" style={{ textDecorationLine: "underline" }}>
          <Typography variant="body1" gutterBottom component="div">
            Click here to go back to main page.
          </Typography>
        </Link>
        <div className={classes.pdf}>
          <Contract />
        </div>
      </Grid>
    </Grid>
  );
}
function MobileSummary() {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ color: "primary.main" }}
        >
          Thank you!
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          component="div"
          sx={{ color: "primary.main" }}
        >
          Your questionnaire data has been sent for verification
        </Typography>
        <Link to="/" style={{ textDecorationLine: "underline" }}>
          <Typography variant="body1" gutterBottom component="div">
            Click here to go back to main page
          </Typography>
        </Link>
        <Typography
          variant="body1"
          gutterBottom
          component="div"
          style={{ textDecorationLine: "underline" }}
        >
          Click here to download your PDF file
        </Typography>
      </Grid>
    </Grid>
  );
}
function Summary() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.only("xs"));
  return (
    <>
      <WhiteContainer isLast>
        {matches ? <MobileSummary /> : <DesktopSummary />}
      </WhiteContainer>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </>
  );
}

export default Summary;
