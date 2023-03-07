/// //<reference types="cypress"/> commands file icine ekleyince buna gerek yok
describe("Alerts Handling", () => {
  //1. Single Alert Window: It will have some text and an OK button
  it("Single Alert Window: ", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("#content > div > ul > li:nth-child(1) > button").click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains("I am a JS Alert");
    });
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });

  //1. Confirmation Alert Window: It will have some text,  an OK and Cancel buttons button
  it("Confirmation Alert with OK button", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get(
      "div.row:nth-child(2) div.large-12.columns:nth-child(2) div.example:nth-child(2) ul:nth-child(3) li:nth-child(2) > button:nth-child(1)"
    ).click();
    //Cypress automatically close window by OK button
    cy.on("window:confirm", (t) => {
      expect(t).to.contains("I am a JS Confirm");
    });
    cy.get("#result").should("have.text", "You clicked: OK");
  });

  //1. Confirmation Alert Window: It will have some text,  an OK and Cancel buttons button
  it("Confirmation Alert with Cancel button", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get(
      "div.row:nth-child(2) div.large-12.columns:nth-child(2) div.example:nth-child(2) ul:nth-child(3) li:nth-child(2) > button:nth-child(1)"
    ).click();
    //Cypress automatically close window by OK button but we want to close Cancel button
    // cy.on("window:confirm", (t) => {
    //   expect(t).to.contains("I am a JS Confirm");
    // });
    cy.on("window:confirm", () => false); //For cancel button

    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  //1.JS Prompt Alert : It will have some text with a input box for user input along   an OK and Cancel buttons
  it("JS Prompt  Alert with input Text button", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    //to control input box
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("welcome"); //and we  pass a value on input box in alert window
    });

    cy.get("#content > div > ul > li:nth-child(3) > button").click();
    //Cypress automatically close window by OK button by default but we want to close Cancel button
    // cy.on("window:confirm", (t) => {
    //   expect(t).to.contains("I am a JS Confirm");
    // });
    cy.on("window:prompt", () => false); //For cancel button

    cy.get("#result").should("have.text", "You entered: welcome");
  });

  //4 .Authenticated window alert like enter username and password
  it.only("Authenticated window alert", () => {
    //first approach
    /* cy.visit("https://the-internet.herokuapp.com/basic_auth", {
      auth: { username: "admin", password: "admin" },
    });

    //verify the message
    cy.get("#content > div > p").should("have.contain", "Congratulations!");*/

    //second approach pass inside the url
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    cy.get("#content > div > p").should("have.contain", "Congratulations!");
  });
});
