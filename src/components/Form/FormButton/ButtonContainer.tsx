import FormButton from "./FormButton";
import { useFormikContext } from "formik";
import { useContext } from "react";
import { FormContext } from "hooks/FormContext";
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
function ButtonContainer() {
  const { step, setStep } = useContext(FormContext);

  const { validateForm, setFieldTouched } = useFormikContext();

  const shouldShowBackButton = () => step > 1 && step < 5;

  const shouldShowNextButton = () => step < 5;

  const changeStep = (stepChange: number) => {
    setStep(step + stepChange);
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
