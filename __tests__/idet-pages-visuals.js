import puppeteer from "puppeteer";

const SITE_URL = "http://localhost:9000";
const RESOLUTIONS = [[375, 812], [1024, 768], [1920, 1080]];

describe("IDET", () => {
  let browser;
  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  afterAll(async () => {
    await browser.close();
  });

  describe("Index Page", () => {
    it.each(RESOLUTIONS)("looks correct at %ix%i", async (width, height) => {
      const page = await browser.newPage();
      page.setViewport({ height, width });
      await page.goto(`${SITE_URL}/idet`, {
        waitUntil: ["networkidle0"]
      });
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });
  });

  describe("Integration of Ed Tech", () => {
    describe("Index Page", () => {
      it.each(RESOLUTIONS)("looks correct at %ix%i", async (width, height) => {
        const page = await browser.newPage();
        page.setViewport({ height, width });
        await page.goto(`${SITE_URL}/idet/integration-portfolio`, {
          waitUntil: ["networkidle0"]
        });
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
      });
    });

    // describe("Objective Page with Box Embed (#1)", () => {
    //   it.each(RESOLUTIONS)("looks correct at %ix%i", async (width, height) => {
    //     const page = await browser.newPage();
    //     page.setViewport({ height, width });
    //     await page.goto(`${SITE_URL}/idet/integration-portfolio/obj-1`, {
    //       waitUntil: ["networkidle0"]
    //     });
    //     const image = await page.screenshot();
    //     expect(image).toMatchImageSnapshot();
    //   });
    // });

    describe("Objective Page with Link Artifact (#3)", () => {
      it.each(RESOLUTIONS)("looks correct at %ix%i", async (width, height) => {
        const page = await browser.newPage();
        page.setViewport({ height, width });
        await page.goto(`${SITE_URL}/idet/integration-portfolio/obj-3`, {
          waitUntil: ["networkidle0"]
        });
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
      });
    });

    describe("Objective Page with Image Artifact (#4)", () => {
      it.each(RESOLUTIONS)("looks correct at %ix%i", async (width, height) => {
        const page = await browser.newPage();
        page.setViewport({ height, width });
        await page.goto(`${SITE_URL}/idet/integration-portfolio/obj-4`, {
          waitUntil: ["networkidle0"]
        });
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
      });
    });
  });
});
