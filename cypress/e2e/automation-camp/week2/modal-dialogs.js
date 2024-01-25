/// <reference types = "Cypress" />

describe('DEMOQA - Modal Dialogs', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    beforeEach(() => {
        cy.visit('https://demoqa.com/modal-dialogs');
    });
    
    it('Click Small modal', () => {
        cy.get('#showSmallModal').click()
        cy.get('.modal-sm').should('be.visible')
        cy.get('#example-modal-sizes-title-sm').should('have.text','Small Modal')
        cy.get('.modal-body').should('have.text','This is a small modal. It has very less content')
        cy.get('.modal-footer').contains('Close').click()
        
        cy.get('#showLargeModal').click()
        cy.get('.modal-lg').should('be.visible')
        cy.get('#example-modal-sizes-title-lg').should('have.text','Large Modal')
        cy.get('.modal-body').should('contain.text',"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s")
        cy.get('.modal-footer').contains('Close').click()
    });
});