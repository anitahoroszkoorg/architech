import { Grid } from "@mui/material";
import WhiteContainer from "containers/WhiteContainer";
import Footer from "components/Footer/Footer";
import Contract from "components/Contract";

function Summary() {
  return (
    <>
      <WhiteContainer isLast>
        <Contract />
      </WhiteContainer>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </>
  );
}

export default Summary;
