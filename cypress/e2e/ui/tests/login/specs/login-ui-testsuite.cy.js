import { LoginPage } from "../pages/login-page"

const loginPage = new LoginPage()

describe('Login Test Suite',
    {

    },
    function () {
        const credentials = { 
            'username': Cypress.env('credentials').userName,
            'password' : Cypress.env('credentials').userPassword
        }

        it('Log in to Trello',
        {
            
        },
        () => {
            cy.uiLogin(credentials)
        })
    }
)
