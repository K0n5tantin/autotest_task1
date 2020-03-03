const HeaderMainMenu = require('./header_main_menu');
const Search = require('./search');
const Footer = require('./footer');

class BasePage {
  constructor() {
    this.headerMainMenu = new HeaderMainMenu();
    this.search = new Search();
    this.footer = new Footer();
  }
  
  wait(waitInMilliseconds) {
    return browser.sleep(waitInMilliseconds);
  };

  async getCurrenUrl() {
    const currentUrl = await browser.getCurrentUrl();
    return currentUrl;
  };

  async getTitle() {
    return browser.getTitle();
  };

  open(url) {
    return browser.get(url);
  };
}

module.exports = BasePage;