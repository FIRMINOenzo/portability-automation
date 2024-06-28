import { AddressType } from '../enums';
import { removeAccents, filterNumbers } from '../utils';

export class Address {
  public zipCode: string;
  public addressType: AddressType;
  public street: string;
  public number: string;
  public complement: string;
  public neighborhood: string;

  constructor(
    zipCode: string,
    addressType: AddressType,
    street: string,
    number: string,
    complement: string,
    neighborhood: string
  ) {
    this.zipCode = filterNumbers(zipCode);
    this.addressType = addressType;
    this.street = removeAccents(street);
    this.number = removeAccents(number);
    this.complement = removeAccents(complement);
    this.neighborhood = removeAccents(neighborhood);
  }
}
