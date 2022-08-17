import React from "react";
import WhiteContainer from "containers/WhiteContainer";
import GreyContainer from "containers/GreyContainer";
import Divider from "@mui/material/Divider";
import ContactInfo from "./ContactInfo";
import CompanyInfo from "./CompanyInfo.tsx";

function PrimaryInfo({ step }: any) {
  return (
    <>
      <WhiteContainer step={step}>
        <CompanyInfo />
      </WhiteContainer>
      <GreyContainer isLast>
        <ContactInfo />
      </GreyContainer>
    </>
  );
}

export default PrimaryInfo;
