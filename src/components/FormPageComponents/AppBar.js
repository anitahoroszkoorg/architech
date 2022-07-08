import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../images/logo.png";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  imgStyle: {
    width: "150px",
  },
});

function ButtonAppBar() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <img src={logo} className={classes.imgStyle} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 4 }}
          ></Typography>
          <Button color="inherit">Ankieta kwalifikacyjna</Button>
          <Button color="inherit">Kodeks Kontrahenta</Button>
          <Button color="inherit">Katalog wymagań</Button>
          <Button color="inherit">Dokumenty</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;
