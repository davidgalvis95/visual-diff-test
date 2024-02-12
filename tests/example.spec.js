// @ts-check
const { test, expect } = require("@playwright/test");
import { argosScreenshot } from "@argos-ci/playwright";
import { etsPages } from "./csvjson";

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

// test("screenshot pages", async ({ page }, workerInfo) => {
//   for (const { name, path } of pages) {
//     // const browserName = workerInfo.project.use.browserName
//     //   ?.split(" ")
//     //   .join("-")
//     //   .toLocaleLowerCase();

//     // await expect(
//     //   page.locator('.all-products__results__description__card').first()
//     // ).toBeVisible();    // const browserName = workerInfo.project.use.browserName;
//     await page.goto(`${baseUrl}${path}`);
//     await page.waitForTimeout(5000);
//     // await page.on("load", (data) => {
//     // argosScreenshot(page, `${name}-${browserName}`);
//     await argosScreenshot(page, `${name}`, {
//       viewports: [
//         { width: 1920, height: 1080 }, // Direct dimensions
//       ],
//       fullPage: true,
//     });
//   }
// });

test.describe("screenshot pages", () => {

  let count = 1;
  for (const etsPage of etsPages) {
    const name = etsPage["Item Title"]
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();
    const path = etsPage["Existing url"];

    test(`page screenshot ${count}`, async ({ page }, workerInfo) => {
      await page.goto(`${path}`);
      await page.waitForTimeout(20000);
      await argosScreenshot(page, `${name}`, {
        viewports: [{ width: 1920, height: 1080 }],
        fullPage: true,
      });
    });
    count++;
  }
});

// test("screenshot pages 2", async ({ page }, workerInfo) => {
//   for (const { name, path } of pages) {
//     // const browserName = workerInfo.project.use.browserName
//     //   ?.split(" ")
//     //   .join("-")
//     //   .toLocaleLowerCase();

//     // await expect(
//     //   page.locator('.all-products__results__description__card').first()
//     // ).toBeVisible();    // const browserName = workerInfo.project.use.browserName;
//     await page.goto(`${baseUrl}${path}`);
//     await page.waitForTimeout(5000);
//     // await page.on("load", (data) => {
//     // argosScreenshot(page, `${name}-${browserName}`);
//     await argosScreenshot(page, `${name}`, {
//       viewports: [
//         { width: 1920, height: 1080 }, // Direct dimensions
//       ],
//       fullPage: true,
//     });
//   }
// });

// test("screenshot pages 1", async ({ page }, workerInfo) => {
//   const builtPages = [];
//   for (const { name, path } of pages) {
//     const x = await page.goto(`${baseUrl}${path}`);
//     // await page.on("load", (data) => {
//     // argosScreenshot(page, `${name}-${browserName}`);\
//     const builtPage = { ...page };
//     builtPages.push({ builtPage, name });
//   }

//   await page.waitForTimeout(5000);

//   for (const builtPage of builtPages) {
//     await argosScreenshot(builtPage.builtPage, `${builtPage.name}`, {
//       viewports: [
//         { width: 1920, height: 1080 }, // Direct dimensions
//       ],
//       fullPage: true,
//     });
//   }
// });
