import { LoginPage } from "../pages/login-page"

const loginPage = new LoginPage()

describe('Login Test Suite',
    {

    },
    function () {

        const userName = Cypress.env('credentials').userName
        const userPassword = Cypress.env('credentials').userPassword

        beforeEach(() => {
           cy.uiLogin({ userName: userName, password: userPassword })
        })

        it('Log in to Trello',
        {
            
        },
        () => {
        
            /*
            loginPage.navigateToLoginPage()
            loginPage.navigateToGoogleSignInPage()*/

            })
        }
)
