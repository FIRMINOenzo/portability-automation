import { Page } from 'puppeteer';
import { Bot } from './bot';
import { BotData } from './interfaces/BotData';
import { StepUtils } from './procedures';

export class Step {
  bot!: Bot;
  protected utils = new StepUtils(this);

  constructor() {}

  async execute(botData: BotData): Promise<BotData> {
    return botData;
  }

  init(bot: Bot) {
    this.bot = bot;
    this.utils.page = this.bot._page;
  }
}
