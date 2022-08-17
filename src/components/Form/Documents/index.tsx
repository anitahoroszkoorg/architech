import React from "react";
import WhiteContainer from "containers/WhiteContainer";
import GreyContainer from "containers/GreyContainer";
import Divider from "@mui/material/Divider";
import Documents from "./Documents";
import DownloadPdf from "./DownloadPdf";
import { IState } from "../types";

interface IProps {
  step: number;
  safeSetState: (stateUpdate: Partial<IState>) => void;
}

function DocumentsPage({ safeSetState, step }: IProps) {
  return (
    <>
      <WhiteContainer step={step}>
        <Documents />
      </WhiteContainer>
      <GreyContainer step={step} safeSetState={safeSetState}>
        <DownloadPdf />
      </GreyContainer>
    </>
  );
}

export default DocumentsPage;
