import { ElementHandle, Page } from "puppeteer";
import { ContactDto, PersonalDataDto, SimulationDto, UserDto } from "../dto";
import { AddressDto } from "../dto/address.dto";
import { BankDataDto } from "../dto/bank_data.dto";

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

  private async selectOption(selector: string, value: string): Promise<void> {
    await this.page.waitForSelector(selector);
    const exists = await this.page.evaluate(
      (selector, value) => {
        const selectElement = document.querySelector(
          selector
        ) as HTMLSelectElement;
        if (selectElement) {
          return Array.from(selectElement.options).some(
            (option) => option.value === value || option.text === value
          );
        }
        return false;
      },
      selector,
      value
    );

    if (exists) {
      await this.page.select(selector, value);
      // console.log(`Selecionada a opção '${value}' em '${selector}'`);
    } else {
      throw new Error(`Opção '${value}' não encontrada em '${selector}'`);
    }
  }

  async login(user: UserDto) {
    await this.page.goto(`${this.baseUrl}/login`, {
      waitUntil: "networkidle2",
    });
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

    await this.page.evaluate(() => {
      const body = document.querySelector("body");
      body?.click();
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
    await this.waitRandomTime();
    await this.page.keyboard.press("Enter");
    // Wait a certain amount of time and click out of the input
    await this.waitRandomTime();
    await this.page.evaluate(() => {
      const body = document.querySelector("body");
      body?.click();
    });

    await this.clickButtonByText("Avançar");
  }

  async confirmSilumation() {
    // Wait for the spinner to disappear
    await this.page.waitForSelector(".spinner-border", { hidden: true });

    await this.clickButtonByText("Avançar");
  }

  async fillInPersonalData(personalData: PersonalDataDto) {
    await this.page.waitForSelector(".spinner-border", { hidden: true });

    await this.page.evaluate(() => {
      const body = document.querySelector("body");
      body?.click();
    });

    await this.typeWithEffects("#nome", personalData.name);
    await this.selectOption("#civil", personalData.maritalStatus);
    await this.selectOption("#sexo", personalData.sex);
    await this.selectOption("#ufn", personalData.birthState);
    await this.waitRandomTime();
    await this.selectOption("#cidaden", personalData.birthCity);
    await this.typeWithEffects("#matricula", personalData.registration);
    await this.typeWithEffects("#mae", personalData.motherName);
    await this.typeWithEffects(
      "#matricula_pensionista",
      personalData.pensionerRegistration
    );
    await this.typeWithEffects("#salario", personalData.grossIncome);
    await this.typeWithEffects("#ddn", personalData.birthDate);

    await this.clickButtonByText("Avançar");
  }

  async fillInAddressData(address: AddressDto) {
    this.waitRandomTime();

    await this.page.evaluate(() => {
      const body = document.querySelector("body");
      body?.click();
    });

    await this.typeWithEffects("#cep", address.zipCode);

    this.waitRandomTime();

    await this.selectOption("#tipo_endereco", "565"); // Residencial code
    await this.selectOption("#t_log", address.addressType);
    await this.typeWithEffects("#logradouro", address.street);
    await this.typeWithEffects("#complemento", address.complement);
    await this.typeWithEffects("#numero", address.number);
    await this.typeWithEffects("#bairro", address.neighborhood);

    await this.clickButtonByText("Avançar");
  }

  async fillInContactData(contact: ContactDto) {
    this.waitRandomTime();

    await this.page.evaluate(() => {
      const body = document.querySelector("body");
      body?.click();
    });

    await this.typeWithEffects("#celular", contact.phone);
    await this.typeWithEffects("#email", contact.email);

    await this.clickButtonByText("Avançar");
  }

  async fillInBankData(bankData: BankDataDto) {
    this.waitRandomTime();

    await this.page.evaluate(() => {
      const body = document.querySelector("body");
      body?.click();
    });

    await this.selectOption("#banco", bankData.bank);
    await this.typeWithEffects("#agencia", bankData.agency);
    await this.typeWithEffects("#conta", bankData.account);
    await this.selectOption("#t_conta", bankData.accountType);

    await this.clickButtonByText("Avançar");
  }
}
