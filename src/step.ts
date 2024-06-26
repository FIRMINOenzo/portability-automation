import { Page } from 'puppeteer';
import { PageUtils } from './procedures';
import { Bot } from './bot';
import { BotData } from './interfaces/BotData';

export class Step {
  bot!: Bot;
  protected utils = new PageUtils(this);

  constructor() {}

  async execute(botData: BotData): Promise<BotData> {
    return botData;
  }

  init(bot: Bot) {
    this.bot = bot;
    this.utils.page = this.bot._page;
  }
}
