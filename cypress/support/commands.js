// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="Cypress"/>
/// <reference types="@cypress/xpath"/>

// to create a custom commands for i frame handling
Cypress.Commands.add("getIframe", (iframe) => {
  // getIframe==> our custom name , iframe==> element name which we located
  return cy
    .get("#mce_0_ifr")
    .its("0.contentDocument.body") //0==> we have only one document
    .should("be.visible")
    .then(cy.wrap);
});

//custom command for clicking on link using label
Cypress.Commands.add("customClickLink", (label) => {
  cy.get("a").contains(label).click(); //a elementlerinde label iceren hangisi varsa ona tikla
});

//Overwriting contains() existing  command
//we need to give same name because conatains is a existing command in cypress
//contains method takes five different parameters
// Cypress.Commands.overwrite(
//   "contains",
//   (originalFn, subject, filter, text, options = {}) => {
//     //determine if a filter argument was passed
//     if (typeof text === "object") {
//       options = text;
//       text = filter;
//       filter = undefined;
//     }
//     options.matchCase = false; //ignore upper and lower case character
//     return originalFn(subject, filter, text, options);
//   }
// );

//Custom Command for login
Cypress.Commands.add("loginApp", (email, password) => {
  cy.get("#Email").clear().type(email);
  cy.get("#Password").clear().type(password);
  cy.get("button[type=submit]").click();
});
