import { createContext } from "react";
import { baseURL } from "config";

interface NipInfoRequestBody {
  nip: string;
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
};
export const ApiContext = createContext(context);
