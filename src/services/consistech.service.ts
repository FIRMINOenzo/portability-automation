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

export class ConsistechService {
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
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.data;
      const convertedState = await this.convertState(data.uf);
      const convertedAccount = await this.convertAccount(data.info_tipo_conta);
      const convertedCity = await this.convertCity(
        {
          stateId: data.uf,
          cityId: data.cidade,
        },
        token
      );

      if (!convertedState) throw new Error('Error converting state');
      if (!convertedAccount) throw new Error('Error converting account');
      if (!convertedCity) throw new Error('Error converting city');

      const brbProposalData: BrbProposalData = {
        simulation: {
          cpf: data.cpf,
          installmentValue: data.contrato_parcela,
          outstandingBalance: data.contrato_saldo,
          portedBank: data.contrato_banco,
          portedContract: data.numeroDoContrato,
          // valor da parcela!!!!
          portedInstallment: data.contrato_parcela,
          remainingInstallments: data.contrato_parcela_rest,
          term: data.contrato_qtd_parcela,
        },
        personalData: {
          birthDate: '',
          birthCity: convertedCity,
          birthState: convertedState,
          maritalStatus: MaritalStatus.SINGLE,
          name: data.nome,
          motherName: data.docNomeDaMae,
          // matricula "beneficio": "1738771498 - RJ", SOMENTE O NUMERO
          registration: data.beneficio,
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
    } catch (error) {
      throw new Error('Error getting proposal data');
    }
  }

  private async convertState(stateId: number): Promise<State | null> {
    return getStateFromId(stateId);
  }

  private async convertCity(
    citySearch: CitySearch,
    token: string
  ): Promise<string | null> {
    const response = await axios.post(
      `${ConsitechUrls.BASE}/cep/getCidades`,
      {
        estado: citySearch.stateId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const desiredCity: City | undefined = response.data.find(
      (city: City) => city.id === Number(citySearch.cityId)
    );

    return desiredCity?.nome ?? null;
  }

  private async convertAccount(
    account: string
  ): Promise<BankAccountType | null> {
    return getBankAccountTypeFromAcronym(account);
  }
}
