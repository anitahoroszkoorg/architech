import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import DropBox from "components/Form/Documents/DropBox";

const documents = [
  "Referencje",
  "Certyfikat systemu jakości ISO",
  "Certyfikat Systemu jakości AQAP",
  "Certyfikat ZKP",
];

function Documents() {
  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        sx={{ color: "primary.main", marginTop: 2 }}
      >
        Wymagane dokumenty
      </Typography>
      <Grid container>
        <Grid item xs={5} sx={{ marginTop: 5 }}>
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
        <Grid item xs={1} sx={{ marginTop: 5 }}>
          <DropBox />
        </Grid>
      </Grid>
    </>
  );
}

export default Documents;
