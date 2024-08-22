import { LoginPage } from "../pages/login-page"

const loginPage = new LoginPage()

describe('UI - Login Test Suite',
    {

    },
    function () {
        const credentials = { 
            'username': Cypress.env('credentials').userName,
            'password' : Cypress.env('credentials').userPassword
        }

        it('UI - Log in to Trello',
        {
            
        },
        () => {
            cy.uiLogin(credentials)
        })
    }
)
