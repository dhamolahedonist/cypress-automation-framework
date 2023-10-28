import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";
/// <reference types="Cypress" />
describe("Test Contact us form via webriverUni", function () {
  before(function () {
    cy.fixture("example").then(function (data) {
      // this.data = data
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    const homepage_PO = new HomePage_PO();
    homepage_PO.visitHomepage();
    homepage_PO.clickOn_ContactUs_Button();
  });

  it("should be able to submit a successful submission via contact us form", function () {
    // cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("https://webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.get('[name="first_name"]').type(data.first_name);
    cy.get('[name="last_name"]').type(data.last_name);
    cy.get('[name="email"]').type(data.email);
    cy.get("textarea.feedback-input").type("I love coding");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  // or
  it("should be able to submit a successful submission via contact us form", function () {
    const contact_Us_PO = new Contact_Us_PO();
    contact_Us_PO.contactForm_Submission(
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      "How can I learn cypress",
      "h1",
      "Thank You for your Message!"
    );
  });

  it("should be able to submit a successful submission via contact us form", function () {
    // cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("https://webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.get('[name="first_name"]').type(data.first_name);
    // cy.get('[name="last_name"]').type(data.last_name);
    // cy.get('[name="email"]').type(data.email);
    // cy.get("textarea.feedback-input").type("How can I learn cypress");
    // cy.get('[type="submit"]').click();
    // cy.get("h1").should("have.text", "Thank You for your Message!");
    cy.webdriverUni_ContactForm_Submission(
      data.first_name,
      data.last_name,
      data.email,
      "How can I learn cypress",
      "h1",
      "Thank You for your Message!"
    );
  });

  // or

  // negative test cases
  it("should not be able to submit a successful submission via contact us form as all fields are required", function () {
    // cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    // cy.origin can access 2 different url
    cy.visit("https://webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.get('[name="first_name"]').type("samuel");
    cy.get('[name="last_name"]').type("oduba");
    cy.get("textarea.feedback-input").type("I love coding");
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error: all fields are required");
  });
});
