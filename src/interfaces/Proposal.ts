import {
  AddressDto,
  ContactDto,
  PersonalDataDto,
  SimulationDto,
  UserDto,
} from '../models';
import { BankDataDto } from '../models/bank_data.dto';

// trocar pelo nome do objeto que é retornado
// remoter o dto, deixar só como uma classe mesmo, por isso eu movi pra model
export interface Proposal {
  user: UserDto;
  address: AddressDto;
  bankDate: BankDataDto;
  contact: ContactDto;
  simulation: SimulationDto;
  personalData: PersonalDataDto;
}
