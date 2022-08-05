import { useState } from "react";
import { Formik } from "formik";
import RemainingInfo from "./RemainingInfo";
import PrimaryInfo from "./PrimaryInfo";
import { Grid } from "@mui/material";
import ButtonContainer from "./FormButton/ButtonContainer";
import { IState } from "./types";
import MyStepper from "./MyStepper";
import Documents from "./Documents";
import Summary from "./Summary";

interface IProps {
  state: IState;
}

const CurrentForm = ({ state }: IProps) => {
  switch (state.step) {
    case 1:
      return <PrimaryInfo />;
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
                  <MyStepper step={state.step} />
                </Grid>
                <Grid
                  container
                  xs={8}
                  sx={{ display: { xs: "flex", md: "none" } }}
                >
                  <CurrentForm state={state} />
                </Grid>
                <Grid
                  container
                  xs={9}
                  sx={{ display: { xs: "none", md: "flex" } }}
                >
                  <CurrentForm state={state} />
                </Grid>
              </Grid>
              <Grid container xs={10} justifyContent="flex-end">
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
