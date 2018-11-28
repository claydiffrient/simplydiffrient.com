import puppeteer from "puppeteer";

const SITE_URL = "http://localhost:9000";
const RESOLUTIONS = [[375, 812], [1024, 768], [1920, 1080]];

let browser;
beforeAll(async () => {
  browser = await puppeteer.launch();
});

afterAll(async () => {
  await browser.close();
});

describe.skip("Home Page", () => {
  it.each(RESOLUTIONS)("looks correct at %ix%i", async (width, height) => {
    const page = await browser.newPage();
    page.setViewport({ height, width });
    await page.goto(SITE_URL, { waitUntil: ["networkidle0"] });
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});

describe.skip("Father Page", () => {
  it.each(RESOLUTIONS)("looks correct at %ix%i", async (width, height) => {
    const page = await browser.newPage();
    page.setViewport({ height, width });
    await page.goto(`${SITE_URL}/about/father`, {
      waitUntil: ["networkidle0"]
    });
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
