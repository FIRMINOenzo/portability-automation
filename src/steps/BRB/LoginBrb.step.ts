import inquirer from 'inquirer';
import { AlcifUrls } from '../../constants/Alcif';
import { BotData } from '../../interfaces/BotData';
import { Step } from '../../step';

export class LoginBrbStep extends Step {
  async execute(botData: BotData): Promise<BotData> {
    await this.bot.page.goto(`${AlcifUrls.BASE}/login`, {
      waitUntil: 'networkidle2',
    });
    await this.bot.page.type('#email', botData.brbUser.email);
    await this.bot.page.type('#password', botData.brbUser.password);

    await inquirer.prompt({
      type: 'confirm',
      name: 'performCaptchaAndLogin',
      message: 'Pressione enter após realizar o captcha e logar',
    });

    return botData;
  }
}
