import React from "react";
import FormButton from "./FormButton";

function ButtonContainer({ safeSetState, state }) {
  const shouldShowBackButton = () => state.step > 1 && state.step < 3;

  const shouldShowNextButton = () => state.step < 2;

  const changeStep = (stepChange) => {
    safeSetState({ step: state.step + stepChange });
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
