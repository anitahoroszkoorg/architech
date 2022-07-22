import React from "react";
import FormikTextField from "../FormikTextField";

function LegalInfo() {
  const fieldsToShow = [
    { name: "legalStatus", label: "Forma prawna" },
    { name: "accountNumber", label: "Konto bankowe" },
    { name: "regon", label: "REGON" },
    { name: "taxPayer", label: "Płatnik VAT" },
    { name: "foundingYear", label: "Rok założenia" },
    { name: "supplierCategory", label: "Kategoria dostawcy" },
  ];
  return (
    <div>
      {fieldsToShow.map((field) => (
        <FormikTextField name={field.name} label={field.label} />
      ))}
    </div>
  );
}

export default LegalInfo;
