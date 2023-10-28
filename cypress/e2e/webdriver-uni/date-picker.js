/// <reference types="Cypress" />
describe("Test Datepicker via webdriveruni", function () {
  it("Select date from date picker ", function () {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
    cy.get("#datepicker").click();
    let date = new Date();
    date.setDate(date.getDate() + 360); //get current day
    cy.log(date.getDate());

    let futureYear = date.getFullYear();
    let futureMonth = date.toLocaleString("default", { month: "long" });
    let futureDay = date.getDate();
    cy.log(futureYear);
    cy.log(futureMonth);
    cy.log(futureDay);

    function selectMonthAndYear() {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .first()
        .then((currentDate) => {
          if (!currentDate.text().includes(futureYear)) {
            cy.get(".next").first().click();
            selectMonthAndYear();
          }
        })
        .then(() => {
          cy.get(".datepicker-dropdown")
            .find(".datepicker-switch")
            .first()
            .then((currentDate) => {
              if (!currentDate.text().includes(futureMonth)) {
                cy.get(".next").first().click();
                selectMonthAndYear();
              }
            });
        });
    }

    function selectFutureDay() {
      cy.get('[class="day"]').contains(futureDay).click();
    }
    selectMonthAndYear();
    selectFutureDay();
  });
});
