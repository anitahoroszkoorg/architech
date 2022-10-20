import { useFormikContext } from "formik";
import { ApiContext, SubmitInfoRequestBody } from "hooks/ApiContext";
import { useContext, useEffect, useState } from "react";

const Contract = () => {
  const { submitInfo } = useContext(ApiContext);
  const { values } = useFormikContext<SubmitInfoRequestBody>();
  const [pdfURL, setPdfURL] = useState("");
  const getCurrentDate = () => {
    const today = new Date();
    return today.toLocaleDateString();
  };
  async function sendFormData() {
    const extendedValues = values;
    extendedValues.currentDate = getCurrentDate();
    const file = await submitInfo(extendedValues);
    setPdfURL(window.URL.createObjectURL(file));
  }
  useEffect(() => {
    sendFormData();
  }, []);
  return <iframe src={pdfURL} height={1000} width={700}></iframe>;
};

export default Contract;
