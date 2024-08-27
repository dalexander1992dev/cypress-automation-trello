import { LoginLocators } from "../constants/login-ui-constants"
import { ButtonComponent } from "../../../components/button-component" 

export class LoginPage {

    constructor(){
        this.LoginButton = new ButtonComponent(LoginLocators.LOGIN_BUTTON)
    }

    login(credentials){
        cy.visit('https://trello.com/')
        this.LoginButton.click()
        
        console.log('User credentials: '+ JSON.stringify(credentials))

        cy.origin('https://id.atlassian.com',{ args:{ credentials } }, ({ credentials }) => {
            cy.get('[data-testid="username"]').type(credentials.username)
            cy.contains('Continue').click()
            cy.get('[data-testid="password-container"] input[data-testid="password"]').type(credentials.password)
            cy.get('#login-submit').click({force: true})
            })
    }
    
    navigateToLoginPage(){
        cy.visit('https://trello.com/')
        this.LoginButton.click()
    }

    navigateToGoogleSignInPage(){
        cy.origin('https://id.atlassian.com',() => {
        cy.get('[data-testid="username"]').type('cypresstrello@gmail.com')
        cy.contains('Continue').click()
        cy.get('[data-testid="password-container"] input[data-testid="password"]').type('123Queso!')
        cy.get('#login-submit').click({force: true})
        })
    }
}