/// //<reference types="cypress"/> commands file icine ekleyince buna gerek yok
describe("Handling Tables", () => {
  beforeEach("Login", () => {
    cy.visit("https://demo.opencart.com/admin/index.php");
    cy.get("#input-username")
      .should("be.visible")
      .and("be.empty")
      .clear()
      .type("demo");
    cy.get("#input-password")
      .should("be.visible")
      .and("be.empty")
      .clear()
      .type("demo");
    cy.get("button[type=submit]").should("be.enabled").click();
    cy.get("button[class=btn-close]").click(); //to close the dialog

    cy.get("#menu-customer>a").click(); //to open customer table from sidebar menu
    cy.get("#collapse-5>li:nth-child(1)").click();
  });
  it("Check Number of Rows & Columns", () => {
    cy.get("#form-customer > div.table-responsive > table > tbody > tr").should(
      //to check number of rows
      "have.length",
      "10"
    );
    cy.get(
      "#form-customer > div.table-responsive > table > thead > tr > td"
    ).should("have.length", "7"); //to chec number of columns
  });

  it("Check cell data from spesific row & columns", () => {
    //to check the email of 5.row
    cy.get(
      "#form-customer > div.table-responsive > table > tbody > tr:nth-child(5)>td:nth-child(3)"
    ).should("have.text", "princytrainings4@gmail.com");
  });
  it("Read all rows & columns data in the first page", () => {
    cy.get("#form-customer > div.table-responsive > table > tbody > tr").each(
      ($row, index, $rows) => {
        cy.wrap($row).within(() => {
          //wrap the current row and it has multiple td
          cy.get("td").each(($col, index, $cols) => {
            cy.log($col.text());
          });
        });
      }
    );
  });
  it.only("Pagination", () => {
    //first find total number of pages
    let totalPages;
    cy.get("#form-customer > div.row > div.col-sm-6.text-end").then(
      (element) => {
        let myText = element.text();
        totalPages = myText.substring(
          myText.indexOf("(") + 1,
          myText.indexOf("Pages") - 1
        );
        cy.log("totalPages :" + totalPages);
      }
    );
    totalPages = 5;
    //to  read data of every page
    for (let p = 1; p <= totalPages; p++) {
      //it can be also  only one  page
      if (totalPages > 1) {
        cy.log("Current page====> " + p);
        //to click every page one by one
        cy.get(
          "#form-customer > div.row > div.col-sm-6.text-start > ul > li:nth-child(" +
            p +
            ")"
        ).click();
        //to read only email adresses
        cy.get(
          "#form-customer > div.table-responsive > table > tbody > tr"
        ).each(($row, index, $rows) => {
          cy.wrap($row).within(() => {
            cy.get("td:nth-child(3)") //emailler ücüncü columnda
              .then((el) => {
                cy.log(el.text());
              });
          });
        });
      }
    }
  });
});
