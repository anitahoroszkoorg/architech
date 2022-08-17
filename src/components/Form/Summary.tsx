import { Grid, Typography } from "@mui/material";
import WhiteContainer from "containers/WhiteContainer";
import { makeStyles } from "@material-ui/core";
import Footer from "components/Footer/Footer";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  pdf: {
    backgroundColor: "#F1F1F1",
    height: 600,
    width: 400,
  },
  pdfTxt: {
    padding: 20,
  },
});
function Summary({ step }: any) {
  const classes = useStyles();

  return (
    <>
      <WhiteContainer step={step}>
        <Grid container>
          <Grid item xs={10} className={classes.pdfTxt}>
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              sx={{ color: "primary.main" }}
            >
              Dziękujemy
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              component="div"
              sx={{ color: "primary.main" }}
            >
              Dane z twojej ankiety zostały przesłane do weryfikacji
            </Typography>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                sx={{ color: "info.main" }}
              >
                Powrót do strony głównej
              </Typography>
            </Link>
            <Grid item className={classes.pdf}></Grid>
          </Grid>
        </Grid>
      </WhiteContainer>
      <Footer />
    </>
  );
}

export default Summary;
