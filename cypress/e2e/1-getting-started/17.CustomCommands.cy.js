describe("Custom Commands", () => {
  it("Handling Links", () => {
    cy.visit("https://demo.nopcommerce.com/");
    //without custom command
    //cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div > div.product-grid.home-page-product-grid > div.item-grid > div:nth-child(2) > div > div.details > h2 > a')
    // with custom command
    cy.customClickLink("Apple MacBook Pro 13-inch");
    cy.get(
      "#product-details-form > div:nth-child(2) > div.product-essential > div.overview > div.product-name"
    ).should("have.text", "Apple MacBook Pro 13-inch");
  });

  //after overwriting the existing contains method, it ignores the upper and lower case
  it("Ovewriting existing command", () => {
    cy.visit("https://demo.nopcommerce.com/");
    cy.customClickLink("APPLE MACBOOK PRO 13-inch"); //with uppercase
    cy.get(
      "#product-details-form > div:nth-child(2) > div.product-essential > div.overview > div.product-name"
    ).should("have.text", "Apple MacBook Pro 13-inch");
  });
  it.only("Login command", () => {
    cy.visit("https://demo.nopcommerce.com/");
    //we have already created click sutom command we can use it everywhere
    cy.customClickLink("Log in");
    cy.loginApp("testing@gmail.com", "test123");
    //verify
    cy.get(
      "body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div.page-body > div.customer-blocks > div.returning-wrapper.fieldset > form > div.message-error.validation-summary-errors"
    ).should("contain", "Login was unsuccessful");
  });
});
