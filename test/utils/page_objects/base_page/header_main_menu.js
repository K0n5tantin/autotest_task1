const Collection = require('../base_elements/base_collection');

class HeaderMainMenu {
  constructor() {
    this.buttonShop = element(by.id('productStore'));
    
    this.buttonShopListRowAllBrands = element(by.css('section#productNavStore div[data-nav="store_all_nav"]'));
    this.buttonShopListRowWD = element(by.css('section#productNavStore div[data-nav="store_wd_nav"]'));
    this.buttonShopListRowSanDisk = element(by.css('section#productNavStore div[data-nav="store_sandisk_nav"]'));
    this.buttonShopListRowGTechnology = element(by.css('section#productNavStore div[data-nav="store_gtech_nav"]'));
  
    this.listAllProducts = new Collection("AllProducts",`section#productNavStore #store_all_nav li a`);
    this.listWDProducts = new Collection("WD",`section#productNavStore #store_wd_nav li a`);
    this.listSanDiskProducts = new Collection("SanDisk",`section#productNavStore #store_sandisk_nav li a`);
    this.listGTechnologyProducts = new Collection("GTechnology",`section#productNavStore #store_gtech_nav li a`);
  }

  async hoverElement(element){
    let hoverFunction;

    switch (element) {
        case "Shop":
            hoverFunction = await browser.actions().mouseMove(this.buttonShop).perform();
            break;  
        case "All Brands":
            hoverFunction = await browser.actions().mouseMove(this.buttonShopListRowAllBrands).perform();
            break;
        case "WD":
            hoverFunction = await browser.actions().mouseMove(this.buttonShopListRowWD).perform();
            break;
        case "SanDisk":
            hoverFunction = await browser.actions().mouseMove(this.buttonShopListRowSanDisk).perform();
            break;
        case "GTechnology":
            hoverFunction = await browser.actions().mouseMove(this.buttonShopListRowGTechnology).perform();
            break;
        default:
            logger.error(`Wrong element provided: [${element}]`);
            throw new Error('Wrong element provided.');
    }
    return hoverFunction;
  };

  async takeListCount(listRow){
    let listCountFunction;

    switch (listRow) {
        case "All Brands":
            listCountFunction = await this.listAllProducts.getCount();
            break;
        case "WD":
            listCountFunction = await this.listWDProducts.getCount();
            break;
        case "SanDisk":
            listCountFunction = await this.listSanDiskProducts.getCount();
            break;
        case "GTechnology":
            listCountFunction = await this.listGTechnologyProducts.getCount();
            break;
        default:
            logger.error(`Wrong element provided: [${listRow}]`);
            throw new Error('Wrong element provided.');
    }
    return listCountFunction;
  };

  async clickButtonAllProducts() {
    return this.buttonAllProducts.click();
  }
}

module.exports =  HeaderMainMenu;