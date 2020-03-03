const Element = require("../base_elements/base_element");

class Search {
  constructor() {
    this.formSearch = new Element("Search form",'.desktop-search-container form[action="/search"]');
    this.inputSearch = element(by.css('#searchright'));
    this.iconSearch = new Element("Search icon",'label[for="searchright"]');
  }

  async clickSearchIcon() {
    return this.iconSearch.click();
  }

  async enterSearchWord(str) {
    return this.inputSearch.sendKeys(str, protractor.Key.RETURN);
  }
}

module.exports = Search;