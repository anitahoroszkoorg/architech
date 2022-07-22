import React from "react";
import FormikTextField from "../FormikTextField";

function Contact() {
  const textFields = [
    { name: "contactPhoneNumber", label: "Telefon" },
    { name: "contactEmail", label: "E-mail" },
  ];
  return (
    <div>
      {" "}
      {textFields.map((field) => (
        <FormikTextField name={field.name} label={field.label} />
      ))}
    </div>
  );
}

export default Contact;
