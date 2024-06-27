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
    this.street = Address.removeSpecialCharacters(street);
    this.number = Address.removeSpecialCharacters(number);
    this.complement = Address.removeSpecialCharacters(complement);
    this.neighborhood = Address.removeSpecialCharacters(neighborhood);
  }

  private static removeSpecialCharacters(value: string): string {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  private static formatZipCode(zipCode: string): string {
    return zipCode.replace(/\D/g, '');
  }
}
