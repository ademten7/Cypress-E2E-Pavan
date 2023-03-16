/// //<reference types="cypress"/> commands file icine ekleyince buna gerek yok
describe("Navigation between pages", () => {
  it("go('back) ===> Command", () => {
    cy.visit("https://demo.opencart.com/");
    cy.title().should("eq", "Your Store");
    cy.get("#narbar-menu > ul > li:nth-child(7) > a").click();
    cy.get("#content > h2").should("have.text", "Cameras");
    cy.go("back");
    cy.title().should("eq", "Your Store");
    cy.go("forward");
    cy.get("#content > h2").should("have.text", "Cameras");
    cy.go(-1);
    cy.title().should("eq", "Your Store");
    cy.go(1);
    cy.get("#content > h2").should("have.text", "Cameras");
  });
  it("Ovewriting existing command", () => {});
  it("Login command", () => {});
});
