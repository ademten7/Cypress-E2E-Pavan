class Login {
    setUsername(username,password)        {
        cy.get('input[name=username]').type(username) 
    }

    setPassword(password){
        cy.get('input[name=password]').type(password)
    }
    clickSubmit(){
        cy.get('button[type=submit]').click();
    }
    verifyLogin(){
       cy.get('.oxd-text--h6').should('have.text','Dashboard');
    }
}

export default Login;