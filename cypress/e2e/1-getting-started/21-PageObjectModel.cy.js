/// //<reference types="cypress"/> commands file icine ekleyince buna gerek yok

//PAGE OBJECT MODEL PATTERN
import Login from "../../PageObjects/LoginPage_SecondApproach";
describe("Login Page", () => {
    it("verify Login Page with POM", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //first create an object
        const login = new Login();
        login.setUsername('Admin')
        login.setPassword('admin123');
        login.clickSubmit();
        login.verifyLogin();
    });

//******************************************IMPORTANT *************************************************/
    //we can put our data user and password datas in fixture folder 
    it.only("verify Login Page with POM and from fixtures folder ", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //to get data from fixtures
        cy.fixture('pomData').then((data)=>{
            //put every method in fixture
            
            const login = new Login();
            login.setUsername(data.username)
            login.setPassword(data.password);
            login.clickSubmit();
            login.verifyLogin(data.expected);

 
        })

       
    });
  
  });