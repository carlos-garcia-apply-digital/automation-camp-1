/// <reference types = "Cypress" />

describe('DEMOQA - Radio button', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    
    it('Click radio buttons', () => {
        cy.visit('https://demoqa.com/radio-button');
        
        cy.get('#yesRadio').check({force:true}).should('be.checked')
        cy.contains('You have selected').should('be.visible').children('span').should('have.text', 'Yes')

        cy.get('#impressiveRadio').check({force:true}).should('be.checked')
        cy.contains('You have selected').should('be.visible').children('span').should('have.text', 'Impressive')
        
        cy.get('#noRadio').siblings('label').click()
        //cy.get('#noRadio').click()
        cy.get('#noRadio').should('not.be.checked')
        cy.contains('You have selected').should('be.visible').children('span').should('have.text', 'Impressive')
    });
});