import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import DropBox from "components/Form/Documents/DropBox";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

function DocumentsMobile() {
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
      <Grid container justifyContent="center">
        <FormGroup>
          <FormControlLabel
            disabled
            control={<Checkbox />}
            label="References"
          />
        </FormGroup>
        <Grid item xs={12} sx={{ marginTop: 2 }}>
          <Grid container justifyContent="center">
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              browse files on your device
            </Typography>
            <DriveFolderUploadIcon fontSize="large" color="disabled" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
function DocumentsDesktop() {
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
        <FormGroup>
          <FormControlLabel
            disabled
            control={<Checkbox />}
            label="References"
          />
        </FormGroup>
        <Grid item xs={12} sx={{ marginTop: 2 }}>
          <DropBox />
        </Grid>
      </Grid>
    </>
  );
}

function Documents() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return matches ? <DocumentsDesktop /> : <DocumentsMobile />;
}

export default Documents;
