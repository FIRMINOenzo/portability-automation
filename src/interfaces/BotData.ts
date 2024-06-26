import { Address, Contact, PersonalData, Simulation, User } from '../models';
import { BankData } from '../models/BankData';

// trocar pelo nome do objeto que é retornado
// remoter o , deixar só como uma classe mesmo, por isso eu movi pra model
export interface BotData {
  brbUser: User;
  consistechUser: User;
  address: Address;
  bankDate: BankData;
  contact: Contact;
  simulation: Simulation;
  personalData: PersonalData;
}
