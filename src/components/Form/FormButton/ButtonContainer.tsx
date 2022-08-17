import FormButton from "./FormButton";
import { IState } from "../types";

interface IProps {
  safeSetState: (stateUpdate: Partial<IState>) => void;
  step: number;
}
function ButtonContainer({ safeSetState, step }: IProps) {
  const shouldShowBackButton = () => step > 1 && step < 5;

  const shouldShowNextButton = () => step < 4;

  const changeStep = (stepChange: number) => {
    safeSetState({ step: step + stepChange });
  };
  return (
    <div>
      {shouldShowBackButton() ? (
        <FormButton label="back" changeStep={() => changeStep(-1)} />
      ) : null}
      {shouldShowNextButton() ? (
        <FormButton label="next" changeStep={() => changeStep(1)} />
      ) : null}
    </div>
  );
}

export default ButtonContainer;
