import { Page } from 'puppeteer';
import { Step } from './step';
import {
  FillAlcifForm,
  LoginBrbStep,
  LoginConsitechStep,
  GetProposalData,
} from './steps';
import { BotData } from './interfaces/BotData';
import { ConsitechService } from './services/consitech.service';

export class Bot {
  data: BotData;
  page: Page;
  consitechService: ConsitechService;
  steps: Step[] = [
    new LoginConsitechStep(),
    new GetProposalData(),
    new LoginBrbStep(),
    new FillAlcifForm(),
  ];

  constructor(page: Page, data: BotData, consitechService: ConsitechService) {
    this.data = data;
    this.page = page;
    this.consitechService = consitechService;
  }

  get _page() {
    return this.page;
  }

  async run() {
    for (const step of this.steps) {
      step.init(this);
      await step.execute(this.data);
    }
  }
}
