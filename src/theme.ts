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
    // MuiStepper: {
    //   styleOverrides: {
    //     root: {
    //       fill: "#0C5089",
    //       color: "#0C5089",
    //       height: 50,
    //     },
    //   },
    // },

    // MuiStepIcon: {
    //   styleOverrides: {
    //     root: {
    //       width: 14,
    //       fill: "#0C5089",
    //       color: "#0C5089",
    //     },
    //     text: {
    //       fill: "#0C5089",
    //       color: "#0C5089",
    //     },

    //     completed: {
    //       fill: "#0C5089",
    //       color: "#0C5089",
    //     },
    //   },
    // },
  //   MuiStepLabel: {
  //     styleOverrides: {
  //       labelContainer: {
  //         color: "#0C5089",
  //       },
  //     },
  //   },
  },
  palette: {
    primary: {
      main: "#FBC02D",
    },
    secondary: {
      main: "#FFFFFF",
      light: "#495057",
    },
    info: {
      main: "#0C5089",
    },
  },
});

export default theme;
