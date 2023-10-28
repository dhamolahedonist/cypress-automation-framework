/// <reference types="Cypress" />
describe("Interact with dropdown list via webriverUni", function () {
  it("Select specific values via select dropdown list", function () {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#dropdowm-menu-1").select("c#");
    cy.get("#dropdowm-menu-2")
      .select("testing")
      .should("have.value", "testing");
    // select dropdown item based on text
    cy.get("#dropdowm-menu-3").select("JQuery").contains("JQuery");
  });
});
