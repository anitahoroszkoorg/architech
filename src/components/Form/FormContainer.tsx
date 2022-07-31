import { useState } from "react";
import { Formik } from "formik";
import RemainingInfo from "./RemainingInfo/RemainingInfo";
import PrimaryInfo from "./PrimaryInfo/PrimaryInfo";
import { Grid } from "@mui/material";
import ButtonContainer from "./FormButton/ButtonContainer";
import ProgressPanel from "./ProgressPanel";
import { IState } from "./types";

interface IProps {
  state: IState;
}

const CurrentForm = ({ state }: IProps) => {
  switch (state.step) {
    case 1:
      return <PrimaryInfo />;
    case 2:
      return <RemainingInfo />;
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
              <Grid container columnSpacing={5}>
                <Grid item xs={3}>
                  <ProgressPanel />
                </Grid>
                <Grid container xs={9}>
                  <CurrentForm state={state} />
                </Grid>
              </Grid>
              <Grid container xs={11} justifyContent="flex-end">
                <ButtonContainer safeSetState={safeSetState} state={state} />
              </Grid>
            </>
          )}
        </Formik>
      </Grid>
    </>
  );
}

export default FormContainer;
