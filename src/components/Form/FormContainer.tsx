import { useContext, useState } from "react";
import { Formik } from "formik";
import RemainingInfo from "./RemainingInfo";
import { Grid } from "@mui/material";
import { IState } from "./types";
import Documents from "./Documents";
import Summary from "./Summary";
import PrimaryInfo from "./PrimaryInfo";
import formValidationSchema from "Validation/formValidationSchema";
import React from "react";
import { FormContext } from "components/UserContext";

interface IProps {
  step: number;
}
export const CurrentForm = ({ step }: IProps): JSX.Element => {
  const [shouldShowAllFields, setShouldShowAllFields] =
    useState<boolean>(false);
  switch (step) {
    case 1:
      return (
        <PrimaryInfo
          shouldShowAllFields={shouldShowAllFields}
          setShouldShowAllFields={setShouldShowAllFields}
        />
      );
    case 2:
      return <RemainingInfo />;
    case 3:
      return <Documents />;
    case 4:
      return <Summary />;
    default:
      return <></>;
  }
};

function FormContainer() {
  const [state, setState] = useState<IState>({
    step: 1,
  });
  const currentValidationSchema = formValidationSchema[state.step - 1];

  const safeSetState = (stateUpdate: Partial<IState>) =>
    setState((state: IState) => ({ ...state, ...stateUpdate }));

  return (
    <>
      <Grid container alignItems="flex-start">
        <Formik
          validationSchema={currentValidationSchema}
          initialValues={state}
          onSubmit={(values) => {
            console.log(values);
            //temporary submit method
          }}
        >
          {() => (
            <>
              <Grid container>
                <FormContext.Provider
                  value={{ step: state.step, safeSetState: safeSetState }}
                >
                  <CurrentForm step={state.step} />
                </FormContext.Provider>
              </Grid>
            </>
          )}
        </Formik>
      </Grid>
    </>
  );
}

export default FormContainer;
