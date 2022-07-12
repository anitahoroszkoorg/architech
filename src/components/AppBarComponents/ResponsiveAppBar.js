import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Grid } from "@mui/material";
import Pages from "./Page";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

const SmallAppBar = () => {
  return (
    <Grid container sx={{ display: { xs: "flex", md: "none" } }}>
      <AppBar position="sticky" color="secondary">
        <Grid container direction="row" alignItems="center">
          <Toolbar>
            <Grid item xs={2}>
              <Logo />
            </Grid>
            <Grid container justifyContent="flex-end">
              <Pages />
            </Grid>
            <NavMenu />
          </Toolbar>
        </Grid>
      </AppBar>
    </Grid>
  );
};
const LargeAppBar = () => {
  return (
    <Grid container sx={{ display: { xs: "none", md: "flex" } }}>
      <AppBar position="sticky" color="secondary">
        <Grid container direction="row" alignItems="center" test-id="xd">
          <Toolbar>
            <Grid item xs={2}>
              <Logo />
            </Grid>
            <Grid container justifyContent="flex-end">
              <Pages />
            </Grid>
            <NavMenu />
          </Toolbar>
        </Grid>
      </AppBar>
    </Grid>
  );
};
const ResponsiveAppBar = () => {
  return (
    <Grid container>
      <Grid
        component={SmallAppBar}
        sx={{ display: { xs: "flex", md: "none" } }}
      ></Grid>
      <Grid
        component={LargeAppBar}
        sx={{ display: { xs: "none", md: "none" } }}
      ></Grid>
    </Grid>
  );
};
export default ResponsiveAppBar;
