import { useState } from "react";
import { Formik } from "formik";
import RemainingInfo from "./RemainingInfo";
import { Grid } from "@mui/material";
import Documents from "./Documents";
import Summary from "./Summary";
import PrimaryInfo from "./PrimaryInfo";
import formValidationSchema from "Validation/formValidationSchema";
import { FormContext } from "hooks/FormContext";

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
  const [step, setStep] = useState(1);
  const currentValidationSchema = formValidationSchema[step - 1];

  return (
    <>
      <Grid container alignItems="flex-start">
        <Formik
          validationSchema={currentValidationSchema}
          initialValues={{
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
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {() => (
            <>
              <Grid container>
                <FormContext.Provider value={{ step: step, setStep: setStep }}>
                  <CurrentForm step={step} />
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
