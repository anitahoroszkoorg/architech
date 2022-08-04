import { Typography } from "@mui/material";
import TextFieldList from "./TextFieldList";
import { fieldsConfig } from "const";
const PrimaryInfo = () => {
  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        sx={{ color: "#0C5089" }}
      >
        Ankieta kwalifikacyjna
      </Typography>
      <TextFieldList fieldList={fieldsConfig.companyInfoFields} />
    </>
  );
};
export default PrimaryInfo;
