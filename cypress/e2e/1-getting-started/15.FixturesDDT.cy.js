/// //<reference types="cypress"/> commands file icine ekleyince buna gerek yok
describe("", () => {
  //Direct Access
  // it("Direct Acces", () => {
  //   cy.visit(
  //     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  //   );

  //   cy.fixture("file").then((data) => {
  //     cy.get("input[name=username]").type(data.username);
  //     cy.get("input[name=password]").type(data.password);
  //     cy.get("button[type=submit]").click();
  //     cy.get(
  //       ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"
  //     ).should("have.text", data.expected);
  //   });
  // });

  //Access through hook- for multiple it blocks-take the data from fixtures files
  let userdata;
  before(() => {
    cy.fixture("file").then((data) => {
      userdata = data;
    });
  });
  it("Multiple use", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("input[name=username]").type(userdata.username);
    cy.get("input[name=password]").type(userdata.password);
    cy.get("button[type=submit]").click();
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should(
      "have.text",
      userdata.expected
    );
  });
});
