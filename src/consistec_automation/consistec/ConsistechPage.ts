import { ElementHandle, Page } from "puppeteer";
import { UserDto } from "../../brb_automation/dto";
import { Proposal } from "../models";

import * as path from "path";
import { existsSync, mkdirSync } from "fs";

export class ConsistechPage {
  private page: Page;
  private promptFunction: (questions: any) => Promise<any>;
  private baseUrl: string = "https://app.consitech.com.br/#!";

  constructor(page: Page, promptFunction: (questions: any) => Promise<any>) {
    this.page = page;
    this.promptFunction = promptFunction;
  }

  private waitRandomTime() {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, Math.floor(Math.random() * 5000) + 1000);
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

  private async findButtonByText(text: string): Promise<ElementHandle | null> {
    const buttons = await this.page.$$("button");

    for (let button of buttons) {
      let buttonText = await this.page.evaluate((el) => el.textContent, button);
      if (buttonText?.includes(text)) {
        return button;
      }
    }

    return null;
  }

  private async clickButtonByText(text: string) {
    const button = await this.findButtonByText(text);
    if (button) {
      await button.click();
    } else {
      throw new Error(`Botão '${text}' não encontrado`);
    }
  }

  public async login(user: UserDto) {
    await this.page.goto(`${this.baseUrl}/login`, {
      waitUntil: "networkidle2",
    });

    await this.page.type("#email", user.email);
    await this.page.type("#password", user.password);
    await this.clickButtonByText("Entrar");
  }

  public async searchProposal(proposal: Proposal) {
    // create csv folder if not exists
    if (existsSync(path.join(process.cwd(), "csv"))) {
      mkdirSync(path.join(process.cwd(), "csv"));
      console.log("Pasta csv criada");
    }

    const client = await this.page.createCDPSession();
    await client.send("Page.setDownloadBehavior", {
      behavior: "allow",
      downloadPath: path.join(process.cwd(), "csv"),
    });

    let currentUrl = this.page.url();
    while (currentUrl !== `${this.baseUrl}/dashboard`) {
      await this.waitRandomTime();
      currentUrl = this.page.url();
    }

    await this.page.goto(`${this.baseUrl}/propostas`, {
      waitUntil: "networkidle2",
    });

    await this.typeWithEffects("input[name='id']", proposal.id);
    await this.clickButtonByText("Buscar");

    await this.page.waitForFunction(() => {
      const buscarTab = document.querySelector('li[heading="Buscar"]');
      const editarTab = document.querySelector('li[heading="Editar"]');
      return (
        !buscarTab?.classList.contains("active") &&
        editarTab?.classList.contains("active")
      );
    });

    await this.waitRandomTime();
    await this.clickButtonByText("Baixar CSV");
  }
}
