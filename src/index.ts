import { mockRun } from '../mock/mock';
import { Bot } from './bot';
import { BrowserService } from './services/browser.service';

async function run() {
  const browserService = new BrowserService();

  const ctx = await browserService.createPage();

  if (!ctx) {
    return null;
  }
  const bot = new Bot(ctx.page, mockRun);

  try {
    await bot.run();
  } catch (error) {
    throw new Error('erro');
  }
}

run();
