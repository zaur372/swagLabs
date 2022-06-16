const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.demoblaze.com/',
      show: false,
      browser: 'chromium',
      video: true,
      waitForNavigation: "domcontentloaded",
    }
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/main.js',
    productPage: './pages/product.js',
    cartPage: './pages/cart.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'swagLabs'
}