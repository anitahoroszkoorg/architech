import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface IProps {
  children: React.ReactNode;
}

function ButtonGridSmall({ children }: IProps) {
  return (
    <Grid container xs={12} justifyContent="center" sx={{ mt: 3 }}>
      {children}
    </Grid>
  );
}
function ButtonGridLarge({ children }: IProps) {
  return (
    <Grid container xs={12} justifyContent="flex-end" sx={{ mt: 3, mr: 3 }}>
      {children}
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
