import axios from 'axios';
import {
  User,
  ConsitechUser,
  Proposal,
  Simulation,
  Address,
  PersonalData,
  Contact,
  BankData,
} from '../models';
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

    const simulation: Simulation = new Simulation(
      data.cpf,
      data.contrato_parcela,
      data.contrato_qtd_parcela.toString(),
      data.contrato_saldo,
      data.contrato_parcela_rest.toString(),
      data.contrato_banco,
      data.numeroDoContrato,
      data.contrato_parcela
    );

    const personalData: PersonalData = new PersonalData(
      data.nome,
      MaritalStatus.SINGLE,
      Sex.MALE,
      data.dataDeNascimento,
      convertedState,
      convertedCity,
      data.beneficio,
      data.docNomeDaMae
    );

    const address: Address = new Address(
      data.cep,
      AddressType.RESIDENTIAL,
      data.logradouro,
      data.numero,
      '',
      data.bairro
    );

    const contact: Contact = new Contact(data.telefone_celular);

    const bankData: BankData = new BankData(
      data.info_banco,
      data.info_agencia,
      data.info_conta,
      convertedAccount
    );

    const brbProposalData: BrbProposalData = {
      simulation,
      personalData,
      address,
      contact,
      bankData,
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
}
