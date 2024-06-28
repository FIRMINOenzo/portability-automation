import { BotData } from '../../interfaces/BotData';
import { User } from '../../models';
import { Step } from '../../step';

export class LoginConsitechStep extends Step {
  async execute(botData: BotData): Promise<BotData> {
    const user: User = {
      email: botData.consitechUser.email,
      password: botData.consitechUser.password,
    };

    const updatedConsitechUser = await this.bot.consitechService.login(user);

    botData.consitechUser = updatedConsitechUser;

    return botData;
  }
}
