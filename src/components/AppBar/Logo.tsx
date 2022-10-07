import { logo } from "config";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  logoStyle: {
    width: "100%",
  },
});
const Logo = () => {
  const classes = useStyles();
  return (
    <Link to="/">
      <img src={logo} className={classes.logoStyle} alt="logo" />
    </Link>
  );
};

export default Logo;
