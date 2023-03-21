class Login {

    //instead of hard coding we can assign the locaters to a variable
    txtUserName = 'input[name=username]';
    txtPassword = 'input[name=password]';
    txtClick = 'button[type=submit]';
    verify = '.oxd-text--h6';


    setUsername(username)        {
        cy.get(this.txtUserName).type(username) 
    }

    setPassword(password){
        cy.get(this.txtPassword).type(password)
    }
    clickSubmit(){
        cy.get(this.txtClick).click();
    }
    verifyLogin(){
       cy.get(this.verify).should('have.text','Dashboard');
    }
}

export default Login;