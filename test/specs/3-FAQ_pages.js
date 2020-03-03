const expect = require("chai").expect;
const PageFactory = require("../utils/page_objects/pageFactory");

describe('FAQ pages shop.westerndigital.com', function () {
  let homePage;

  before(async function () {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();

    homePage = PageFactory.getPage("Home"); 
    await homePage.open();

  });

  it('Verifying Order Status footer link', async function () {
    await homePage.footer.clickButtonOrderStatus();
    
    let orderStatusPage = PageFactory.getPage("Order Status");
    await orderStatusPage.waitPage();

    const url = await orderStatusPage.getCurrenUrl();
    expect(url).to.equal(`https://shop.westerndigital.com/store/orderStatus`);
  });
  
  it('Verifying Shopping FAQ footer link', async function () {
    await homePage.footer.clickButtonShoppingFAQ();
    
    let shopingFAQPage = PageFactory.getPage("Shopping FAQ");
    await shopingFAQPage.waitPage();

    const url = await shopingFAQPage.getCurrenUrl();
    expect(url).to.equal(`https://shop.westerndigital.com/shopping-faq`);
  });
  
  it('Verifying Return Policy footer link', async function () {
    await homePage.footer.clickButtonReturnPolicy();
    
    let returnPolicyPage = PageFactory.getPage("Return Policy");
    await returnPolicyPage.waitPage();

    const url = await returnPolicyPage.getCurrenUrl();
    expect(url).to.equal(`https://shop.westerndigital.com/return-policy`);
  });

  it('Verifying Warranty Policy footer link', async function () {
    await homePage.footer.clickButtonWarrantyPolicy();
    
    let warrantyPolicyPage = PageFactory.getPage("Warranty Policy");
    await warrantyPolicyPage.waitPage();

    const url = await warrantyPolicyPage.getCurrenUrl();
    expect(url).to.equal(`https://shop.westerndigital.com/warranty`);
  });
  
});