import WhiteContainer from "containers/WhiteContainer";
import GreyContainer from "containers/GreyContainer";
import ContactInfo from "./ContactInfo";
import CompanyInfo from "./CompanyInfo";
import { IState } from "../types";
interface IProps {
  step: number;
  safeSetState: (stateUpdate: Partial<IState>) => void;
  shouldShowAllFields: boolean;
  setShouldShowAllFields: (shouldShowAllFields: boolean) => void;
}

function PrimaryInfo({
  step,
  safeSetState,
  shouldShowAllFields,
  setShouldShowAllFields,
}: IProps) {
  return (
    <>
      <WhiteContainer step={step} safeSetState={safeSetState} isLast={false}>
        <CompanyInfo
          shouldShowAllFields={shouldShowAllFields}
          setShouldShowAllFields={setShouldShowAllFields}
        />
      </WhiteContainer>
      <GreyContainer
        step={step}
        safeSetState={safeSetState}
        shouldShowAllFields={shouldShowAllFields}
        setShouldShowAllFields={setShouldShowAllFields}
      >
        <ContactInfo />
      </GreyContainer>
    </>
  );
}

export default PrimaryInfo;
