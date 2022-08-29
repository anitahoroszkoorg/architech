import WhiteContainer from "containers/WhiteContainer";
import GreyContainer from "containers/GreyContainer";
import Documents from "./Documents";
import DownloadPdf from "./DownloadPdf";
import { IState } from "../types";

interface IProps {
  step: number;
  safeSetState: (stateUpdate: Partial<IState>) => void;
  shouldShowAllFields: boolean;
  setShouldShowAllFields: (shouldShowAllFields: boolean) => void;
}

function DocumentsPage({ safeSetState, step, setShouldShowAllFields }: IProps) {
  return (
    <>
      <WhiteContainer step={step} safeSetState={safeSetState} isLast={false}>
        <Documents />
      </WhiteContainer>
      <GreyContainer
        step={step}
        safeSetState={safeSetState}
        shouldShowAllFields={true}
        setShouldShowAllFields={setShouldShowAllFields}
      >
        <DownloadPdf />
      </GreyContainer>
    </>
  );
}

export default DocumentsPage;
