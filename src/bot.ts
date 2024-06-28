import { Page } from 'puppeteer';
import { Step } from './step';
import {
  FillAlcifForm,
  LoginBrbStep,
  LoginConsitechStep,
  SearchProposal,
} from './steps';
import { BotData } from './interfaces/BotData';

export class Bot {
  data: BotData;
  page: Page;
  steps: Step[] = [
    new LoginConsitechStep(),
    new SearchProposal(),
    new LoginBrbStep(),
    new FillAlcifForm(),
  ];

  constructor(page: Page, data: BotData) {
    this.data = data;
    this.page = page;
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
