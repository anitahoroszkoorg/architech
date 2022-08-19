import { Typography } from "@mui/material";
import { fieldsConfig } from "const";
import WhiteContainer from "containers/WhiteContainer";
import TextFieldList from "./TextFieldList";
import { IState } from "./types";

interface IProps {
  step: number;
  safeSetState: (stateUpdate: Partial<IState>) => void;
}

const RemainingInfo = ({ step, safeSetState }: IProps) => {
  return (
    <WhiteContainer step={step} safeSetState={safeSetState} isLast>
      <>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{ color: "primary.main" }}
        >
          Pozostałe informacje
        </Typography>
        <TextFieldList fieldList={fieldsConfig.commercialFields} />
      </>
    </WhiteContainer>
  );
};

export default RemainingInfo;
