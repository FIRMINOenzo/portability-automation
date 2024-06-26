import { BankAccountType } from '../enums';

export class BankData {
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
