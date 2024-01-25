/// <reference types = "Cypress" />

describe('DEMOQA - Tabs', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    beforeEach(() => {
        cy.visit('https://demoqa.com/tabs');
    });
    
    it('Click all tabs', () => {
        cy.get('#demo-tab-what').click()
        cy.get('#demo-tabpane-what').should('be.visible')
        cy.get('#demo-tabpane-origin').should('not.be.visible')
        cy.get('#demo-tabpane-use').should('not.be.visible')
        cy.get('#demo-tabpane-more').should('not.be.visible')

        cy.get('#demo-tab-origin').click()
        cy.get('#demo-tabpane-what').should('not.be.visible')
        cy.get('#demo-tabpane-origin').should('be.visible')
        cy.get('#demo-tabpane-use').should('not.be.visible')
        cy.get('#demo-tabpane-more').should('not.be.visible')

        cy.get('#demo-tab-use').click()
        cy.get('#demo-tabpane-what').should('not.be.visible')
        cy.get('#demo-tabpane-origin').should('not.be.visible')
        cy.get('#demo-tabpane-use').should('be.visible')
        cy.get('#demo-tabpane-more').should('not.be.visible')

        cy.get('#demo-tab-more').click({force:true})
        cy.get('#demo-tabpane-what').should('not.be.visible')
        cy.get('#demo-tabpane-origin').should('not.be.visible')
        cy.get('#demo-tabpane-use').should('be.visible')
        cy.get('#demo-tabpane-more').should('not.be.visible')
    });
});