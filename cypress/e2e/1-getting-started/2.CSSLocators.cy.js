describe("CSS Locators", () => {
  it("css locators", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.get("#search_query_top").clear().type("T-shirts");
    cy.get("[name=submit]").click();
    cy.get(".lighter").contains("T-Shirts"); //Asssertion
  });
});
