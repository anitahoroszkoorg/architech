import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FBC02D",
    },
    secondary: {
      main: "#d32f2f",
    },
  },
  lpbutton: {
    backgroundColor: "#FBC02D",
    borderRadius: 70,
  },
});

export default theme;
