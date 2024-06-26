import { BRBUrls } from '../../constants/BRB';
import { Proposal } from '../../interfaces/Proposal';
import { Step } from '../../step';

export class LoginConsistechStep extends Step {
  async execute(proposal: Proposal): Promise<Proposal> {
    await this.bot.page.goto(`${BRBUrls.BASE}/login`, {
      waitUntil: 'networkidle2',
    });

    await this.bot.page.type('#email', proposal.user.email);
    await this.bot.page.type('#password', proposal.user.password);
    await this.utils.clickButtonByText('Entrar');

    return proposal;
  }
}
