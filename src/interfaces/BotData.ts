import { Proposal, User } from '../models';
import { BrbProposalData } from './BrbProposalData';

// trocar pelo nome do objeto que é retornado
// remoter o , deixar só como uma classe mesmo, por isso eu movi pra model
export interface BotData {
  brbUser: User;
  consistechUser: User;
  proposal: Proposal;
  brbProposalData: BrbProposalData;
}
