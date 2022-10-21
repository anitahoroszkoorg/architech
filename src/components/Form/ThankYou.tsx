import { Grid, Typography } from "@mui/material";
import WhiteContainer from "containers/WhiteContainer";
import Footer from "components/Footer/Footer";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <>
      <WhiteContainer isLast>
        <>
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
            </Grid>
          </Grid>
        </>
      </WhiteContainer>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </>
  );
}

export default ThankYou;
