import { BankAccountType } from "../enums";

export class BankDataDto {
  bank: string;
  agency: string;
  account: string;
  accountType: BankAccountType;

  constructor(
    bank: string,
    agency: string,
    account: string,
    accountType: BankAccountType
  ) {
    this.bank = bank;
    this.agency = agency;
    this.account = account;
    this.accountType = accountType;
  }
}
