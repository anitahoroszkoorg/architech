import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";

import DropBox from "components/Form/Documents/DropBox";
const useStyles = makeStyles({
  boxStyle: {
    width: 400,
    height: 200,
    border: "2px dotted grey",
    borderRadius: 30,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 50,
    justifyContent: "center",
  },
  boxStyleMobile: {
    width: 300,
    height: 200,
    border: "2px dotted grey",
    borderRadius: 30,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 50,
    justifyContent: "center",
  },
});

function Documents() {
  const classes = useStyles();

  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        sx={{ color: "primary.main", marginTop: 2 }}
      >
        Required documents
      </Typography>
      <Grid container>
        <Grid item xs={12} sx={{ mt: 5, mb: 5 }}>
          <FormGroup>
            <FormControlLabel
              disabled
              control={<Checkbox />}
              label="References"
            />
          </FormGroup>
        </Grid>
        <Grid
          item
          sx={{ display: { xs: "none", md: "flex" } }}
          className={classes.boxStyle}
        >
          <DropBox />
        </Grid>
        <Grid
          item
          sx={{ display: { xs: "flex", md: "none" } }}
          className={classes.boxStyleMobile}
        >
          <DropBox />
        </Grid>
      </Grid>
    </>
  );
}

export default Documents;
