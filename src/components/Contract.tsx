import { useContext } from "react";
import { ApiContext, SubmitInfoRequestBody } from "hooks/ApiContext";
import { useFormikContext } from "formik";
const Contract = () => {
  const { submitInfo } = useContext(ApiContext);
  const { values } = useFormikContext();
  console.log(values);
  // submitInfo(values)
  return <></>;
};

export default Contract;
