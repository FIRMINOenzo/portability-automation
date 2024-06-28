import { BotData } from '../../interfaces/BotData';
import { User } from '../../models';
import { Step } from '../../step';

export class LoginConsitechStep extends Step {
  async execute(botData: BotData): Promise<BotData> {
    const user: User = {
      email: botData.consitechUser.email,
      password: botData.consitechUser.password,
    };

    // const response = await this.consitechService.login(user);

    return botData;
  }
}
