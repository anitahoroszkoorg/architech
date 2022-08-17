import React from "react";
import WhiteContainer from "containers/WhiteContainer";
import GreyContainer from "containers/GreyContainer";
import Divider from "@mui/material/Divider";
import Documents from "./Documents";
import DownloadPdf from "./DownloadPdf";

function DocumentsPage({ step }: any) {
  return (
    <>
      <WhiteContainer step={step}>
        <Documents />
      </WhiteContainer>
      <GreyContainer>
        <DownloadPdf />
      </GreyContainer>
    </>
  );
}

export default DocumentsPage;
