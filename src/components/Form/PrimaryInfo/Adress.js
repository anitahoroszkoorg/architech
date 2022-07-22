import React from "react";
import FormikTextField from "../FormikTextField";

function Adress() {
  const textFields = [
    { name: "street", label: "Ulica" },
    { name: "city", label: "Miejscowość" },
    { name: "buildingNumber", label: "Nr budynku/lokalu" },
    { name: "zipCode", label: "Kod pocztowy" },
  ];
  return (
    <div>
      {textFields.map((field) => (
        <FormikTextField name={field.name} label={field.label} />
      ))}
    </div>
  );
}

export default Adress;
