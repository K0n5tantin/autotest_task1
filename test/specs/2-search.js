const expect = require("chai").expect;
const PageFactory = require("../utils/page_objects/pageFactory");

describe('Search shop.westerndigital.com', function () {
  let homePage, searchPage;
  let countLinks;

  const searchWord = "mp3";
  const expectedCountLinks = 2;
  
  before(async function () {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();

    homePage = PageFactory.getPage("Home");
    homePage.open();

    await homePage.search.clickSearchIcon();
    await homePage.search.enterSearchWord(searchWord);

    searchPage = PageFactory.getPage("Search", searchWord);
    await searchPage.waitResults();

  });

  it('Verifying URL', async function () {
    const url = await searchPage.getCurrenUrl();
    expect(url).to.equal(`https://shop.westerndigital.com/search?q=${searchWord}`);
  });
  
  it('Count list links', async function () {
    await searchPage.clickKnowledgeBase();
    await searchPage.waitResults();
    countLinks = await searchPage.getCountLinks();
    expect(countLinks).to.equal(expectedCountLinks);
  });
  
});