import { Term } from '../enums';
import { filterNumbers } from '../utils';

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
    this.cpf = filterNumbers(cpf);
    this.installmentValue = filterNumbers(installmentValue);
    this.term = term;
    this.outstandingBalance = filterNumbers(outstandingBalance);
    this.remainingInstallments = remainingInstallments;
    this.portedBank = portedBank;
    this.portedContract = portedContract;
    this.portedInstallment = filterNumbers(portedInstallment);
  }
}
