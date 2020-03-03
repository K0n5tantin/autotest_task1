const BasePage = require("./base_page/base_page");
const HomePage = require("./home_page/home_page");
const OrderStatusPage = require("./faq_pages/order_status_page");
const ReturnPolicyPage = require("./faq_pages/return_policy_page");
const ShoppingFAQPage = require("./faq_pages/shopping_fag_page");
const WarrantyPolicyPage = require("./faq_pages/warranty_policy_page");
const SearchPage = require("./search_page/search_page");

class PageFactory {
    static getPage(pageName, serchValue) {
        switch (pageName) {
            case "Home":
                return new HomePage();
                
            case "Order Status":
                return new OrderStatusPage();
            case "Return Policy":
                return new ReturnPolicyPage();
            case "Shopping FAQ":
                return new ShoppingFAQPage();
            case "Warranty Policy":
                return new WarrantyPolicyPage();
                
            case "Search":
                return new SearchPage(serchValue);
            default:
                return new BasePage();
        };
    };
};

module.exports = PageFactory;