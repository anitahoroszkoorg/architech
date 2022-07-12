import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
const pages = [
  "Ankieta kwalifikacyjna",
  "Kodeks Kontrahenta",
  "Katalog wymagań",
  "Dokumenty",
];
const Pages = () => {
  return pages.map((page) => (
    <Grid item xs={2}>
      <Typography
        variant="subtitle2"
        inline
        sx={{ display: { xs: "none", md: "flex" }, width: "100%" }}
      >
        {page}
      </Typography>
      <Typography
        inline
        variant="subtitle2"
        sx={{ display: { xs: "none", md: "none" } }}
      >
        {page}
      </Typography>
    </Grid>
  ));
};

export default Pages;
