import { BotData } from '../../interfaces/BotData';
import { Step } from '../../step';

export class GetProposalData extends Step {
  async execute(botData: BotData): Promise<BotData> {
    const brbProposalData = await this.bot.consitechService.getProposalData(
      botData.proposal,
      botData.consitechUser.token
    );

    botData.brbProposalData = brbProposalData;

    return botData;
  }
}
