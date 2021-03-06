const BasePage = require("../base_page/base_page");

class HomePage extends BasePage {
  constructor() {
    super();
    this.url = "https://shop.westerndigital.com";
  }
  open() {
    return super.open(this.url);
  }
};

module.exports = HomePage;