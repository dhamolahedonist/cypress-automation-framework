/// <reference types="Cypress" />
/// <reference types="Cypress-xpath" />
describe("Test Contact us form via webriverUni", function () {
  before(function () {
    cy.fixture("userDetails").as("user");
  });
  it("should be able to submit a successful submission via Automation test store", function () {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href$='contact']")
      .click()
      .then(function (linkText) {
        cy.log("clickon link using text: " + linkText.text());
      });

    cy.get("@user").then((user) => {
      cy.get("#ContactUsFrm_first_name").type(user.first_name);
      cy.get("#ContactUsFrm_email").type(user.email);
    });
    cy.get("#ContactUsFrm_enquiry").type("How can I get the material");
    cy.contains("Submit").click();
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
  });
});
