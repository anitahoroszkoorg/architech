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
      {shouldShowAllFields ? (
        <GreyContainer step={step} safeSetState={safeSetState}>
          <ContactInfo />
        </GreyContainer>
      ) : null}
    </>
  );
}

export default PrimaryInfo;
