//npm install --save-dev cypress-file-upload
import "cypress-file-upload";
//file should be in fixtures folder

describe("File Upload Handling", () => {
  it("Single File Upload", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile("Frontend_Task_STS.pdf");
    cy.get("#file-submit").click();
    cy.wait(2000);
    cy.get("#uploaded-files").contains("Frontend_Task_STS.pdf");
  });
  it("File Upload -Rename", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile({
      filePath: "Frontend_Task_STS.pdf",
      fileName: "Adem.pdf",
    });
    cy.get("#file-submit").click();
    cy.wait(2000);
    cy.get("#uploaded-files").contains("Adem.pdf");
  });
  it("File upload Drag and Drop", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#drag-drop-upload").attachFile("Frontend_Task_STS.pdf", {
      subjectType: "drag-n-drop",
    });
    cy.wait(2000);
    cy.get("#drag-drop-upload > div > div.dz-details > div > span").should(
      "have.text",
      "Frontend_Task_STS.pdf"
    );
  });
  it("Multiple files Upload", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    cy.get("#filesToUpload").attachFile([
      "Frontend_Task_STS.pdf",
      "LearnJava.pdf",
    ]);
    cy.wait(1000);
    cy.get(":nth-child(6) > strong").should("have.text", "Files You Selected:");
  });
  it.only("File Upload Shadow Dom", () => {
    cy.visit(
      "https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm"
    );
    cy.get(".smart-browse-button", { includeShadowDom: true }).attachFile(
      "Frontend_Task_STS.pdf"
    );
    cy.wait(5000);
    cy.get(".smart-item-name", { includeShadowDom: true }).contains(
      "LearnJava.pdf"
    );
  });
});
