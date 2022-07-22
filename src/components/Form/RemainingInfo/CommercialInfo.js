import React from "react";
import FormikTextField from "../FormikTextField";

function CommercialInfo() {
  const fieldsToShow = [
    { name: "employeesAmount", label: "Ilość zatrudnionych" },
    { name: "sumOfSales", label: "Łączna sprzedaż z ostatnich 3 lat" },
    { name: "departments", label: "Filie/przedstawicielstwa/oddziały" },
    { name: "service", label: "Oferowany zakres dostaw/usług" },
    { name: "equity", label: "Kapitał spółki" },
  ];
  return (
    <div>
      {fieldsToShow.map((field) => (
        <FormikTextField name={field.name} label={field.label} />
      ))}
    </div>
  );
}

export default CommercialInfo;
