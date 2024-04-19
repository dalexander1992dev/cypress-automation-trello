import { LoginLocators } from "../constants/login-ui-contants"
import { ButtonComponent } from "../../../components/button-component" 
import { InputComponent } from "../../../components/input-component"

export class LoginPage {

    constructor(){
        this.LoginButton = new ButtonComponent(LoginLocators.LOGIN_BUTTON)
        this.GoogleButton = new ButtonComponent(LoginLocators.GOOGLE_BUTTON)
        this.EmailInput = new InputComponent(LoginLocators.EMAIL_INPUT)
    }

    navigateToLoginPage(){
        cy.visit('https://trello.com/')
        this.LoginButton.click()
    }

    navigateToGoogleSignInPage(){
        
        cy.origin('https://id.atlassian.com/', () => {
            
            this.GoogleButton.click()
            //this.EmailInput.type('dalexander1992.dev@gmail.com')
        })
            
    }
}