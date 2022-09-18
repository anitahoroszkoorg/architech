import constate from "constate";
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

export function useApiService() {
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
  return { getNipInfo };
}

export const [ApiProvider, getNipInfo] = constate(
  useApiService,

  (apiService) => apiService.getNipInfo
);
