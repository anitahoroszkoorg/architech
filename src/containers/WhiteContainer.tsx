import { Grid } from "@mui/material";
import FormStepper from "components/Form/FormStepper";
function WhiteContainer({ children, step }: any) {
  console.log(step);
  return (
    <Grid container>
      <Grid item xs={3}>
        <FormStepper step={step} />
      </Grid>
      <Grid container xs={9} sx={{ display: { xs: "none", md: "flex" } }}>
        {children}
      </Grid>
    </Grid>
  );
}

export default WhiteContainer;
