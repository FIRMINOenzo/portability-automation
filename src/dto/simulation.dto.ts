export class SimulationDto {
  cpf: string;
  installmentValue: string;
  outstandingBalance: string;
  remainingInstallments: string;
  portedBank: string;
  portedContract: string;
  portedInstallment: string;

  constructor(
    cpf: string,
    installmentValue: string,
    outstandingBalance: string,
    remainingInstallments: string,
    portedBank: string,
    portedContract: string,
    portedInstallment: string
  ) {
    this.cpf = cpf;
    this.installmentValue = installmentValue;
    this.outstandingBalance = outstandingBalance;
    this.remainingInstallments = remainingInstallments;
    this.portedBank = portedBank;
    this.portedContract = portedContract;
    this.portedInstallment = portedInstallment;
  }
}
