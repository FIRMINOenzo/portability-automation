import { Page } from "puppeteer";
import { SimulationDto, UserDto } from "../dto";

export class AlcifPage {
  private page: Page;
  private promptFunction: (questions: any) => Promise<any>;
  private baseUrl: string = "https://simulador.incontadigital.com.br";

  constructor(page: Page, promptFunction: (questions: any) => Promise<any>) {
    this.page = page;
    this.promptFunction = promptFunction;
  }

  private waitRandomTime() {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, Math.floor(Math.random() * 4000) + 1000);
    });
  }

  private async typeWithEffects(selector: string, text: string) {
    await this.page.waitForSelector(selector);
    await this.page.focus(selector);
    await this.page.evaluate((selector: string) => {
      const element = document.querySelector(selector) as HTMLInputElement;
      if (element) {
        element.value = "";
      }
    }, selector);
    await this.page.type(selector, text);
    await this.page.evaluate((selector: string) => {
      const element = document.querySelector(selector) as HTMLInputElement;
      if (element) {
        const inputEvent = new Event("input", { bubbles: true });
        element.dispatchEvent(inputEvent);
        const changeEvent = new Event("change", { bubbles: true });
        element.dispatchEvent(changeEvent);
      }
    }, selector);
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

  async simulateProposal(client: SimulationDto) {
    await this.page.goto(`${this.baseUrl}/admin/Portabilidade`, {
      waitUntil: "networkidle2",
    });

    await this.typeWithEffects("#cpf", client.cpf);
    await this.typeWithEffects("#valor_parcela", client.installmentValue);
    await this.typeWithEffects("#saldo_devedor", client.outstandingBalance);
    await this.typeWithEffects("#contrato_portado", client.portedContract);
    await this.typeWithEffects("#parcela_portada", client.portedInstallment);
    await this.typeWithEffects("#parcelas_total", client.remainingInstallments);

    // Select covenant
    await this.page.waitForSelector("#convenio_id");
    await this.page.select("#convenio_id", "28");

    // Ported bank selection
    await this.page.waitForSelector(".css-13cymwt-control");
    await this.page.click(".css-13cymwt-control");
    await this.page.waitForSelector(".css-19bb58m");
    await this.typeWithEffects("#react-select-3-input", "Banco BS2 S.A.");
    await this.page.keyboard.press("Enter");
    // Wait a certain amount of time and click out of the input
    await this.waitRandomTime();
    await this.page.evaluate(() => {
      const body = document.querySelector("body");
      body?.click();
    });

    const buttons = await this.page.$$("button");
    let buttonAdvance;

    for (let button of buttons) {
      let buttonText = await this.page.evaluate((el) => el.textContent, button);
      if (buttonText?.includes("Avançar")) {
        buttonAdvance = button;
        break;
      }
    }

    if (buttonAdvance) {
      await buttonAdvance.click();
    } else {
      console.error("Botão 'Avançar' não encontrado");
    }
  }
}
