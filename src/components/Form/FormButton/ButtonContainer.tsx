import FormButton from "./FormButton";
import { useFormikContext } from "formik";
import { FormContext } from "components/UserContext";
import { useContext } from "react";
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
function ButtonContainer() {
  const { step, safeSetState } = useContext(FormContext);

  const { validateForm, setFieldTouched } = useFormikContext();

  const shouldShowBackButton = () => step > 1 && step < 4;

  const shouldShowNextButton = () => step < 4;

  const changeStep = (stepChange: number) => {
    safeSetState({ step: step + stepChange });
  };
  return (
    <>
      {shouldShowBackButton() ? (
        <FormButton label="back" changeStep={() => changeStep(-1)} />
      ) : null}
      {shouldShowNextButton() ? (
        <FormButton
          label="next"
          changeStep={async () => {
            const formikErrors = await validateForm();
            const formikErrorsKeys = Object.keys(formikErrors);
            if (formikErrorsKeys.length === 0) {
              return changeStep(1);
            }
            scrollToTop();
            formikErrorsKeys.forEach((k) => {
              setFieldTouched(k, true);
            });
          }}
        />
      ) : null}
    </>
  );
}

export default ButtonContainer;
