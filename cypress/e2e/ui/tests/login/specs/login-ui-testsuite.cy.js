import { LoginPage } from "../pages/login-page"

const loginPage = new LoginPage()

describe('Login Test Suite',
    {},
    () => {

    it('Log in to Trello',
    {
        
    },
    () => {
       
        //Atlassian page navigation
        loginPage.navigateToLoginPage()

       loginPage.navigateToGoogleSignInPage()
        
        /* cy.origin('https://id.atlassian.com/', () => {
            //Trello page navigation
             cy.get('[data-testid="social-login-button-row"] button[id="google-auth-button"]').should("be.visible").click()
        })*/
        })
    }
)
