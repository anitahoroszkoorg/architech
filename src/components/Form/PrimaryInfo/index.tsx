import React from "react";
import WhiteContainer from "containers/WhiteContainer";
import GreyContainer from "containers/GreyContainer";
import Divider from "@mui/material/Divider";
import ContactInfo from "./ContactInfo";
import CompanyInfo from "./CompanyInfo.tsx";
import { IState } from "../types";

interface IProps {
  step: number;
  safeSetState: (stateUpdate: Partial<IState>) => void;
}

function PrimaryInfo({ step, safeSetState }: IProps) {
  return (
    <>
      <WhiteContainer step={step}>
        <CompanyInfo />
      </WhiteContainer>
      <GreyContainer step={step} safeSetState={safeSetState}>
        <ContactInfo />
      </GreyContainer>
    </>
  );
}

export default PrimaryInfo;
