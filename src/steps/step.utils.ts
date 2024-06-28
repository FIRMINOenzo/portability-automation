import { ElementHandle, Page } from 'puppeteer';
import { Step } from '../step';

export class StepUtils {
  page!: Page;

  constructor(protected readonly step: Step) {}

  async typeWithEffects(selector: string, text: string) {
    await this.page.waitForSelector(selector);
    await this.page.focus(selector);
    await this.page.evaluate((selector: string) => {
      const element = document.querySelector(selector) as HTMLInputElement;
      if (element) {
        element.value = '';
      }
    }, selector);
    await this.page.type(selector, text);
    await this.page.evaluate((selector: string) => {
      const element = document.querySelector(selector) as HTMLInputElement;
      if (element) {
        const inputEvent = new Event('input', { bubbles: true });
        element.dispatchEvent(inputEvent);
        const changeEvent = new Event('change', { bubbles: true });
        element.dispatchEvent(changeEvent);
      }
    }, selector);
  }

  async findButtonByText(text: string): Promise<ElementHandle | null> {
    const buttons = await this.page.$$('button');

    for (let button of buttons) {
      let buttonText = await this.page.evaluate((el) => el.textContent, button);
      if (buttonText?.includes(text)) {
        return button;
      }
    }

    return null;
  }

  async clickButtonByText(text: string) {
    const button = await this.findButtonByText(text);
    if (button) {
      await button.click();
    } else {
      throw new Error(`Botão '${text}' não encontrado`);
    }
  }

  async selectOption(selector: string, value: string): Promise<void> {
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
    } else {
      throw new Error(`Opção '${value}' não encontrada em '${selector}'`);
    }
  }
}
