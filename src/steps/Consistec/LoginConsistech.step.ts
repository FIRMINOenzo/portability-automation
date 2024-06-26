import { ConsistecUrls } from '../../constants/Consistec';
import { BotData } from '../../interfaces/BotData';
import { Step } from '../../step';

export class LoginConsistechStep extends Step {
  async execute(botData: BotData): Promise<BotData> {
    await this.bot.page.goto(`${ConsistecUrls.BASE}/login`, {
      waitUntil: 'networkidle2',
    });

    await this.bot.page.type('#email', botData.user.email);
    await this.bot.page.type('#password', botData.user.password);
    await this.utils.clickButtonByText('Entrar');

    return botData;
  }
}
