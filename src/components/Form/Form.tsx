import ResponsiveAppBar from "../AppBar/ResponsiveAppBar";
import FormContainer from "./FormContainer";
import { makeStyles } from "@mui/styles";
import { form } from "config";
const useStyles = makeStyles({
  imgStyle: {
    height: "40vh",
    width: "100%",
    margin: 0,
    padding: 0,
  },
});
function Form() {
  const classes = useStyles();
  return (
    <>
      <ResponsiveAppBar />
      <img src={form} className={classes.imgStyle} />
      <FormContainer />
    </>
  );
}

export default Form;
