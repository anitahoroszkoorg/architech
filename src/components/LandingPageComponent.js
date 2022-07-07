import React from "react";
import image from "../images/imagegrid.png";
import { Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid } from "@material-ui/core";
import logo from "../images/logo.png";
const theme = createTheme({
  palette: {
    primary: {
      main: "#FBC02D",
    },
  },
});

function LandingPageComponent() {
  return (
    <>
      {" "}
      <Grid
        item
        style={{ marginTop: 15, marginLeft: 20, position: "absolute" }}
      >
        <img src={logo} style={{ height: 75 }} />
      </Grid>
      <Grid
        container
        alignItems="center"
        direction="row"
        style={{
          backgroundImage: `url(${image})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid container direction="column" alignItems="center">
          <Grid item xs={5}>
            <Typography sx={{ color: "white", fontSize: "36px" }}>
              Witamy w Architech{" "}
            </Typography>
          </Grid>
          <Grid item>
            {" "}
            <Typography sx={{ color: "white", marginBottom: "10px" }}>
              Zmieniamy polski przemysł budowlany
            </Typography>
          </Grid>
          <Grid item>
            {" "}
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                sx={{ color: "white", borderRadius: 70 }}
              >
                <Typography variant="button" display="block">
                  Zarejestruj się
                </Typography>
              </Button>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default LandingPageComponent;
