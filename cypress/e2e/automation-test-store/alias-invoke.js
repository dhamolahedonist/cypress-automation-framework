/// <reference types="Cypress" />
/// <reference types="Cypress-xpath" />
// as === alias
describe("Alias and Invoke", function () {
  it("Validate a specific hair care product", function () {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumnail");
    cy.get("@productThumnail").its("length").should("be.gt", 5);
    cy.get("@productThumnail").should("include", "Seaweed Conditioner");
  });
  it("Validate products thumbnail", function () {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    cy.get("@productThumbnail").should("have.length", 16);

    cy.get("@productThumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });

  it.only("Calculate total of normal and sale product", function () {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    // cy.get("@productThumbnail")
    //   .find(".oneprice")
    //   .each(($el, index, $list) => {
    //     cy.log($el.text());
    //   });
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    cy.get(".thumbnail").find(".pricenew").invoke("text").as("saleItemPrice");
    let itemsTotal = 0;
    cy.get("@itemPrice").then(($linkText) => {
      let itemsPriceTotal = 0;
      let itemPrice = $linkText.split("$");
      let i;
      for (let i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
        itemsPriceTotal += Number(itemPrice[i]);
      }
      itemsTotal += itemsPriceTotal;
      cy.log("Non sale price total: " + itemsPriceTotal);
    });

    cy.get("@saleItemPrice")
      .then(($linkText) => {
        let saleItemsPriceTotal = 0;
        let saleItemPrice = $linkText.split("$");
        let i;
        for (let i = 0; i < saleItemPrice.length; i++) {
          cy.log(saleItemPrice[i]);
          saleItemsPriceTotal += Number(saleItemPrice[i]);
        }
        itemsTotal += saleItemsPriceTotal;
        cy.log("Sale price total: " + saleItemsPriceTotal);
      })
      .then(() => {
        cy.log("The total price of all products: " + itemsTotal);
        expect(itemsTotal).to.equal(660.5);
      });
  });
});
