import AutoStore_Homepage_PO from "../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO";
import AutoStore_HairCare_PO from "../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO";
/// <reference types="Cypress" />
/// <reference types="Cypress-xpath" />
describe("Add multiple items to basket", function () {
  const autoStore_Homepage_PO = new AutoStore_Homepage_PO();
  const autoStore_HairCare_PO = new AutoStore_HairCare_PO();
  before(() => {
    cy.fixture("products").then((data) => {
      globalThis.data = data;
    });
  });
  beforeEach(() => {
    autoStore_Homepage_PO.accessHomepage();
    autoStore_Homepage_PO.clickOn_HairCare_Link();
    // cy.visit("https://automationteststore.com/");
    // cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });
  // it("Add specific item to basket", function () {
  //   globalThis.data.productName.forEach((element) => {
  //     cy.addProductsToBasket(element);
  //   });
  //   cy.get(".dropdown-toggle > .fa").click();
  // });
  it("Add specific item to basket", function () {
    autoStore_HairCare_PO.addHairCareProductsToBasket();
  });
});
