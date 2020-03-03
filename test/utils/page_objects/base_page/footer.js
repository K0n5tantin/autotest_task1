const Element = require("../base_elements/base_element");

class Footer {
  constructor() {
    this.buttonOrderStatus = new Element("Order Status Button",'.section.parbase .footer li a[href="/store/orderStatus"]');
    this.buttonShopingFAQ = new Element("Shoping FAQ Button",'.section.parbase .footer li a[href="/shopping-faq"]');
    this.buttonReturnPolicy = new Element("Return Policy Button",'.section.parbase .footer li a[href="/return-policy"]');
    this.buttonWarrantyPolicy = new Element("Warranty Policy Button",'.section.parbase .footer li a[href="/warranty"]');
  }

  async clickButtonOrderStatus() {
    browser.wait(        
        protractor.ExpectedConditions.elementToBeClickable(this.buttonOrderStatus.getElement()), 
        5000)
    browser.executeScript("arguments[0].scrollIntoView();", this.buttonOrderStatus.getElement());
    return this.buttonOrderStatus.click();
  }

  async clickButtonShoppingFAQ() {
    browser.wait(        
        protractor.ExpectedConditions.elementToBeClickable(this.buttonShopingFAQ.getElement()), 
        5000)
    browser.executeScript("arguments[0].scrollIntoView();", this.buttonShopingFAQ.getElement());
    return this.buttonShopingFAQ.click();
  }

  async clickButtonReturnPolicy() {
    browser.wait(        
        protractor.ExpectedConditions.elementToBeClickable(this.buttonReturnPolicy.getElement()), 
        5000)
    browser.executeScript("arguments[0].scrollIntoView();", this.buttonReturnPolicy.getElement());
    return this.buttonReturnPolicy.click();
  }

  async clickButtonWarrantyPolicy() {
    browser.wait(        
        protractor.ExpectedConditions.elementToBeClickable(this.buttonWarrantyPolicy.getElement()), 
        5000)
    browser.executeScript("arguments[0].scrollIntoView();", this.buttonWarrantyPolicy.getElement());
    return this.buttonWarrantyPolicy.click();
  }
}

module.exports =  Footer;