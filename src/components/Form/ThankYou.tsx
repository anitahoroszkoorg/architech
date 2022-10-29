import { Grid, Typography } from "@mui/material";
import WhiteContainer from "containers/WhiteContainer";
import Footer from "components/Footer/Footer";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <>
      <WhiteContainer isLast>
        <>
          <Grid container flexDirection="row">
            <Grid item xs={12}>
              <Grid item>
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  sx={{ color: "primary.main", marginTop: 2 }}
                >
                  Thank you!
                </Typography>
              </Grid>
              <Typography
                variant="body1"
                gutterBottom
                component="div"
                sx={{ color: "primary.main" }}
              >
                Your questionnaire data has been sent for verification.
              </Typography>
              <Link to="/" style={{ textDecorationLine: "underline" }}>
                <Typography variant="body1" gutterBottom component="div" fontWeight="bold">
                  Click here to go back to main page.
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </>
        <div style={{ height: 450 }}>{/* {place image here} */}</div>
      </WhiteContainer>
      <Footer />
    </>
  );
}

export default ThankYou;
