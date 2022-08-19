const pages = [
  "Ankieta kwalifikacyjna",
  "Kodeks Kontrahenta",
  "Katalog wymagań",
  "Dokumenty",
];

const fieldsConfig = {
  companyInfoFields: [
    { name: "companyName", label: "Pełna nazwa firmy" },
    { name: "nip", label: "NIP" },
    { name: "phoneNumber", label: "Telefon" },
    { name: "email", label: "E-mail" },
    { name: "street", label: "Ulica" },
    { name: "city", label: "Miejscowość" },
    { name: "buildingNumber", label: "Nr budynku/lokalu" },
    { name: "zipCode", label: "Kod pocztowy" },
  ],
  contactFields: [
    { name: "contactName", label: "Imię i Nazwisko" },
    { name: "contactPosition", label: "Stanowisko" },
    { name: "contactPhoneNumber", label: "Telefon" },
    { name: "contactEmail", label: "E-mail" },
  ],
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
