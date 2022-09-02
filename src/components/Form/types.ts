export interface IState {
  step: number;
  companyName: string;
  nip: string;
  phoneNumber: string;
  email: string;
  street: string;
  city: string;
  buildingNumber: string;
  zipCode: string;
  contactName: string;
  contactPosition: string;
  contactPhoneNumber: string;
  contactEmail: string;
  accountNumber: string;
  regon: string;
  taxPayer: string;
  foundingYear: string;
  supplierCategory: string;
  employeesAmount: string;
  sumOfSales: string;
  departments: string;
  service: string;
  equity: string;
}
export interface IFieldProps {
  name: string;
  label: string;
}
export interface IUser {
  first_name: string;
  last_name: string;
  city: string;
  age: string;
  is_active: boolean;
  id: number;
}
