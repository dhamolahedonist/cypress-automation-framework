/// <reference types="Cypress" />
/// <reference types="Cypress-xpath" />
describe("Iterate over element", function () {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });
  it("Log information of all hair care product", function () {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index: " + index + " : " + $el.text());
    });
  });
  it("Add specific product to basket", function () {
    // cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    //   if ($el.text().includes("Curls to straight Shampoo")) {
    //     cy.wrap($el).click();
    //   }
    // });
    cy.selectProduct("Curls to straight Shampoo");
  });
  it("Add another specific product to basket", function () {
    cy.selectProduct("Seaweed Conditioner");
  });
});
