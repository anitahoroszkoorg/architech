import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e4057",
    },
    secondary: {
      main: "#FFFFFF",
    },
    info: {
      main: "#2e4057",
    },
    error: {
      main: "#d32f2f",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#99c24d",
          color: "#FFFFFF",
          fontSize: "1rem",
          "&:hover": {
            backgroundColor: "info.main",
          },
          borderRadius: 70,
        },
        outlined: {
          backgroundColor: "#FFFFFF",
          color: "#99c24d",
          fontSize: "0.75rem",
          "&:hover": {
            backgroundColor: "info.main",
          },
          borderRadius: 70,
          marginRight: 15,
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
    MuiTextField: {
      styleOverrides: {
        root: {
          maxWidth: "25ch",
        },
      },
    },
  },
});

export default theme;
