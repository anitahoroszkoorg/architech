import * as Yup from "yup";
const phoneRegex = RegExp(
  /^(?:(?:(?:(?:\+|00)\d{2})?[ -]?(?:(?:\(0?\d{2}\))|(?:0?\d{2})))?[ -]?(?:\d{3}[- ]?\d{2}[- ]?\d{2}|\d{2}[- ]?\d{2}[- ]?\d{3}|\d{7})|(?:(?:(?:\+|00)\d{2})?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}))$/
);
const zipRegex = RegExp(/(^\d{2}-\d{3}$)/);
const onlyDigitRegex = RegExp(/^\d+$/);
const onlyLettersRegex = RegExp(/^[a-zA-Z\s]*$/);

const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const validateNip = (nip: string | undefined): boolean => {
  if (nip) {
    const nipArray = nip.split("").map((str) => Number(str));
    let sum = 0;
    const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];
    for (let i = 0; i < weights.length; i++) {
      sum += nipArray[i] * weights[i];
    }
    return sum % 11 === nipArray[9] && nipArray.length == 10;
  }
  return false;
};

const formValidationSchema = [
  Yup.object({
    companyName: Yup.string()
      .min(3, "Must contain at least 3 or more characters")
      .required("Required"),
    nip: Yup.string()
      .test("test-name", "Wrong NIP number/format", (value) =>
        validateNip(value)
      )
      .matches(onlyDigitRegex, "Must contain digits only")
      .required("Required"),
    email: Yup.string().email("Wrong email address").required("Required"),

    phoneNumber: Yup.string()
      .matches(phoneRegex, "Enter a 9 digit number")
      .required("Required"),
    street: Yup.string().min(3, "Wrong format").required("Required"),

    city: Yup.string().min(3, "Wrong format").required("Required"),

    buildingNumber: Yup.string().min(1, "Wrong format").required("Required"),
    zipCode: Yup.string()
      .matches(zipRegex, "Wrong zip code format")
      .required("Required"),
    contactName: Yup.string()
      .matches(onlyLettersRegex, "Text contains numbers")
      .min(3, "Must contain at least 3 or more characters")
      .required("Required"),
    contactPosition: Yup.string()
      .matches(onlyLettersRegex, "Text contains numbers")
      .min(3, "Must contain at least 3 or more characters")
      .required("Wymagane"),
    contactPhoneNumber: Yup.string()
      .matches(phoneRegex, "Enter a 9 digit number")
      .required("Required"),
    contactEmail: Yup.string()
      .email("Wrong email address")
      .required("Required"),
  }),
  Yup.object({
    regon: Yup.string()
      .min(9, "REGON number is too short")
      .max(9, "REGON number is too long")
      .matches(onlyDigitRegex, "Must contain digits only")
      .required("Required"),
    taxPayer: Yup.string()
      .matches(onlyLettersRegex, "Text contains numbers")
      .min(3, "Must contain at least 3 or more characters")
      .required("Required"),
    foundingYear: Yup.number()
      .integer()
      .min(1900, "Please type in year greater than 1900")
      .max(getCurrentYear(), "Date cannot be greater than the current year")
      .required("Required"),
    supplierCategory: Yup.string().required("Required"),
    employeesAmount: Yup.string()
      .matches(onlyDigitRegex, "Must contain digits only")
      .min(1, "Wrong format")
      .required("Required"),
    sumOfSales: Yup.string().required("Required"),
    departments: Yup.string()
      .matches(onlyLettersRegex, "Text contains numbers")
      .min(3, "Must contain at least 3 or more characters")
      .required("Required"),
    service: Yup.string()
      .min(3, "Wrong format")
      .matches(onlyLettersRegex, "Text contains numbers")
      .required("Required"),
    equity: Yup.string().required("Required"),
  }),
];

export default formValidationSchema;
