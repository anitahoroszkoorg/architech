import { makeStyles } from "@material-ui/core";

interface IProps {
  step: number;
}
const useStyles = makeStyles(() => ({
  active: {
    height: 14,
    width: 14,
    backgroundColor: "#0C5089",
    borderRadius: 50,
  },
  disabled: {
    height: 14,
    width: 14,
    backgroundColor: "#C4C4C4",
    borderRadius: 50,
  },
  completed: {
    height: 14,
    width: 14,
    backgroundColor: "white",
    border: "1px solid #0C5089",
    borderRadius: 50,
  },
}));
function CustomIcon() {
  const classes = useStyles();

  return <div className={classes.completed}></div>;
}

export default CustomIcon;
