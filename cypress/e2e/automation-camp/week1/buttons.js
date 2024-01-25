/// <reference types = "Cypress" />

describe('DEMOQA - Buttons', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    
    it('Click all buttons', () => {
        cy.visit('https://demoqa.com/buttons');
        
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('be.visible').should('have.text', 'You have done a double click')

        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('be.visible').should('have.text', 'You have done a right click')

        cy.get('button.btn-primary').eq(2).click()
        cy.get('#dynamicClickMessage').should('be.visible').should('have.text', 'You have done a dynamic click')
    });
});