import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import pages from "../../const";

const PageList = () => {
  return (
    <>
      {pages.map((page) => (
        <Grid item xs={2}>
          <Typography variant="subtitle2" inline>
            {page}
          </Typography>
        </Grid>
      ))}
    </>
  );
};

export default PageList;