/// <reference types="Cypress" />
describe("Handling data via webdriveruni", function () {
  beforeEach(() => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });
  it("Calculate and assert the total age of all users", function () {
    let userDetails = [];
    let numb = 0;
    cy.get("#thumbnail-1 td")
      .each(($el, index, $list) => {
        userDetails[index] = $el.text();
      })
      .then(() => {
        for (let i = 1; i < userDetails.length; i++) {
          if (Number(userDetails[i])) {
            numb += Number(userDetails[i]);
          }
          //   cy.log(userDetails[i]);
        }
        cy.log("Found a total age: " + numb);
        expect(numb).to.eq(322);
      });
  });

  it("Calculate and assert the age of a given user based on last name", function () {
    cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list) => {
      let lastName = $el.text();
      if (lastName.includes("Woods")) {
        cy.get("#thumbnail-1 tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (age) {
            const userAge = age.text();
            expect(userAge).to.equal("80");
          });
      }
    });
  });
});
