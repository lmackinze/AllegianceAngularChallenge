export interface ICustomerDto {
    id: string;
    firstName: string;
    lastName: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zipCode: string;
    emailAddress: string;
    telePhoneNumber: string;
}
  
export class Customer implements ICustomerDto {
    id: string;
    firstName: string;
    lastName: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zipCode: string;
    emailAddress: string;
    telePhoneNumber: string;
}
