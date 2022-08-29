import { useState } from "react";
import { Formik } from "formik";
import RemainingInfo from "./RemainingInfo";
import { Grid } from "@mui/material";
import { IState } from "./types";
import Documents from "./Documents";
import Summary from "./Summary";
import PrimaryInfo from "./PrimaryInfo";
import formValidationSchema from "Validation/formValidationSchema";

interface IProps {
  state: IState;
  safeSetState: (stateUpdate: Partial<IState>) => void;
  shouldShowAllFields: boolean;
  setShouldShowAllFields: (shouldShowAllFields: boolean) => void;
}
export const CurrentForm = ({
  state,
  safeSetState,
  shouldShowAllFields,
  setShouldShowAllFields,
}: IProps): JSX.Element => {
  switch (state.step) {
    case 1:
      return (
        <PrimaryInfo
          step={state.step}
          safeSetState={safeSetState}
          shouldShowAllFields={shouldShowAllFields}
          setShouldShowAllFields={setShouldShowAllFields}
        />
      );
    case 2:
      return <RemainingInfo step={state.step} safeSetState={safeSetState} />;
    case 3:
      return (
        <Documents
          step={state.step}
          safeSetState={safeSetState}
          shouldShowAllFields={shouldShowAllFields}
          setShouldShowAllFields={setShouldShowAllFields}
        />
      );
    case 4:
      return <Summary step={state.step} safeSetState={safeSetState} />;
    default:
      return <></>;
  }
};

function FormContainer() {
  const [state, setState] = useState<IState>({
    step: 1,
    companyName: "",
    nip: "",
    phoneNumber: "",
    email: "",
    street: "",
    city: "",
    buildingNumber: "",
    zipCode: "",
    contactName: "",
    contactPosition: "",
    contactPhoneNumber: "",
    contactEmail: "",
    legalForm: "",
    accountNumber: "",
    regon: "",
    taxPayer: "",
    foundingYear: "",
    supplierCategory: "",
    employeesAmount: "",
    sumOfSales: "",
    departments: "",
    service: "",
    equity: "",
  });
  const currentValidationSchema = formValidationSchema[state.step - 1];

  const safeSetState = (stateUpdate: Partial<IState>) =>
    setState((state: IState) => ({ ...state, ...stateUpdate }));
  const [shouldShowAllFields, setShouldShowAllFields] =
    useState<boolean>(false);
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
                <CurrentForm
                  safeSetState={safeSetState}
                  state={state}
                  shouldShowAllFields={shouldShowAllFields}
                  setShouldShowAllFields={setShouldShowAllFields}
                />
              </Grid>
            </>
          )}
        </Formik>
      </Grid>
    </>
  );
}

export default FormContainer;
