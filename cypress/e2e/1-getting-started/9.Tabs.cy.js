/// //<reference types="cypress"/> commands file icine ekleyince buna gerek yok
describe("Handling Tabs", () => {
  it.skip("1. Approach ==> remove the target=_blank attribute", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get(".example > a").invoke("removeAttr", "target").click();
    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );
    cy.get("h3").should("have.text", "New Window");
    cy.wait(3000);
    cy.go("back");
    cy.url().should("include", "https://the-internet.herokuapp.com/windows");
  });

  it("2. Approach ==> target the href element ", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get(".example > a").then((el) => {
      let url = el.prop("href"); //prop gives us the attribute value
      cy.visit(url);
    });

    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );
    cy.get("h3").should("have.text", "New Window");
  });
});
