/// //<reference types="cypress"/> commands file icine ekleyince buna gerek yok
import "cypress-iframe"; //for third approach
require("@4tw/cypress-drag-drop");
describe("Mouse Events", () => {
  it("Mouse Hover", () => {
    cy.visit("https://demo.opencart.com/");
    cy.get(
      "#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(1) > a"
    ).should("not.be.visible");
    cy.get(".nav > :nth-child(1) > .dropdown-toggle")
      .trigger("mouseover")
      .click();
    cy.get(
      "#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(1) > a"
    ).should("be.visible");
  });
  it("Right Click", () => {
    //first approach
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    cy.get("body > div > section > div > div > div > p > span").trigger(
      "contextmenu"
    );
    cy.get(".context-menu-icon-copy > span").should("be.visible");

    //second approach
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    cy.get("body > div > section > div > div > div > p > span").rightclick();
    cy.get(".context-menu-icon-copy > span").should("be.visible");
  });
  it("Double Click", () => {
    cy.visit(url);
    cy.frameLoaded("#iframeResult");

    //approach 1 ==> trigger()
    cy.iframe("#iframeResult")
      .find("button[class=double-click]")
      .trigger("dblclick");
    cy.iframe("#iframeResult")
      .find("#field2")
      .should("have.value", "Hello World!");

    //approach 1 ==> dbclick()
    cy.iframe("#iframeResult").find("button[class=double-click]").dblclick();
    cy.iframe("#iframeResult")
      .find("#field2")
      .should("have.value", "Hello World!");
  });
  it("Drag and drop using plugin", () => {
    //we needd to install plugin ===> npm install --save-dev @4tw/cypress-drag-drop
    cy.visit(
      "http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html"
    );
    cy.get("#box6").drag("#box106", { force: true });
  });
  it.only("Scrolling page", () => {
    cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html");
    //for india scrolldown
    cy.get(
      ":nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img"
    ).scrollIntoView({ duration: 2000 });
    cy.get(
      ":nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img"
    ).should("be.visible");

    //for madagaskar scrollup
    cy.get(
      ":nth-child(2) > tbody > :nth-child(2) > :nth-child(1) > img"
    ).scrollIntoView({ duration: 2000 });
    cy.get(
      ":nth-child(2) > tbody > :nth-child(2) > :nth-child(1) > img"
    ).should("be.visible");
    //scroll to footer
    cy.get("#footer").scrollIntoView({ duration: 3000 });
    cy.get("#footer").should("be.visible");
  });
});
