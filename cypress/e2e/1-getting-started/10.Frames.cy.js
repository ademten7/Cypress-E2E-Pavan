/// //<reference types="cypress"/> commands file icine ekleyince buna gerek yok
import "cypress-iframe"; //for third approach
describe("Handling Frames", () => {
  it("1.Approach", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    const iframe = cy
      .get("#mce_0_ifr")
      .its("0.contentDocument.body") //0==> we have only one document
      .should("be.visible")
      .then(cy.wrap);

    iframe.clear().type("welcome {ctrl+a}"); // {ctrl+a}==> to select the text inside the iframe(windows icin gecerli)
    cy.get('[aria-label="Bold"]').click(); // after select the text click the bold button
  });
  it("2.Approach:By using custom commands in support/commands.js", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    cy.getIframe("#mce_0_ifr") // we are using the custom command and locator of the iframe
      .clear()
      .type("welcome {ctrl+a}"); // {ctrl+a}==> to select the text inside the iframe (in windows operator)
    cy.get('[aria-label="Bold"]').click(); // after select the text click the bold button
  });

  //******************* */
  it("3.Approach: By using cypress iframe plugin", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    cy.frameLoaded("#mce_0_ifr"); //this will load the frame
    cy.iframe("#mce_0_ifr").clear().type("Welcome {ctrl+a}"); //now we can locate the iframe
    cy.get('[aria-label="Bold"]').click(); // after select the text click the bold button
  });
});
