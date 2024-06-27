import {
  Address,
  BankData,
  Contact,
  PersonalData,
  Simulation,
} from '../models';

export interface BrbProposalData {
  simulation: Simulation;
  personalData: PersonalData;
  address: Address;
  contact: Contact;
  bankData: BankData;
}
