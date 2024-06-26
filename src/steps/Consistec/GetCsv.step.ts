import { BotData } from '../../interfaces/BotData';
import { Step } from '../../step';

export class GetCsvStep extends Step {
  async execute(botData: BotData): Promise<BotData> {
    return botData;
  }
}
