/// <reference types="Cypress" />
describe("Traversing DOM elements in Cypress", function () {
  beforeEach(() => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });
  it("children() to get the children of DOM elements", function () {
    cy.get(".breadcrumb traversal-breadcrumb")
      .children(".active")
      .should("contain", "Contact Us");
  });

  it("closest() to validate the closest ancestor DOM elements", function () {
    cy.get(".traversal-badge").closest("ul").should("have.class", "list-group");
  });

  it("eq() to retrieve a specific element based on index", function () {
    cy.get(".traversal-drinks-list > *").eq(2).should("contain", "Milk");
  });
  ``;

  it("filter() to retrieve DOM element that match a specific selector", function () {
    cy.get(".btn-group-toggle > *")
      .filter(".active")
      .should("contain", "Button-1");
  });

  it("find() to retrieve DOM element of a given selector", function () {
    cy.get(".traversal-pagination")
      .find("li")
      .find("a")
      .should("have.length", 7);
  });
  it("first() to retrieve the first DOM element within elements", function () {
    cy.get(".traversal-table > tbody > tr > td")
      .first()
      .should("contain", "Andy");
  });

  it("last() to retrieve the first DOM element within elements", function () {
    cy.get(".traversal-table > tbody > tr > td")
      .last()
      .should("contain", "Scott");
  });

  it("nextAll() to get all of the next siblings DOM element within elements", function () {
    cy.get("traversal-drinks-list")
      .contains("Tea")
      .nextAll()
      .should("have.length", "3");
  });

  it("nextUntil() to get all of the next siblings DOM element within elements until another element", function () {
    cy.get("#coffee").nextUntil("#milk");
  });

  it("not() to remove DOM element(s) from the set of elements", function () {
    cy.get(".traversal-button-states > button")
      .not(".disabled")
      .should("have.class", "disabled");
  });

  it("parent() to get parent DOM element of elements", function () {
    cy.get(".traversal-mark")
      .parent()
      .should("contain", "Lorem ipsum dolor sit amet");
  });

  it("parents() to get parents DOM element of elements", function () {
    cy.get(".traversal-cite").parents().should("match", "blockquote");
  });

  it("prev() to get previous sibling DOM element within elements", function () {
    cy.get("#sugar").prev().contains("Espresso");
  });

  it("prevAll() to get all previous sibling DOM elements within elements", function () {
    cy.get(".sales").prevAll().should("have.length", 2);
  });

  it("prevUntil() to get all previous sibling DOM elements within elements until other elements", function () {
    cy.get("#veggie").prevUntil("#fruits").should("have.length", 5);
  });

  it("siblings() to get all sibling DOM elements of elements", function () {
    cy.get(".traversal-button-other-states .active")
      .siblings()
      .should("have.length", 3);
  });
});
