const BasePage = require("../base_page/base_page");
const Collection = require('../base_elements/base_collection');

class SearchPage extends BasePage {
  constructor(SearchValue) {
    super();
    
    this.url = `https://shop.westerndigital.com/search?q=${SearchValue}`;
    this.buttonKnowledgeBase = element(by.css('.ng-scope[ng-repeat^="facetVal in jsonData track by $index"]:nth-child(4n) .checkbox'));
    this.linkList = new Collection("linkList",`div[ng-repeat="resultObj in searchResp.docs track by $index"]`);
    this.lastResult = element(by.css('.search-results>div:last-child'));
    
  }

  open() {
    return super.open(this.url);
  }

  async clickKnowledgeBase() {
    browser.wait(
      protractor.ExpectedConditions.presenceOf(this.buttonKnowledgeBase),
      5000);

    return this.buttonKnowledgeBase.click();
  }

  async waitResults() {
    browser.wait(
      protractor.ExpectedConditions.urlContains(this.url),
      5000);

    return browser.wait(
      protractor.ExpectedConditions.presenceOf(this.lastResult),
      4000);
  }

  async getCountLinks() {
    let linksCount = await this.linkList.getCount();
    return linksCount;
  }
};

module.exports = SearchPage;