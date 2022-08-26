import WhiteContainer from "containers/WhiteContainer";
import GreyContainer from "containers/GreyContainer";
import ContactInfo from "./ContactInfo";
import CompanyInfo from "./CompanyInfo";
import { IState } from "../types";

interface IProps {
  step: number;
  safeSetState: (stateUpdate: Partial<IState>) => void;
}

function PrimaryInfo({ step, safeSetState }: IProps) {
  return (
    <>
      <WhiteContainer step={step} safeSetState={safeSetState} isLast={false}>
        <CompanyInfo />
      </WhiteContainer>
      <GreyContainer step={step} safeSetState={safeSetState}>
        <ContactInfo />
      </GreyContainer>
    </>
  );
}

export default PrimaryInfo;
