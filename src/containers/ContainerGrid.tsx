import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface IProps {
  children: React.ReactNode;
}

function ContainerGridSmall({ children }: IProps) {
  return (
    <Grid container columns={8} xs={4} justifyContent="center">
      {children}
    </Grid>
  );
}
function ContainerGridLarge({ children }: IProps) {
  return (
    <Grid container xs={9}>
      {children}
    </Grid>
  );
}
function ContainerGrid({ children }: IProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.only("xs"));
  if (matches) {
    return <ContainerGridSmall>{children}</ContainerGridSmall>;
  } else {
    return <ContainerGridLarge>{children}</ContainerGridLarge>;
  }
}

export default ContainerGrid;
