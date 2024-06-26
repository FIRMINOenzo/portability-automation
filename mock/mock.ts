import {
  AddressType,
  BankAccountType,
  MaritalStatus,
  Sex,
  State,
} from '../src/enums';
import { Proposal } from '../src/interfaces/Proposal';
import {
  AddressDto,
  ContactDto,
  PersonalDataDto,
  SimulationDto,
  UserDto,
} from '../src/models';
import { BankDataDto } from '../src/models/bank_data.dto';

export const mockRun: Proposal = {
  user: new UserDto('asdasd', 'asdasd'),
  address: new AddressDto(
    '04020-030',
    AddressType.RESIDENTIAL,
    'Rua Euclides Bahiano',
    '337',
    '',
    'Centro'
  ),
  simulation: new SimulationDto(
    '68969555897',
    '1000',
    '10000',
    '10',
    '123',
    '123',
    '7232'
  ),
  bankDate: new BankDataDto(
    '104',
    '123456',
    '123456123456',
    BankAccountType.CURRENT
  ),
  contact: new ContactDto('11999999999', ''),
  personalData: new PersonalDataDto(
    'Jonas Abreu da Silva',
    MaritalStatus.SINGLE,
    Sex.MALE,
    '01/01/1990',
    State.SAO_PAULO,
    'Bragança Paulista',
    '123456789',
    'Maria Abreu da Silva',
    '987654321',
    '350000'
  ),
};
