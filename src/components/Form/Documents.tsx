import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import DropBox from "components/DocumentsUpload/DropBox";

const documents = [
  "Referencje",
  "Certyfikat systemu jakości ISO",
  "Certyfikat Systemu jakości AQAP",
  "Certyfikat ZKP",
];

function Documents() {
  return (
    <Grid container flexDirection="column">
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        sx={{ color: "primary.main" }}
      >
        Wymagane dokumenty
      </Typography>
      <Grid container>
        <Grid item sx={{ marginTop: 5 }}>
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
        <Grid item sx={{ marginTop: 5 }}>
          <DropBox />
        </Grid>
      </Grid>
      <Grid container>
      </Grid>
    </Grid>
  );
}

export default Documents;
