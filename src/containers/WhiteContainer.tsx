import { Grid } from "@mui/material";
import FormStepper from "components/Form/FormStepper";
import { IState } from "components/Form/types";
import ButtonContainer from "components/Form/FormButton/ButtonContainer";
import ButtonGrid from "./ButtonGrid";
import ContainerGrid from "./ContainerGrid";

interface IProps {
  children: React.ReactNode;
  isLast: boolean;
}
function WhiteContainer({ children, isLast }: IProps) {
  return (
    <Grid container>
      <Grid item xs={3}>
        <FormStepper />
      </Grid>
      <ContainerGrid>{children}</ContainerGrid>
      {isLast ? (
        <ButtonGrid>
          <ButtonContainer />
        </ButtonGrid>
      ) : null}
    </Grid>
  );
}

export default WhiteContainer;
