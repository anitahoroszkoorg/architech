import { Typography } from "@mui/material";
import { fieldsConfig } from "../../../const";
import TextFieldList from "../TextFieldList";

const RemainingInfo = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom component="div">
        Pozostałe informacje
      </Typography>
      <TextFieldList fieldList={fieldsConfig.commercialFields} />
    </>
  );
};

export default RemainingInfo;
