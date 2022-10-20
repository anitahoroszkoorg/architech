import WhiteContainer from "containers/WhiteContainer";
import { useFormikContext } from "formik";
import { Grid, Typography } from "@mui/material";
import { SubmitInfoRequestBody } from "hooks/ApiContext";
import { dataToVerify } from "./dataToVerify";
function Summary() {
  const { values } = useFormikContext<SubmitInfoRequestBody>();
  console.log(values);
  console.log(Object.values(values));
  const result = dataToVerify();
  return (
    <WhiteContainer isLast>
      <Grid container>
        <Grid item xs={10}>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            sx={{ color: "primary.main", mt: 2 }}
          >
            Thank you!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "error.main",
              textDecoration: "underline",
              mb: 2,
            }}
          >
            Please check if all information below is correct before moving on to
            generate the contract.
          </Typography>
          {result}
        </Grid>
      </Grid>
    </WhiteContainer>
  );
}

export default Summary;
