const BasePage = require("../base_page/base_page");

class WarrantyPolicyPage extends BasePage {
  constructor() {
    super();
    this.url = "https://shop.westerndigital.com/warranty";
    this.element = element(by.css(".footer"));
  }
  open() {
    return super.open(this.url);
  }
  async waitPage() {
    browser.wait(
      protractor.ExpectedConditions.urlContains(this.url),
      5000);

    return browser.wait(
      protractor.ExpectedConditions.presenceOf(this.element),
      5000);
  }
};

module.exports = WarrantyPolicyPage;