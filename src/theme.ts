import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#FBC02D",
          color: "#FFFFFF",
          fontSize: "1rem",
          "&:hover": {
            backgroundColor: "#FBC02D",
          },
          borderRadius: 70,
          marginTop: 15,
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        root: {
          orientation: "vertical",
          margin: 7,
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#0C5089",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

export default theme;
