
describe('Login Test Suite',
    {},
    () => {

    it('Log in to Trello',
    {
        
    },
    () => {
        cy.visit('https://trello.com/')
        
        //Atlassian page navigation
        cy.get('div.Buttonsstyles__ButtonGroup-sc-1jwidxo-3.jnMZCI > a:nth-child(1)').should("be.visible").click()
        
        cy.origin('https://id.atlassian.com/', () => {
            //Trello page navigation
             cy.get('[data-testid="social-login-button-row"] button[id="google-auth-button"]').should("be.visible").click()
         })
        })
    }
)
