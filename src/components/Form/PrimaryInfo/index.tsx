import WhiteContainer from "containers/WhiteContainer";
import GreyContainer from "containers/GreyContainer";
import ContactInfo from "./ContactInfo";
import CompanyInfo from "./CompanyInfo";
import { IState } from "../types";
import { useState } from "react";
interface IProps {
  step: number;
  safeSetState: (stateUpdate: Partial<IState>) => void;
}

function PrimaryInfo({ step, safeSetState }: IProps) {
  const [shouldShowAllFields, setShouldShowAllFields] =
    useState<boolean>(false);
  return (
    <>
      <WhiteContainer step={step} safeSetState={safeSetState} isLast={false}>
        <CompanyInfo
          shouldShowAllFields={shouldShowAllFields}
          setShouldShowAllFields={setShouldShowAllFields}
        />
      </WhiteContainer>
      {shouldShowAllFields ? (
        <GreyContainer step={step} safeSetState={safeSetState}>
          <ContactInfo />
        </GreyContainer>
      ) : null}
    </>
  );
}

export default PrimaryInfo;
