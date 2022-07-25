import { Button } from "@mui/material";

const FormButton = ({ label, changeStep }) => {
  return (
    <Button variant="contained" sx={{ marginLeft: 2 }} onClick={changeStep}>
      {label}
    </Button>
  );
};

export default FormButton;
