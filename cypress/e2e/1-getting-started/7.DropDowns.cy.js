/// //<reference types="cypress"/> commands file icine ekleyince buna gerek yok
describe("DropDowns Test Suite", () => {
  it.skip("Dropdowns Test Case", () => {
    cy.visit("https://www.zoho.com/commerce/free-demo.html");
    cy.get("#zcf_address_country")
      .select("Turkey")
      .should("have.value", "Turkey");
  });

  it.skip("Dropdowns without select ", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    cy.get("#select2-billing_country-container").click();
    cy.get("input[class=select2-search__field]")
      .clear()
      .should("be.empty")
      .type("Greece")
      .type("{enter}");
    //to check the value is there or not
    cy.get("#select2-billing_country-container").should("have.text", "Greece");
  });
  //For static dropdowns options
  it.skip("Auto suggestions dropdowns select ", () => {
    cy.visit("https://www.wikipedia.org/");
    cy.get("#searchInput")
      .clear()
      .should("be.empty")
      .and("be.visible")
      .type("Turkey");
    cy.get("[class=suggestion-title]").contains("Turkey").click();
    cy.title().should("contain", "Turkey");
  });
  //For dynamic dropdowns options we need to create a jquery finction
  it("Dynamic dropdowns ", () => {
    cy.visit("https://www.google.com/");
    cy.get(".gLFyf")
      .should("be.empty")
      .and("be.visible")
      .type("cypress automation tool");
    cy.get("div.wM6W7d>span").should("have.length", 12);
    cy.get("div.wM6W7d>span").each(($el, index, $list) => {
      if ($el.text() === "cypress automation tool") {
        cy.wrap($el);
      }
    });
    //verify same text is avaialable in input box
    cy.get("input[name=q]").should("have.value", "cypress automation tool");
  });
});
