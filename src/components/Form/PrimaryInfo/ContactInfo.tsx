import { Typography } from "@mui/material";
import TextFieldList from "../TextFieldList";
import { fieldsConfig } from "const";
function ContactInfo() {
  return (
    <>
      <Typography
        variant="subtitle2"
        gutterBottom
        component="div"
        sx={{ color: "#495057", fontWeight: "bold", mt:2 }}
      >
        Dane Kontaktowe
      </Typography>
      <TextFieldList fieldList={fieldsConfig.contactFields} />
    </>
  );
}

export default ContactInfo;
