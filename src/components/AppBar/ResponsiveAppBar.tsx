import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Grid } from "@mui/material";
import Logo from "./Logo";

const SmallAppBar = () => {
  return (
    <Grid container>
      <Toolbar>
        <Grid item xs={3}>
          <Logo />
        </Grid>
      </Toolbar>
    </Grid>
  );
};
const LargeAppBar = () => {
  return (
    <Grid container>
      <Toolbar>
        <Grid item xs={5}>
          <Logo />
        </Grid>
      </Toolbar>
    </Grid>
  );
};
const ResponsiveAppBar = () => {
  return (
    <AppBar position="sticky" color="secondary">
      <Grid sx={{ display: { xs: "flex", md: "none" } }}>
        <SmallAppBar />
      </Grid>
      <Grid sx={{ display: { xs: "none", md: "flex" } }}>
        <LargeAppBar />
      </Grid>
    </AppBar>
  );
};
export default ResponsiveAppBar;
