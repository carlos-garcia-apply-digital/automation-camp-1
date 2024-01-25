/// <reference types = "Cypress" />

describe('DEMOQA - Text-box', () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    
    it('Submit form - Give input for all fields', () => {
        cy.visit('https://demoqa.com/text-box');
        const name = 'Carlos García'
        const email = 'testerino@mailerino.com'
        const currentAddress = 'Tikal 653. Mty, Nuevo Leon. MEX'
        const permanentAddress = 'Tikal 653. Mty, Nuevo Leon. MEX'
        cy.get('#userName').type(name)
        cy.get('#userEmail').type(email)
        cy.get('#currentAddress').type(currentAddress)
        cy.get('#permanentAddress').type(permanentAddress)
        cy.get('#submit').click()

        cy.get('#output').should('be.visible')
        cy.get("p[id='name']").should('contain.text', name)
        cy.get("p[id='email']").should('contain.text', email)
        cy.get("p[id='currentAddress']").should('contain.text', currentAddress)
        cy.get("p[id='permanentAddress']").should('contain.text', permanentAddress)
    });
});