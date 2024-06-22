import puppeteer, { Browser, Page } from "puppeteer";
import inquirer from "inquirer";

import { AlcifPage } from "./alcif";
import { UserDto } from "./dto";
import { env } from "./shared/env";

async function run() {
  const browser: Browser = await puppeteer.launch({
    headless: false,
  });

  const page: Page = await browser.newPage();
  const alcifPage: AlcifPage = new AlcifPage(page, inquirer.prompt);
  const user = new UserDto(env.user.email ?? "", env.user.password ?? "");

  await alcifPage.login(user);
}

run();
