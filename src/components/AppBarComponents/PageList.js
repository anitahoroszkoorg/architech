import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Pages from "./Pages";

const PageList = () => {
  return Pages.map((page) => {
    return (
      <Grid item xs={2}>
        <Typography variant="subtitle2" inline>
          {page}
        </Typography>
      </Grid>
    );
  });
};

export default PageList;
