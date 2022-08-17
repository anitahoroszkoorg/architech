import { Typography } from "@mui/material";
import { fieldsConfig } from "const";
import WhiteContainer from "containers/WhiteContainer";
import TextFieldList from "./TextFieldList";

const RemainingInfo = ({ step }: any) => {
  return (
    <WhiteContainer step={step}>
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        sx={{ color: "primary.main" }}
      >
        Pozostałe informacje
      </Typography>
      <TextFieldList fieldList={fieldsConfig.commercialFields} />
    </WhiteContainer>
  );
};

export default RemainingInfo;
