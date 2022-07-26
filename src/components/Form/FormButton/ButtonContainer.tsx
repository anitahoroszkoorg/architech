import FormButton from "./FormButton";
import { IState } from "../types";

interface IProps {
  safeSetState: (stateUpdate: Partial<IState>) => void;
  state: IState;
}
function ButtonContainer({ safeSetState, state }: IProps) {
  const shouldShowBackButton = () => state.step > 1 && state.step < 3;

  const shouldShowNextButton = () => state.step < 2;

  const changeStep = (stepChange: number) => {
    safeSetState({ step: state.step + stepChange });
    safeSetState({ email: "state.step + stepChange" });
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
