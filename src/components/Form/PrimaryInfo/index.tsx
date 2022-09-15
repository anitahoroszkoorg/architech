import WhiteContainer from "containers/WhiteContainer";
import GreyContainer from "containers/GreyContainer";
import ContactInfo from "./ContactInfo";
import CompanyInfo from "./CompanyInfo";
import { IState } from "../types";
interface IProps {
  shouldShowAllFields: boolean;
  setShouldShowAllFields: (shouldShowAllFields: boolean) => void;
}

function PrimaryInfo({ shouldShowAllFields, setShouldShowAllFields }: IProps) {
  return (
    <>
      <WhiteContainer  isLast={false}>
        <CompanyInfo
          shouldShowAllFields={shouldShowAllFields}
          setShouldShowAllFields={setShouldShowAllFields}
        />
      </WhiteContainer>
      {shouldShowAllFields ? (
        <GreyContainer >
          <ContactInfo />
        </GreyContainer>
      ) : null}
    </>
  );
}

export default PrimaryInfo;
