/// <reference types="Cypress" />
/// <reference types="Cypress-xpath" />
describe("Inspect Automation Test Store items using chain of command", function () {
  it("Click on the first item using item header", function () {
    cy.visit("https://automationteststore.com/");
    cy.get(".prdocutname")
      .contains("Skinsheen Bronzer Stick")
      .click()
      .then(function (itemHeaderText) {
        cy.log("Selected the following item: " + itemHeaderText.text());
      });
  });
});
