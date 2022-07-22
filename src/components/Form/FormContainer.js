import React, { useState } from "react";
import { Formik } from "formik";
import RemainingInfo from "./RemainingInfo/RemainingInfo";
import PrimaryInfo from "./PrimaryInfo/PrimaryInfo";
import { Grid } from "@mui/material";
import ButtonContainer from "./FormButton/ButtonContainer";

const CurrentForm = ({ state, values }) => {
  switch (state.step) {
    case 1:
      return <PrimaryInfo values={values} />;
    case 2:
      return <RemainingInfo values={values} />;
  }
};

function FormContainer() {
  const [state, setState] = useState({
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

  const safeSetState = (stateUpdate) =>
    setState((state) => ({ ...state, ...stateUpdate }));

  return (
    <>
      <Grid container alignItems="flex-start">
        <Formik initialValues={state}>
          {({ values }) => (
            <>
              <CurrentForm state={state} values={values} />
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
