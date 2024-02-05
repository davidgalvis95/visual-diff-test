// @ts-check
const { test, expect } = require('@playwright/test');
import { argosScreenshot } from "@argos-ci/playwright";


// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// test("screenshot homepage", async ({ page }) => {
//   await page.goto("/");
//   await expect(page.locator('.header-top')).toBeVisible();
//   await page.getByRole('button', { name: 'Accept All' }).click();
//   await page.screenshot({path: 'HOMEPAGE.png', fullPage: true});
// });

const baseUrl = "https://www.ets.org/";
const pages = [
  { name: "homepage", path: "/" },
  { name: "toefl", path: "/toefl.html" },
  { name: "products", path: "/products.html" },
  { name: "contact", path: "/contact.html" },
];

test("screenshot pages", async ({ page }, workerInfo) => {
  for (const { name, path } of pages) {
    const browserName = workerInfo.project.name;
    await page.goto(`${baseUrl}${path}`);
    await argosScreenshot(page, `${name}-${browserName}`);
  }
});
