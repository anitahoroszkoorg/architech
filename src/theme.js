import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        lpbutton: {
          backgroundColor: "#FBC02D",
          color: "#FFFFFF",
          fontSize: "1rem",
          "&:hover": {
            backgroundColor: "#FBC02D",
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#FBC02D",
    },
    secondary: {
      main: "#d32f2f",
    },
  },
});

export default theme;
