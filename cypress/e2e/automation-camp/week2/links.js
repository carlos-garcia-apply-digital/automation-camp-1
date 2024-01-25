/// <reference types = "Cypress" />

describe('DEMOQA - Links', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    beforeEach(() => {
        cy.visit('https://demoqa.com/links');
    });
    
    it('Click Home simple link', () => {
        cy.get('#simpleLink').invoke('removeAttr', 'target').click()
        cy.url().should('eq','https://demoqa.com/')
    });

    it('Click Home dynamic link', () => {
        cy.get('#dynamicLink').invoke('removeAttr', 'target').click()
        cy.url().should('eq','https://demoqa.com/')
    });

    const linksDetails = [
        {id: 'created', status: 201, text: 'Created'},
        {id: 'no-content', status: 204, text: 'No Content'},
        {id: 'moved', status: 301, text: 'Moved Permanently'},
        {id: 'bad-request', status: 400, text: 'Bad Request'},
        {id: 'unauthorized', status: 401, text: 'Unauthorized'},
        {id: 'forbidden', status: 403, text: 'Forbidden'},
        {id: 'invalid-url', status: 404, text: 'Not Found'},
    ]
    for(const link of linksDetails){
        it(`Click link ${link.id} and validate status ${link.status} and text ${link.text} display`, () => {
            cy.get(`#${link.id}`).click()
            cy.get('#linkResponse').should('be.visible').should('contain.text', link.status).should('contain.text', link.text)
        });
    }
});