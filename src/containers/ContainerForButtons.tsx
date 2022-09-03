import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface IProps {
  children: React.ReactNode;
}

function ButtonGridSmall({ children }: IProps) {
  return (
    <Grid container xs={12} justifyContent="center" sx={{ mt: 3 }}>
      {children} small
    </Grid>
  );
}
function ButtonGridLarge({ children }: IProps) {
  return (
    <Grid container xs={11} justifyContent="flex-end" sx={{ mt: 3 }}>
      {children} large
    </Grid>
  );
}
function ButtonGrid({ children }: IProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.only("xs"));
  if (matches) {
    return <ButtonGridSmall>{children}</ButtonGridSmall>;
  } else {
    return <ButtonGridLarge>{children}</ButtonGridLarge>;
  }
}

export default ButtonGrid;
