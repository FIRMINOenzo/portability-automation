import inquirer from 'inquirer';
import { mockRun } from '../mock/mock';
import { Bot } from './bot';
import { BrowserService } from './services/browser.service';
import { ConsitechService } from './services/consitech.service';
import { Proposal } from './models';

async function run() {
  while (true) {
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'proposalId',
        message: 'Digite o ID da proposta:',
      },
    ]);

    if (
      !userInput.proposalId ||
      userInput.proposalId.length === 0 ||
      userInput.proposalId === ''
    ) {
      console.log('Digite um ID válido.');
      continue;
    }

    mockRun.proposal = new Proposal(userInput.proposalId);

    const browserService = new BrowserService();
    const consitechService = new ConsitechService();

    const ctx = await browserService.createPage();

    if (!ctx) {
      return null;
    }
    const bot = new Bot(ctx.page, mockRun, consitechService);

    try {
      await bot.run();
      console.log(`--- Proposta ID ${userInput.proposalId} finalizada ---`);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        console.log(
          `ID digitado: ${userInput.proposalId}. Confira o ID e tente novamente.`
        );
      }
    }
  }
}

run();
