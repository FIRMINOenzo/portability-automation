import puppeteer, { Browser, Page } from "puppeteer";
import inquirer from "inquirer";

import { AlcifPage } from "./alcif";
import { PersonalDataDto, SimulationDto, UserDto } from "./dto";
import { env } from "./shared/env";
import { MaritalStatus, Sex, State } from "./enums";

async function run() {
  const browser: Browser = await puppeteer.launch({
    headless: false,
  });

  const page: Page = await browser.newPage();
  const alcifPage: AlcifPage = new AlcifPage(page, inquirer.prompt);
  const user = new UserDto(env.user.email ?? "", env.user.password ?? "");

  await alcifPage.login(user);

  const simulation = new SimulationDto(
    "68969555897",
    "1000",
    "10000",
    "10",
    "123",
    "123",
    "7232"
  );

  await alcifPage.simulateProposal(simulation);
  await alcifPage.confirmSilumation();

  const personalData = new PersonalDataDto(
    "Jonas Abreu da Silva",
    MaritalStatus.SINGLE,
    Sex.MALE,
    "01/01/1990",
    State.SAO_PAULO,
    "Bragança Paulista",
    "123456789",
    "Maria Abreu da Silva",
    "987654321",
    "350000"
  );

  await alcifPage.fillInPersonalData(personalData);
}

run();
