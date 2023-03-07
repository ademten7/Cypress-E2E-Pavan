describe("Radio Button And Check Box Suite", () => {
  it("Radio Button Test", () => {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation");
    cy.get("#female")
      .should("be.visible")
      .and("be.enabled")
      .and("not.be.checked")
      .check()
      .should("be.checked");

    cy.get("#male")
      .should("be.visible")
      .and("be.enabled")
      .and("not.be.checked")
      .check()
      .should("be.checked");
    cy.get("#female").should("not.be.checked");

    cy.get("#other")
      .should("be.visible")
      .and("be.disabled")
      .and("not.be.enabled");
  });

  it("Checkbox Test", () => {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation");
    cy.get("#monday")
      .should("be.visible")
      .and("not.be.checked")
      .and("be.enabled")
      .check()
      .should("be.checked")
      .uncheck()
      .should("not.be.checked");

    //How Select all checkboxes in one shot
    cy.get("input.form-check-input[type=checkbox]") //find commen selector for all checkboxes than check
      .should("be.visible")
      .and("not.be.checked")
      .and("be.enabled")
      .check()
      .should("be.checked")
      .uncheck()
      .should("not.be.checked");

    //How to check multiple check boxes

    cy.get("input.form-check-input[type=checkbox]")
      .first()
      .check()
      .should("be.checked");
    cy.get("input.form-check-input[type=checkbox]")
      .last()
      .check()
      .should("be.checked");
    cy.get("input.form-check-input[type=checkbox]").uncheck();
    //to check multiple check box in single statement
    cy.get("input.form-check-input[type=checkbox]") //commen locator for  all checbox
      .check(["Wednesday", "Saturday", "Sunday"]); // we write values of the checkbox in an array. iki tane de yazilabilir. bir anda 2 tane birden check eder
  });
});
