import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Grid } from "@mui/material";
import Pages from "./PageList";
import Logo from "./Logo";
import NavMenuComponent from "./NavMenu";

const ResponsiveAppBar = () => {
  return (
    <AppBar position="sticky" color="secondary">
      <Grid container direction="row" alignItems="center" test-id="xd">
        <Toolbar>
          <Grid item xs={2} sx={{
            display: {
              xs: "flex", md: "none"
            }
          }}>
            <Logo />
          </Grid>
          <Grid item xs={2} sx={{ display: { xs: "none", md: "flex" } }}>
            <Logo />
          </Grid>
          <Grid container justifyContent="flex-end">
            <Pages />
          </Grid>
          <NavMenuComponent />
        </Toolbar>
      </Grid>
    </AppBar>
  );
};
export default ResponsiveAppBar;
