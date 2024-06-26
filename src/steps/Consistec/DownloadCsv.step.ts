import { Downloads } from '../../constants/Downloads';
import { BotData } from '../../interfaces/BotData';
import { waitRandomTime } from '../../procedures';
import { Step } from '../../step';
import { System } from '../../utils';

export class DownloadCsvStep extends Step {
  async execute(botData: BotData): Promise<BotData> {
    await waitRandomTime();

    System.createCsvFolderIfNotExists();

    const client = await this.bot.page.createCDPSession();
    await client.send('Page.setDownloadBehavior', {
      behavior: 'allow',
      downloadPath: Downloads.PATH,
    });

    await this.utils.clickButtonByText('Baixar CSV');

    return botData;
  }
}
