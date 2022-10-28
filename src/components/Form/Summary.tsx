import { Grid, Typography } from "@mui/material";
import WhiteContainer from "containers/WhiteContainer";
import Footer from "components/Footer/Footer";
import Contract from "components/Form/Contract";

function Summary() {
  return (
    <>
      <WhiteContainer isLast>
        <Grid container flexDirection="column">
          <Grid item>
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              sx={{ color: "primary.main", mt: 2, ml: 2 }}
            >
              Please verify all your information in the contract.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              component="div"
              sx={{ color: "black", mt: 2, ml: 2 }}
            >
              If all data is correct, please proceed and we'll begin the
              verification process.
            </Typography>
          </Grid>
          <Grid item>
            <Contract />
          </Grid>
        </Grid>
      </WhiteContainer>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </>
  );
}

export default Summary;
