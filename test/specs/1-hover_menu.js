const expect = require("chai").expect;
const PageFactory = require("../utils/page_objects/pageFactory");

describe('Hover menu shop.westerndigital.com', function () {
  let homePage;
  
  before(async function () {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();

    homePage = PageFactory.getPage("Home");
    homePage.open();

    homePage.headerMainMenu.hoverElement("Shop");
    
  });

  it('Verifying number elenents of list All Brands', async function () {
    await homePage.headerMainMenu.hoverElement("All Brands");
    const count = await homePage.headerMainMenu.takeListCount("All Brands");
    console.log("All Brands =", count);
    expect(count).to.equal(11);
  });

  it('Verifying number elenents of list WD', async function () {
    await homePage.headerMainMenu.hoverElement("WD");
    const count = await homePage.headerMainMenu.takeListCount("WD");
    console.log("WD =", count);
    expect(count).to.equal(9);
  });

  it('Verifying number elenents of list SanDisk', async function () {
    await homePage.headerMainMenu.hoverElement("SanDisk");
    const count = await  homePage.headerMainMenu.takeListCount("SanDisk");
    console.log("SanDisk =", count);
    expect(count).to.equal(8);
  });

  it('Verifying number elenents of list GTechnology', async function () {
    await homePage.headerMainMenu.hoverElement("GTechnology");
    const count = await homePage.headerMainMenu.takeListCount("GTechnology");
    console.log("GTechnology =", count);
    expect(count).to.equal(6);
  });

});