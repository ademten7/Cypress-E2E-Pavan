/// //<reference types="cypress"/> commands file icine ekleyince buna gerek yok
describe("DDT", () => {
  it("Data Driven Test", () => {
    cy.fixture("file2").then((data) => {
      cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      );
      data.forEach((userdata) => {
        cy.get("input[name=username]").type(userdata.username);
        cy.get("input[name=password]").type(userdata.password);
        cy.get("button[type=submit]").click();
        if (userdata.username === "Admin" && userdata.password === "admin123") {
          cy.get(
            ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"
          ).should("have.text", userdata.expected);
          cy.get(
            "#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-userarea > ul > li > span > p"
          ).click();
          //to test logout
          cy.get(
            "#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-userarea > ul > li > ul > li:nth-child(4) > a"
          ).click();
          cy.wait(5000);
          cy.get(
            "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > h5"
          ).should("have.text", "Login");
        } else {
          cy.get(
            "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > div > div.oxd-alert.oxd-alert--error > div.oxd-alert-content.oxd-alert-content--error > p"
          ).should("have.text", userdata.expected);
        }
      });
    });
  });
  it("", () => {});
});
