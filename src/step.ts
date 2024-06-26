import { Page } from 'puppeteer';
import { PageUtils } from './procedures';
import { Bot } from './bot';
import { Proposal } from './interfaces/Proposal';

export class Step {
  bot!: Bot;
  protected utils = new PageUtils(this);

  constructor() {}

  async execute(proposal: Proposal): Promise<Proposal> {
    return proposal;
  }

  init(bot: Bot) {
    this.bot = bot;
  }
}
