/// <reference types="cypress"/>
describe("First Suit", () => {
  it("Visit web Site", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.title().should("eq", "OrangeHRM");
  });
  it("", () => {});
});
