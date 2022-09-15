import WhiteContainer from "containers/WhiteContainer";
import Documents from "./Documents";
import { IState } from "../types";

function DocumentsPage() {
  return (
    <>
      <WhiteContainer isLast>
        <Documents />
      </WhiteContainer>
    </>
  );
}

export default DocumentsPage;
