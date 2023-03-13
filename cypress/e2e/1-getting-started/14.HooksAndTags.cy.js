//hooks ==> before, after beforeEach,afterEach

//tags ==> skip,only

describe("", () => {
  before(() => {
    cy.log("********* This is SETUP before  **************");
  });
  after(() => {
    cy.log("********* This is TEAR DOWN after  **************");
  });
  beforeEach(() => {
    cy.log("********* this is LOGIN beforeEach *************");
  });

  afterEach(() => {
    cy.log("********* this is LOGOUT afterEach *************");
  });
  it("searching", () => {
    cy.log("***************  this is searching   ************");
  });
  it("advanced searching", () => {
    cy.log("***************  this is advanced searching   ************");
  });
  it("listing products", () => {
    cy.log(
      "***************  this listing products is searching   ************"
    );
  });
});
