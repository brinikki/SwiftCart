const puppeteer = require("puppeteer");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const product_link =
  "https://www.walmart.com/ip/Better-Homes-Gardens-16-5oz-Red-Lava-Citrus-Scented-2-Wick-Pagoda-Jar-Candle/5164703616?athbdg=L1600";

async function givePage() {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  return page;
}

async function addToCart(page) {
  await page.goto(product_link);
  //add to cart part
  await page.waitForSelector("button[data-automation-id='atc']");
  await page.click("button[data-automation-id='atc']", (elem) => elem.click());
  await page.waitForSelector("button[id='Continue to checkout button']");
  await page.click("button[id='Continue to checkout button']", (elem) =>
    elem.click(),
  );
}
//fill in fake email address
// first part is the attribute
async function SignIn(page) {
  await page.waitForSelector("input[name='Email Address']");
  await page.type("input[name='Email Address']", "hithere@gmail.com");
}

async function checkOut() {
  var page = await givePage();
  await addToCart(page);
}

checkOut();
