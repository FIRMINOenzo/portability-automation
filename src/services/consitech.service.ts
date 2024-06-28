import axios from 'axios';
import { User, ConsitechUser, Proposal } from '../models';
import { ConsitechUrls } from '../constants/Consitech';
import { BrbProposalData } from '../interfaces/BrbProposalData';
import {
  AddressType,
  BankAccountType,
  MaritalStatus,
  Sex,
  State,
  getBankAccountTypeFromAcronym,
  getStateFromId,
} from '../enums';

type CitySearch = {
  stateId: string;
  cityId: string;
};

type City = {
  id: number;
  nome: string;
  estado: number;
  deleted_at: string | null;
  deleted_by: string | null;
};

export class ConsitechService {
  async login(user: User): Promise<ConsitechUser> {
    const response = await axios.post(
      `${ConsitechUrls.BASE}/authenticate`,
      user
    );

    return new ConsitechUser(user.email, user.password, response.data.token);
  }

  async getProposalData(
    proposal: Proposal,
    token: string
  ): Promise<BrbProposalData> {
    try {
      const response = await axios.post(
        `${ConsitechUrls.BASE}/propostas/getOne`,
        proposal,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (!response.data) {
        throw new Error('No data received from Consitech');
      }

      return this.convertDataToBrbProposalData(response.data, token);
    } catch (error) {
      console.error('Error getting proposal data:', error);
      throw error;
    }
  }

  private async convertDataToBrbProposalData(
    data: any,
    token: string
  ): Promise<BrbProposalData> {
    const convertedState = this.convertState(data.uf);
    const convertedAccount = this.convertAccount(data.info_tipo_conta);
    const convertedCity = await this.convertCity(
      { stateId: data.uf, cityId: data.cidade },
      token
    );

    if (!convertedState) throw new Error('Error converting state');
    if (!convertedAccount) throw new Error('Error converting account');
    if (!convertedCity) throw new Error('Error converting city');

    const brbProposalData: BrbProposalData = {
      simulation: {
        cpf: data.cpf,
        installmentValue: this.formatNumbers(data.contrato_parcela),
        outstandingBalance: this.formatNumbers(data.contrato_saldo),
        portedBank: data.contrato_banco,
        portedContract: data.numeroDoContrato,
        portedInstallment: this.formatNumbers(data.contrato_parcela),
        remainingInstallments: String(data.contrato_parcela_rest),
        term: data.contrato_qtd_parcela.toString(),
      },
      personalData: {
        birthDate: this.formatBirthDate(data.dataDeNascimento),
        birthCity: convertedCity,
        birthState: convertedState,
        maritalStatus: MaritalStatus.SINGLE,
        name: data.nome,
        motherName: data.docNomeDaMae,
        registration: this.convertRegistration(data.beneficio),
        sex: Sex.MALE,
      },
      address: {
        addressType: AddressType.RESIDENTIAL,
        complement: '',
        neighborhood: data.bairro,
        number: data.numero,
        street: data.logradouro,
        zipCode: data.cep,
      },
      contact: {
        phone: data.telefone_celular,
      },
      bankData: {
        account: data.info_conta,
        agency: data.info_agencia,
        bank: data.info_banco,
        accountType: convertedAccount,
      },
    };

    return brbProposalData;
  }

  private convertState(stateId: number): State | null {
    return getStateFromId(stateId);
  }

  private async convertCity(
    citySearch: CitySearch,
    token: string
  ): Promise<string | null> {
    const response = await axios.post(
      `${ConsitechUrls.BASE}/cep/getCidades`,
      { estado: citySearch.stateId },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const desiredCity: City | undefined = response.data.find(
      (city: City) => city.id === Number(citySearch.cityId)
    );

    return desiredCity?.nome ?? null;
  }

  private convertAccount(account: string): BankAccountType | null {
    return getBankAccountTypeFromAcronym(account);
  }

  private convertRegistration(registration: string): string {
    return registration.split(' - ')[0];
  }

  private formatBirthDate(birthDate: string): string {
    // convert from yyyy-mm-dd to ddmmyyyy
    return birthDate.split('-').reverse().join('');
  }

  private formatNumbers(number: string): string {
    // remove any special characters, leave just numbers
    return number.replace(/\D/g, '');
  }
}