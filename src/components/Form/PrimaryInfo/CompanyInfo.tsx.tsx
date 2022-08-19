import { Typography } from "@mui/material";
import TextFieldList from "../TextFieldList";
import { fieldsConfig } from "const";
const CompanyInfo = () => {
  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        sx={{ color: "primary.main" }}
      >
        Ankieta kwalifikacyjna
      </Typography>
      <TextFieldList fieldList={fieldsConfig.companyInfoFields} />
    </>
  );
};
export default CompanyInfo;
