/// <reference types="Cypress" />
describe("Handling iframes and modal", function () {
  it("Handle webdriver Uni iframe and modal", function () {
    // cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("https://webdriveruniversity.com");
    cy.get("#iframe").invoke("removeAttr", "target").click({ force: true });

    cy.wait(4000);

    cy.get("#frame").then(($iframe) => {
      const body = $iframe.contents().find("body");
      cy.wrap(body).as("iframe");
    });

    cy.get("@iframe").find("#button-find-out-more").click();
    cy.get("@iframe").find("#myModal").as("modal");

    cy.get("@modal").should(($expectedText) => {
      const text = $expectedText.text();
      expect(text).to.include(
        "Welcome to webdriveruniversity.com we sell a wide range of electrical goods"
      );
    });
    cy.get("@modal").contains("Close").click();
  });
});
