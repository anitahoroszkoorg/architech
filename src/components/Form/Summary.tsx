import { Grid, Typography } from "@mui/material";
import WhiteContainer from "containers/WhiteContainer";
import { makeStyles } from "@material-ui/core";
import Footer from "components/Footer/Footer";
import { Link } from "react-router-dom";
import { IState } from "./types";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface IProps {
  step: number;
  safeSetState: (stateUpdate: Partial<IState>) => void;
}
const useStyles = makeStyles({
  pdf: {
    backgroundColor: "#F1F1F1",
    height: 600,
    width: 400,
    textAlign: "center",
    lineHeight: 35,
  },
  pdfTxt: {
    padding: 20,
  },
});
function DesktopSummary() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={10} className={classes.pdfTxt}>
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
        <div className={classes.pdf}></div>
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
