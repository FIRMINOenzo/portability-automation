import { AddressType } from '../enums';

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
    this.zipCode = Address.formatZipCode(zipCode);
    this.addressType = addressType;
    this.street = street;
    this.number = number;
    this.complement = complement;
    this.neighborhood = neighborhood;
  }

  private static formatZipCode(zipCode: string): string {
    return zipCode.replace(/\D/g, '');
  }
}
