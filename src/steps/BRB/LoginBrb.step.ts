import { BotData } from '../../interfaces/BotData';
import { Step } from '../../step';

export class LoginBrbStep extends Step {
  async execute(botData: BotData): Promise<BotData> {
    return botData;
  }
}
