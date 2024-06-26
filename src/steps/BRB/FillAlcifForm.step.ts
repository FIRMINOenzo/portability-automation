import { AlcifUrls } from '../../constants/Alcif';
import { Proposal } from '../../interfaces/Proposal';
import {
  SimulationDto,
  PersonalDataDto,
  AddressDto,
  ContactDto,
} from '../../models';
import { BankDataDto } from '../../models/bank_data.dto';
import { waitRandomTime } from '../../procedures';
import { Step } from '../../step';

export class FillAlcifForm extends Step {
  async execute(proposal: Proposal): Promise<Proposal> {
    return proposal;
  }

  async simulateProposal(client: SimulationDto) {
    await this.bot.page.goto(`${AlcifUrls.BASE}/admin/Portabilidade`, {
      waitUntil: 'networkidle2',
    });

    await this.bot.page.evaluate(() => {
      const body = document.querySelector('body');
      body?.click();
    });

    await this.utils.typeWithEffects('#cpf', client.cpf);
    await this.utils.typeWithEffects('#valor_parcela', client.installmentValue);
    await this.utils.typeWithEffects(
      '#saldo_devedor',
      client.outstandingBalance
    );
    await this.utils.typeWithEffects(
      '#contrato_portado',
      client.portedContract
    );
    await this.utils.typeWithEffects(
      '#parcela_portada',
      client.portedInstallment
    );
    await this.utils.typeWithEffects(
      '#parcelas_total',
      client.remainingInstallments
    );

    // Select covenant
    await this.bot.page.waitForSelector('#convenio_id');
    await this.bot.page.select('#convenio_id', '28');

    // Ported bank selection
    await this.bot.page.waitForSelector('.css-13cymwt-control');
    await this.bot.page.click('.css-13cymwt-control');
    await this.bot.page.waitForSelector('.css-19bb58m');
    await this.utils.typeWithEffects('#react-select-3-input', 'Banco BS2 S.A.');
    await waitRandomTime();
    await this.bot.page.keyboard.press('Enter');
    // Wait a certain amount of time and click out of the input
    await waitRandomTime();
    await this.bot.page.evaluate(() => {
      const body = document.querySelector('body');
      body?.click();
    });

    await this.utils.clickButtonByText('Avançar');
  }

  async confirmSilumation() {
    // Wait for the spinner to disappear
    await this.bot.page.waitForSelector('.spinner-border', { hidden: true });

    await this.utils.clickButtonByText('Avançar');
  }

  async fillInPersonalData(personalData: PersonalDataDto) {
    await this.bot.page.waitForSelector('.spinner-border', { hidden: true });

    await this.bot.page.evaluate(() => {
      const body = document.querySelector('body');
      body?.click();
    });

    await this.utils.typeWithEffects('#nome', personalData.name);
    await this.utils.selectOption('#civil', personalData.maritalStatus);
    await this.utils.selectOption('#sexo', personalData.sex);
    await this.utils.selectOption('#ufn', personalData.birthState);
    await waitRandomTime();
    await this.utils.selectOption('#cidaden', personalData.birthCity);
    await this.utils.typeWithEffects('#matricula', personalData.registration);
    await this.utils.typeWithEffects('#mae', personalData.motherName);
    await this.utils.typeWithEffects(
      '#matricula_pensionista',
      personalData.pensionerRegistration
    );
    await this.utils.typeWithEffects('#salario', personalData.grossIncome);
    await this.utils.typeWithEffects('#ddn', personalData.birthDate);

    await this.utils.clickButtonByText('Avançar');
  }

  async fillInAddressData(address: AddressDto) {
    waitRandomTime();

    await this.bot.page.evaluate(() => {
      const body = document.querySelector('body');
      body?.click();
    });

    await this.utils.typeWithEffects('#cep', address.zipCode);

    waitRandomTime();

    await this.utils.selectOption('#tipo_endereco', '565'); // Residencial code
    await this.utils.selectOption('#t_log', address.addressType);
    await this.utils.typeWithEffects('#logradouro', address.street);
    await this.utils.typeWithEffects('#complemento', address.complement);
    await this.utils.typeWithEffects('#numero', address.number);
    await this.utils.typeWithEffects('#bairro', address.neighborhood);

    await this.utils.clickButtonByText('Avançar');
  }

  async fillInContactData(contact: ContactDto) {
    waitRandomTime();

    await this.bot.page.evaluate(() => {
      const body = document.querySelector('body');
      body?.click();
    });

    await this.utils.typeWithEffects('#celular', contact.phone);
    await this.utils.typeWithEffects('#email', contact.email);

    await this.utils.clickButtonByText('Avançar');
  }

  async fillInBankData(bankData: BankDataDto) {
    waitRandomTime();

    await this.bot.page.evaluate(() => {
      const body = document.querySelector('body');
      body?.click();
    });

    await this.utils.selectOption('#banco', bankData.bank);
    await this.utils.typeWithEffects('#agencia', bankData.agency);
    await this.utils.typeWithEffects('#conta', bankData.account);
    await this.utils.selectOption('#t_conta', bankData.accountType);

    await this.utils.clickButtonByText('Avançar');
  }
}
