/// //<reference types="cypress"/> commands file icine ekleyince buna gerek yok
describe("Xpath suite", () => {
  it.skip("Find number of products", () => {
    cy.visit("https://automationexercise.com/");
    cy.xpath("//div[@class=features_items]").should("have.length", 17);
  });

  it.skip("Chained xpath ", () => {
    cy.visit("https://automationexercise.com/");
    cy.xpath("//div[@class=features_items]")
      .xpath("//h2[normalize-space()='Features Items']")
      .contains("Features Items");
  });
  it.skip("Chained xpath ", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");
    cy.get("[class=title]").contains("Automation Testing Practice");
  });
  it("Chained xpath ", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");
    cy.xpath("//div[@class='titlewrapper']")
      .xpath("./h1")
      .contains("Automation Testing Practice");
  });
});
