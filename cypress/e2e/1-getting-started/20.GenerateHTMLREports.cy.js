//1- npm i cypress-mochawesome-reporter
/*
2- Change cypress reporter & setup hooks

Edit config file (cypress.config.js by default)

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
*/

/*
-to create a HTML report
npx cypress run 
-to run specific test
npx cypress run --spec <relative part of file>
it generates an report folder. inside it there is a index.html==> copy absolute part and  past it on browser
this is the hedless test
*/

/*
npx cypress run --spec <relative part of file> --browser chrome  
npx cypress run --spec <relative part of file> --browser chrome   ===>  this is headed

*/
let i = 5
