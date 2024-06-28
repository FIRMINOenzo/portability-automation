import {
  AddressType,
  BankAccountType,
  MaritalStatus,
  Sex,
  State,
  Term,
} from '../src/enums';
import { BotData } from '../src/interfaces/BotData';
import {
  User,
  Address,
  Simulation,
  Contact,
  PersonalData,
  Proposal,
  ConsitechUser,
} from '../src/models';
import { BankData } from '../src/models/BankData';
import { env } from '../src/shared/env';

export const mockRun: BotData = {
  brbUser: new User(env.user.brb.email ?? '', env.user.brb.password ?? ''),
  consitechUser: new ConsitechUser(
    env.user.consitech.email ?? '',
    env.user.consitech.password ?? '',
    ''
  ),
  proposal: new Proposal('139557'),
  brbProposalData: {
    address: new Address('', AddressType.RESIDENTIAL, '', '', '', ''),
    simulation: new Simulation('', '', Term.TWELVE, '', '', '', '', ''),
    bankData: new BankData('', '', '', BankAccountType.CURRENT),
    contact: new Contact(''),
    personalData: new PersonalData(
      '',
      MaritalStatus.SINGLE,
      Sex.MALE,
      '',
      State.SAO_PAULO,
      '',
      '',
      ''
    ),
  },
};
