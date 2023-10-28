/// <reference types="Cypress" />
describe("Test File upload via webdriveruni", function () {
  it("Upload a file....", function () {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#myFIle").selectFile("cypress/fixtures/package.png");
    cy.get("#submit-button").click();
  });

  it("Upload no file....", function () {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
});
