/// //<reference types="cypress"/> commands file icine ekleyince buna gerek yok
describe(" Capture Screenshots And Videos", () => {
  it("Failed Test for screen shot and videos", () => {
    cy.visit("https://demo.opencart.com/");
    cy.screenshot("homepage");
    //to capture a screenshot for specific element
    cy.wait(5000);
    cy.get("body > header > div > div > div.col-md-3.col-lg-4").screenshot(
      "logo"
    );
  });
  it("Ovewriting existing command", () => {});
  it("Login command", () => {});
});
