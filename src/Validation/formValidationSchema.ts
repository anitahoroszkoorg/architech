import * as Yup from "yup";
const phoneRegex = RegExp(
  /^(?:(?:(?:(?:\+|00)\d{2})?[ -]?(?:(?:\(0?\d{2}\))|(?:0?\d{2})))?[ -]?(?:\d{3}[- ]?\d{2}[- ]?\d{2}|\d{2}[- ]?\d{2}[- ]?\d{3}|\d{7})|(?:(?:(?:\+|00)\d{2})?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}))$/
);
const zipRegex = RegExp(/(^\d{2}-\d{3}$)/);
const onlyDigitRegex = RegExp(/^\d+$/);
const onlyLettersRegex = RegExp(/^[a-zA-Z\s]*$/);
export const validateNip = (nip: string | undefined): boolean => {
  if (nip) {
    const nipArray = nip.split("").map((str) => Number(str));
    let sum = 0;
    const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];
    for (let i = 0; i < weights.length; i++) {
      sum += nipArray[i] * weights[i];
    }
    return sum % 11 === nipArray[9];
  }
  return false;
};

const formValidationSchema = [
  Yup.object({
    companyName: Yup.string()
      .min(3, "Musi zawierać conajmniej 3 znaki")
      .required("Wymagane"),
    nip: Yup.string()
      .test("test-name", "Nieprawidłowy numer NIP", (value) =>
        validateNip(value)
      )
      .min(10, "Nieprawidłowy numer NIP")
      .matches(onlyDigitRegex, "Musi składać się wyłącznie z liczb")
      .required("Wymagane"),
    email: Yup.string().email("Nieprawidłowy adres email").required("Wymagane"),
    phoneNumber: Yup.string()
      .matches(phoneRegex, "Nieprawidłowy numer telefonu")
      .required("Wymagane"),
    street: Yup.string()
      .min(3, "Nieprawidłowy format")
      .required("Wymagane"),
    city: Yup.string().min(3, "Nieprawidłowy format").required("Wymagane"),
    buildingNumber: Yup.string()
      .min(1, "Nieprawidłowy format")
      .required("Wymagane"),
    zipCode: Yup.string()
      .matches(zipRegex, "Nieprawidłowy format kodu pocztowego")
      .required("Wymagane"),
    contactName: Yup.string()
      .matches(onlyLettersRegex, "Tekst zawiera liczby")
      .min(3, "Nieprawidłowy format")
      .required("Wymagane"),
    contactPosition: Yup.string()
      .matches(onlyLettersRegex, "Tekst zawiera liczby")
      .min(3, "Nieprawidłowy format")
      .required("Wymagane"),
    contactPhoneNumber: Yup.string()
      .matches(phoneRegex, "nieprawidłowy numer telefonu")
      .required("Wymagane"),
    contactEmail: Yup.string()
      .email("Nieprawidłowy adres email")
      .required("Wymagane"),
  }),
  Yup.object({
    legalStatus: Yup.string().required("Wymagane"),
    accountNumber: Yup.string()
      .min(26, "Nieprawidłowy numer konta")
      .max(26, "Nieprawidłowy numer konta")
      .matches(onlyDigitRegex, "Musi składać się wyłącznie z liczb")
      .required("Wymagane"),
    regon: Yup.string()
      .min(9, "Nieprawidłowy format")
      .max(9, "Nieprawidłowy format")
      .matches(onlyDigitRegex, "Musi składać się wyłącznie z liczb")
      .required("Wymagane"),
    taxPayer: Yup.string()
      .matches(onlyLettersRegex, "Tekst zawiera liczby")
      .min(3, "Nieprawidłowy format")
      .required("Wymagane"),
    foundingYear: Yup.string()
      .matches(onlyDigitRegex, "Musi składać się wyłącznie z liczb")
      .min(4, "Nieprawidłowy format")
      .required("Wymagane"),
    supplierCategory: Yup.string().required("Wymagane"),
    employeesAmount: Yup.string()
      .matches(onlyDigitRegex, "Musi składać się wyłącznie z liczb")
      .min(1, "Nieprawidłowy format")
      .required("Wymagane"),
    sumOfSales: Yup.string()
      .matches(onlyDigitRegex, "Musi składać się wyłącznie z liczb")
      .min(3, "Nieprawidłowy format")
      .required("Wymagane"),
    departments: Yup.string()
      .matches(onlyLettersRegex, "Tekst zawiera liczby")
      .min(3, "Nieprawidłowy format")
      .required("Wymagane"),
    service: Yup.string()
      .min(3, "Nieprawidłowy format")
      .matches(onlyLettersRegex, "Tekst zawiera liczby")
      .required("Wymagane"),
    equity: Yup.string()
      .matches(onlyDigitRegex, "Musi składać się wyłącznie z liczb")
      .min(4, "Nieprawidłowy format")
      .required("Wymagane"),
  }),
];

export default formValidationSchema;
