/// <reference types="Cypress" />
describe("Validate webdriverUni humpage links", function () {
  it.only("Confirm links redirect to the correct pages", function () {
    // cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("https://webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.url().should("include", "contactus");

    cy.go("back");
    cy.reload();
    // cy.reload(true); //reload without using cache
    cy.go("forward");
    cy.url().should("include", "contactus");

    cy.go("back");
    cy.get("#login-portal")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
});
