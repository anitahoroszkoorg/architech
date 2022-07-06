import React from "react";
import image from "../images/imagegrid.png";
import { Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FBC02D",
    },
  },
});

function LandingPageComponent() {
  return (
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
            Witamy w Bude-Exert{" "}
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
  );
}

export default LandingPageComponent;
