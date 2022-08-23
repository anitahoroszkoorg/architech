import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { pages } from "const";

const PageList = () => {
  return (
    <>
      {pages.map((page) => (
        <Grid key={`${page}_grid`} item xs={2}>
          <Typography>{page}</Typography>
        </Grid>
      ))}
    </>
  );
};

export default PageList;
