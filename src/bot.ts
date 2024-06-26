import { Page } from 'puppeteer';
import { Step } from './step';
import { GetCsvStep } from './steps/Consistec/GetCsv.step';
import { LoginBrbStep } from './steps/BRB/LoginBrb.step';
import { LoginConsistechStep } from './steps/Consistec/LoginConsistech.step';
import { SendCsvStep } from './steps/BRB/SendCsv.step';
import { SearchProposal } from './steps/Consistec/SearchProposal.step';
import { FillAlcifForm } from './steps/BRB/FillAlcifForm.step';
import { Proposal } from './interfaces/Proposal';

export class Bot {
  data: Proposal;
  page: Page;
  steps: Step[] = [
    // ajusta a ordem ai
    new LoginConsistechStep(),
    new SearchProposal(),
    new GetCsvStep(),
    new LoginBrbStep(),
    new FillAlcifForm(),
    new SendCsvStep(),
  ];

  constructor(page: Page, data: Proposal) {
    this.data = data;
    this.page = page;
  }

  async run() {
    for (const step of this.steps) {
      step.init(this);
      await step.execute();
    }
  }
}
