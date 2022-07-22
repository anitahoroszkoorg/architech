import React from "react";
import FormikTextField from "../FormikTextField";

function CompanyInfo() {
  const textFields = [
    { name: "companyName", label: "Pełna nazwa firmy" },
    { name: "nip", label: "NIP" },

    { name: "phoneNumber", label: "Telefon" },
    { name: "email", label: "E-mail" },
  ];
  return (
    <div>
      {textFields.map((field) => (
        <FormikTextField name={field.name} label={field.label} />
      ))}
    </div>
  );
}

export default CompanyInfo;
