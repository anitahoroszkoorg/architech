import React from "react";
import FormikTextField from "../FormikTextField";

function ContactName() {
  const textFields = [
    { name: "contactName", label: "Imię i Nazwisko" },
    { name: "contactPosition", label: "Stanowisko" },
  ];
  return (
    <div>
      {textFields.map((field) => (
        <FormikTextField name={field.name} label={field.label} />
      ))}
    </div>
  );
}

export default ContactName;
