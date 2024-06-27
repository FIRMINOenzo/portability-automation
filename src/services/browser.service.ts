import puppeteer, { Browser, Page } from 'puppeteer';

type Context = {
  page: Page;
  browser: Browser;
};

export class BrowserService {
  private interceptRequests = ['font', '.css'];

  async createPage(): Promise<Context | null> {
    try {
      const browser: Browser = await puppeteer.launch({
        headless: false,
      });

      const page: Page = await browser.newPage();

      await page.setRequestInterception(true);

      page.on('request', (req) => {
        if (
          this.interceptRequests.includes(req.resourceType()) ||
          this.interceptRequests.includes(req.url())
        ) {
          req.abort();
        } else {
          req.continue();
        }
      });

      return {
        browser,
        page,
      };
    } catch (error) {
      return null;
    }
  }
}
