import { useState } from "react";
import { Formik } from "formik";
import RemainingInfo from "./RemainingInfo";
import { Grid } from "@mui/material";
import ButtonContainer from "./FormButton/ButtonContainer";
import { IState } from "./types";
import FormStepper from "./FormStepper";
import Documents from "./Documents";
import Summary from "./Summary";
import Footer from "components/Footer/Footer";
import SplitScreen from "components/SplitScreen";
import PrimaryInfo from "./PrimaryInfo";
interface IProps {
  state: IState;
}
export const CurrentForm = ({ state }: IProps): JSX.Element => {
  switch (state.step) {
    case 1:
      return <PrimaryInfo step={state.step}  />;
    case 2:
      return <RemainingInfo step={state.step} />;
    case 3:
      return <Documents step={state.step} />;
    case 4:
      return <Summary step={state.step} />;
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
    legalStatus: "",
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

  const safeSetState = (stateUpdate: Partial<IState>) =>
    setState((state: IState) => ({ ...state, ...stateUpdate }));

  return (
    <>
      <Grid container alignItems="flex-start">
        <Formik
          initialValues={state}
          onSubmit={() => {
            console.log("submit");
            //temporary submit method
          }}
        >
          {() => (
            <>
              <Grid container>
                <CurrentForm state={state} />
              </Grid>
            </>
          )}
        </Formik>
      </Grid>
    </>
  );
}

export default FormContainer;
