import {
  AddressType,
  BankAccountType,
  MaritalStatus,
  Sex,
  State,
} from '../src/enums';
import { BotData } from '../src/interfaces/BotData';
import {
  User,
  Address,
  Simulation,
  Contact,
  PersonalData,
  Proposal,
} from '../src/models';
import { BankData } from '../src/models/BankData';
import { env } from '../src/shared/env';

export const mockRun: BotData = {
  brbUser: new User(env.user.brb.email || '', env.user.brb.password || ''),
  consistechUser: new User(
    env.user.consistech.email || '',
    env.user.consistech.password || ''
  ),
  address: new Address(
    '04020-030',
    AddressType.RESIDENTIAL,
    'Rua Euclides Bahiano',
    '337',
    '',
    'Centro'
  ),
  simulation: new Simulation(
    '68969555897',
    '1000',
    '10000',
    '10',
    '123',
    '123',
    '7232'
  ),
  bankDate: new BankData(
    '104',
    '123456',
    '123456123456',
    BankAccountType.CURRENT
  ),
  contact: new Contact('11999999999', ''),
  personalData: new PersonalData(
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
  proposal: new Proposal('139557'),
};
