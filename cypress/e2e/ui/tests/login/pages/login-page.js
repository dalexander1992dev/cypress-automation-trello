import { LoginLocators } from "../constants/login-ui-contants"
import { ButtonComponent } from "../../../components/button-component" 
import { InputComponent } from "../../../components/input-component"

export class LoginPage {

    constructor(){
        this.LoginButton = new ButtonComponent(LoginLocators.LOGIN_BUTTON)
    }

    login(credentials){
        cy.visit('https://trello.com/')
        this.LoginButton.click()
        //CONST Y ARGUMENTOS

        cy.origin('https://id.atlassian.com',() => {
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
        cy.get('[data-testid="username"]').type('dalexander1992.dev@gmail.com')
        cy.contains('Continue').click()
        cy.get('[data-testid="password-container"] input[data-testid="password"]').type('wsx691219D92')
        cy.get('#login-submit').click({force: true})
        })
    }
}