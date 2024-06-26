import { ConsistecUrls } from '../../constants/Consistec';
import { BotData } from '../../interfaces/BotData';
import { waitRandomTime } from '../../procedures';
import { Step } from '../../step';
import { Downloads } from '../../constants/Downloads';
import { System } from '../../utils';

export class SearchProposal extends Step {
  async execute(botData: BotData): Promise<BotData> {
    System.createCsvFolderIfNotExists();

    const client = await this.bot.page.createCDPSession();
    await client.send('Page.setDownloadBehavior', {
      behavior: 'allow',
      downloadPath: Downloads.PATH,
    });

    let currentUrl = this.bot.page.url();
    while (currentUrl !== `${ConsistecUrls.BASE}/dashboard`) {
      await waitRandomTime();
      currentUrl = this.bot.page.url();
    }

    await this.bot.page.goto(`${ConsistecUrls.BASE}/propostas`, {
      waitUntil: 'networkidle2',
    });

    await this.utils.typeWithEffects("input[name='id']", botData.proposal.id);
    await this.utils.clickButtonByText('Buscar');

    await this.bot.page.waitForFunction(() => {
      const buscarTab = document.querySelector('li[heading="Buscar"]');
      const editarTab = document.querySelector('li[heading="Editar"]');
      return (
        !buscarTab?.classList.contains('active') &&
        editarTab?.classList.contains('active')
      );
    });

    return botData;
  }
}
