import { Proposal } from '../../interfaces/Proposal';
import { Step } from '../../step';

export class SearchProposal extends Step {
  async execute(proposal: Proposal): Promise<Proposal> {
    return proposal;
  }
}
