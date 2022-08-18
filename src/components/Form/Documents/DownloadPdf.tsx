import { Grid, Typography } from "@mui/material";
import React from "react";
import DropBox from "./DropBox";
import DownloadIcon from "@mui/icons-material/Download";
import GreyContainer from "containers/GreyContainer";
const documentSteps = [
  <Grid item xs={12}>
    <Typography>
      1. Sprawdź wprowadzone dane i pobierz dokument z wypełnioną ankietą
    </Typography>
  </Grid>,
  <Grid item xs={12}>
    <Typography>
      2. Wydrukuj swoją ankietę i podpisz w wyznaczonym polu
    </Typography>
  </Grid>,
  <Grid item xs={12}>
    <Typography>3.Załącz skan podpisanego dokumentu</Typography>
  </Grid>,
];

function DownloadPdf() {
  return (
    <>
      <DownloadIcon
        fontSize="large"
        sx={{ color: "info.main", mr: 1, mt: 2 }}
      />
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        sx={{ color: "info.main", mt: 2 }}
      >
        Pobierz dokument PDF z ankietą
      </Typography>
      <Grid container>
        <Grid item xs={5} sx={{ padding: 1 }}>
          {documentSteps.map((step) => (
            <Typography sx={{ color: "primary.main", mt: 1 }}>
              {step}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={5}>
          <DropBox />
        </Grid>
      </Grid>
    </>
  );
}

export default DownloadPdf;
