import { BotData } from '../../interfaces/BotData';
import { Step } from '../../step';

export class SendCsvStep extends Step {
  async execute(botData: BotData): Promise<BotData> {
    return botData;
  }
}
