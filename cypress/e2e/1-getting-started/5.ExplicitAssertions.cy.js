describe("Explicit Asserttions Suite", () => {
  it("Expect---> BDD aproach and Assert--->  TDD approach", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('input[name="username"]')
      .should("be.visible")
      .should("be.empty")
      .type("Admin")
      .should("have.value", "Admin");
    cy.get('input[name="password"]')
      .should("be.visible")
      .should("be.empty")
      .type("admin123")
      .should("have.value", "admin123");
    cy.get("button[type=submit]")
      .should("be.visible")
      .and("be.enabled")
      .and("have.text", " Login ")
      .click();
    let expectedName = "Paul Collings";
    cy.get(".oxd-userdropdown-name").then((x) => {
      //X store .oxd-userdropdown-name ===> this element
      let acctualName = x.text();

      //BDD
      expect(acctualName).to.equal(expectedName);
      expect(acctualName).to.not.equal("adem");

      //TDD
      assert.equal(acctualName, expectedName);
      assert.notEqual(acctualName, "Adem");
    });
  });
});
