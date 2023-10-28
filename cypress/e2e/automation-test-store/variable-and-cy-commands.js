/// <reference types="Cypress" />
/// <reference types="Cypress-xpath" />
describe("Verifying variables, cypress commands and jquery commands", function () {
  it("Navigating to specific product pages", function () {
    cy.visit("https://automationteststore.com/");
    const makeupLink = cy
      .get("a[href*='product/category&path=']")
      .contains("Makeup");
    makeupLink.click();
    const skincareLink = cy
      .get("a[href*='product/category&path=']")
      .contains("Skincare");
    skincareLink.click();
  });
});
