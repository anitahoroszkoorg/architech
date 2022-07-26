import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Grid } from "@mui/material";
import PageList from "./PageList";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

const SmallAppBar = () => {
  return (
    <Grid container flexDirection="row">
      <Toolbar>
        <Grid item xs={2}>
          <Logo />
        </Grid>
        <Grid container justifyContent="flex-end">
          <NavMenu />
        </Grid>
      </Toolbar>
    </Grid>
  );
};
const LargeAppBar = () => {
  return (
    <Grid container direction="row" alignItems="center">
      <Toolbar>
        <Grid item xs={2}>
          <Logo />
        </Grid>
        <Grid container justifyContent="flex-end">
          <PageList />
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
