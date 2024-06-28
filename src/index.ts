import { mockRun } from '../mock/mock';
import { Bot } from './bot';
import { BrowserService } from './services/browser.service';
import { ConsitechService } from './services/consitech.service';

async function run() {
  const browserService = new BrowserService();
  const consitechService = new ConsitechService();

  const ctx = await browserService.createPage();

  if (!ctx) {
    return null;
  }
  const bot = new Bot(ctx.page, mockRun, consitechService);

  try {
    await bot.run();
  } catch (error) {
    throw new Error('erro');
  }
}

run();
