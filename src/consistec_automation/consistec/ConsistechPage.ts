import { ElementHandle, Page } from 'puppeteer';
import { UserDto } from '../../brb_automation/dto';
import { Proposal } from '../../models';
import { Bot } from '../../procedures/page.utils';

export class ConsistechPage extends Bot {
  private promptFunction: (questions: any) => Promise<any>;
  private baseUrl: string = 'https://app.consitech.com.br/#!';

  constructor(page: Page, promptFunction: (questions: any) => Promise<any>) {
    super(page);
    this.promptFunction = promptFunction;
  }

  public async login(user: UserDto) {
    await this.page.goto(`${this.baseUrl}/login`, {
      waitUntil: 'networkidle2',
    });

    await this.page.type('#email', user.email);
    await this.page.type('#password', user.password);
    await this.clickButtonByText('Entrar');
  }

  public searchForProposal(proposal: Proposal) {}
}
