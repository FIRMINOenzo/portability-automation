import puppeteer, { Browser, Page } from "puppeteer";
import inquirer from "inquirer";

import { AlcifPage } from "./alcif";
import { SimulationDto, UserDto } from "./dto";
import { env } from "./shared/env";

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
}

run();
