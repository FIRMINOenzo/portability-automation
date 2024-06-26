import { Proposal } from '../../interfaces/Proposal';
import { Step } from '../../step';

export class GetCsvStep extends Step {
  async execute(proposal: Proposal): Promise<Proposal> {
    return proposal;
  }
}
