describe("Implicit Assertion", () => {
  it("should", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    /*
    cy.url().should("contain", "login");
    cy.url().should("include", "orangehrmlive.com");
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    */
    ////// ******************   OR *********************
    /*
    cy.url()
      .should("contain", "login")
      .should("include", "orangehrmlive.com")
      .should(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      );
      */
    ////// ******************   OR *********************
    cy.url()
      .should("contain", "login")
      .and("not.include", "adem")
      .and(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      );
    cy.title()
      .should("contain", "HRM")
      .and("eq", "OrangeHRM")
      .and("contain", "Ora");
    cy.get(".orangehrm-login-branding > img").should("be.visible").and("exist"); //logo exist and visible or not
    //How many links there are
    cy.xpath("//a").should("have.length", "5");
    cy.get("input[name=username]")
      .should("be.empty")
      .type("Admin")
      .should("have.value", "Admin"); //verify value
  });
});
