import { createContext } from "react";
import { baseURL, submitURL } from "config";

interface NipInfoRequestBody {
  nip: string;
}

export interface SubmitInfoRequestBody {
  accountNumber: string;
  buildingNumber: string;
  city: string;
  companyName: string;
  contactEmail: string;
  contactName: string;
  contactPhoneNumber: string;
  contactPosition: string;
  departments: string;
  email: string;
  employeesAmount: string;
  equity: string;
  foundingYear: string;
  nip: string;
  phoneNumber: string;
  regon: string;
  service: string;
  street: string;
  sumOfSales: string;
  supplierCategory: string;
  taxPayer: string;
  zipCode: string;
}

export interface NipInfoResponse {
  city: string;
  name: string;
  regon: string;
  address: string;
  legal_form: LegalForm;
  postal_code: string;
  local_number: string;
  address_number: string;
  specific_legal_form: LegalForm;
}

interface LegalForm {
  name: string;
}

const getNipInfo = async (
  requestBody: NipInfoRequestBody
): Promise<NipInfoResponse> => {
  const r = await fetch(`${baseURL}/nip-info/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });
  const responseJson = await r.json();
  return responseJson;
};
const submitInfo = async (
  requestBody: SubmitInfoRequestBody
): Promise<string> => {
  const r = await fetch(`${submitURL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });
  const responseJson = await r.text();
  return responseJson;
};
const getSupplierInfo = async (): Promise<string[]> => {
  const r = await fetch(`${baseURL}/supplier/`, {
    method: "GET",
  });
  const responseJson = await r.json();
  return responseJson;
};

export const context = {
  getSupplierInfo: getSupplierInfo,
  getNipInfo: getNipInfo,
  submitInfo: submitInfo,
};
export const ApiContext = createContext(context);
