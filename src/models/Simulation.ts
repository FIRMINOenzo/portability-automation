import { Term } from '../enums';

export class Simulation {
  cpf: string;
  installmentValue: string;
  term: Term;
  outstandingBalance: string;
  remainingInstallments: string;
  portedBank: string;
  portedContract: string;
  portedInstallment: string;

  constructor(
    cpf: string,
    installmentValue: string,
    term: Term,
    outstandingBalance: string,
    remainingInstallments: string,
    portedBank: string,
    portedContract: string,
    portedInstallment: string
  ) {
    this.cpf = cpf;
    this.installmentValue = installmentValue;
    this.term = term;
    this.outstandingBalance = outstandingBalance;
    this.remainingInstallments = remainingInstallments;
    this.portedBank = portedBank;
    this.portedContract = portedContract;
    this.portedInstallment = portedInstallment;
  }
}
