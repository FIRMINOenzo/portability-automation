import { mockRun } from '../mock/mock';
import { Bot } from './bot';
import { BrowserService } from './services/browser.service';

async function run() {
  const browserService = new BrowserService();

  const ctx = await browserService.createPage();

  if (!ctx) {
    return null;
  }
  const bot = new Bot(ctx.page, mockRun);

  try {
    await bot.run();
  } catch (error) {
    throw new Error('erro');
  }

  // const alcifPage: AlcifPage = new AlcifPage(page, inquirer.prompt);
  // const user = new UserDto(env.user.email ?? '', env.user.password ?? '');

  // await alcifPage.login(user);

  // const simulation = new SimulationDto(
  //   '68969555897',
  //   '1000',
  //   '10000',
  //   '10',
  //   '123',
  //   '123',
  //   '7232'
  // );

  // await alcifPage.simulateProposal(simulation);
  // await alcifPage.confirmSilumation();

  // const personalData = new PersonalDataDto(
  //   'Jonas Abreu da Silva',
  //   MaritalStatus.SINGLE,
  //   Sex.MALE,
  //   '01/01/1990',
  //   State.SAO_PAULO,
  //   'Bragança Paulista',
  //   '123456789',
  //   'Maria Abreu da Silva',
  //   '987654321',
  //   '350000'
  // );

  // await alcifPage.fillInPersonalData(personalData);

  // const address = new AddressDto(
  //   '04020-030',
  //   AddressType.RESIDENTIAL,
  //   'Rua Euclides Bahiano',
  //   '337',
  //   '',
  //   'Centro'
  // );

  // await alcifPage.fillInAddressData(address);

  // const contact = new ContactDto('11999999999', '');

  // await alcifPage.fillInContactData(contact);

  // const bankData = new BankDataDto(
  //   '104',
  //   '123456',
  //   '123456123456',
  //   BankAccountType.CURRENT
  // );

  // await alcifPage.fillInBankData(bankData);
}

// async function run2() {
//   const browser: Browser = await puppeteer.launch({
//     headless: false,
//   });

//   const page: Page = await browser.newPage();
//   const consistechPage: ConsistechPage = new ConsistechPage(
//     page,
//     inquirer.prompt
//   );
//   const user = new UserDto('retencao@vsfinanceira.com.br', 'vs@3105');

//   await consistechPage.login(user);
// }

// run2();

run();
