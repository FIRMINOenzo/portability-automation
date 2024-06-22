import { Page } from "puppeteer";
import { ClientDto, UserDto } from "../dto";

export class AlcifPage {
  private page: Page;
  private promptFunction: (questions: any) => Promise<any>;
  private baseUrl: string = "https://simulador.incontadigital.com.br";

  constructor(page: Page, promptFunction: (questions: any) => Promise<any>) {
    this.page = page;
    this.promptFunction = promptFunction;
  }

  async login(user: UserDto) {
    await this.page.goto(`${this.baseUrl}/login`);
    await this.page.type("#email", user.email);
    await this.page.type("#password", user.password);

    await this.promptFunction({
      type: "confirm",
      name: "performCaptchaAndLogin",
      message: "Pressione enter após realizar o captcha e logar",
    });
  }

  async insertProposal(client: ClientDto) {
    // ...
  }
}
