import { Page } from 'puppeteer';
import { Step } from './step';
import {
  FillAlcifForm,
  DownloadCsvStep,
  LoginBrbStep,
  LoginConsitechStep,
  SearchProposal,
  SendCsvStep,
} from './steps';
import { BotData } from './interfaces/BotData';

export class Bot {
  data: BotData;
  page: Page;
  steps: Step[] = [
    // ajusta a ordem ai
    new LoginConsitechStep(),
    new SearchProposal(),
    new DownloadCsvStep(),
    new LoginBrbStep(),
    new FillAlcifForm(),
    new SendCsvStep(),
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
