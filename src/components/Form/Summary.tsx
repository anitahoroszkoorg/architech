import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import WhiteContainer from "containers/WhiteContainer";
import Footer from "components/Footer/Footer";
import Contract from "components/Form/Contract";

function DesktopSummary() {
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
              sx={{ color: "primary.main", mt: 2, ml: 2 }}
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

function MobileSummary() {
  return (
    <>
      <WhiteContainer isLast>
        <>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            sx={{ color: "primary.main", marginTop: 2 }}
          >
            Please verify all your information in the contract.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            component="div"
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Click here to download the PDF file of your contract.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            component="div"
            sx={{ color: "primary.main", mt: 2 }}
          >
            If all data is correct, please proceed and we'll begin the
            verification process.
          </Typography>
          <Grid container justifyContent="center">
            <Grid item xs={12} sx={{ marginTop: 2 }}>
              <Grid container justifyContent="center"></Grid>
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
function Summary() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return matches ? <DesktopSummary /> : <MobileSummary />;
}
export default Summary;
