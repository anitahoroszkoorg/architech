import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0C5089",
    },
    secondary: {
      main: "#FFFFFF",
    },
    info: {
      main: "#FBC02D",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#FBC02D",
          color: "#FFFFFF",
          fontSize: "1rem",
          "&:hover": {
            backgroundColor: "info.main",
          },
          borderRadius: 70,
          marginTop: 15,
          marginBottom: 7,
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: "#0C5089",
        },
      },
    },
  },
});

export default theme;
