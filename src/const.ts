const pages = [
  "Ankieta kwalifikacyjna",
  "Kodeks Kontrahenta",
  "Katalog wymagań",
  "Dokumenty",
];

const fieldsConfig = {
  commercialFields: [
    { name: "employeesAmount", label: "Ilość zatrudnionych" },
    { name: "sumOfSales", label: "Łączna sprzedaż z ostatnich 3 lat" },
    { name: "departments", label: "Filie/przedstawicielstwa/oddziały" },
    { name: "service", label: "Oferowany zakres dostaw/usług" },
    { name: "equity", label: "Kapitał spółki" },
    { name: "legalStatus", label: "Forma prawna" },
    { name: "accountNumber", label: "Konto bankowe" },
    { name: "regon", label: "REGON" },
    { name: "taxPayer", label: "Płatnik VAT" },
    { name: "foundingYear", label: "Rok założenia" },
    { name: "supplierCategory", label: "Kategoria dostawcy" },
  ],
};
export { pages, fieldsConfig };
