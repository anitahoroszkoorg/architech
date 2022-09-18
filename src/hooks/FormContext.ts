import { createContext, Dispatch, SetStateAction } from "react";
interface FormContextIF {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}
export const FormContext = createContext<FormContextIF>({
  step: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setStep: () => {},
});
