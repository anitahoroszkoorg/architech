import WhiteContainer from "containers/WhiteContainer";
import Documents from "./Documents";
import { IState } from "../types";

interface IProps {
  step: number;
  safeSetState: (stateUpdate: Partial<IState>) => void;
}

function DocumentsPage({ safeSetState, step }: IProps) {
  return (
    <>
      <WhiteContainer step={step} safeSetState={safeSetState} isLast>
        <Documents />
      </WhiteContainer>
    </>
  );
}

export default DocumentsPage;
