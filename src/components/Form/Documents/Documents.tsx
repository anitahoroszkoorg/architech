import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import DropBox from "components/Form/Documents/DropBox";

const documents = ["References"];

function Documents() {
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
        <Grid item xs={12} sx={{ marginTop: 5 }}>
          <FormGroup>
            {documents.map((document) => (
              <>
                <FormControlLabel
                  disabled
                  control={<Checkbox />}
                  label={document}
                />
              </>
            ))}
          </FormGroup>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: 5 }}>
          <DropBox />
        </Grid>
      </Grid>
    </>
  );
}

export default Documents;
