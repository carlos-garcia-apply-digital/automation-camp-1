/// <reference types = "Cypress" />

describe('Herokuapp - Add/Remove Elements', () => {

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/add_remove_elements/');
    });
    
    it('Add and remove 5 elements and validate actions', () => {
        cy.get('button[onclick="addElement()"]').click()
        cy.get('button[onclick="addElement()"]').click()
        cy.get('button[onclick="addElement()"]').click()
        cy.get('button[onclick="addElement()"]').click()
        cy.get('button[onclick="addElement()"]').click().then(() => {
            for (let index = 5; index > 0; index--) {
                cy.get('button[onclick="deleteElement()"]').should('have.length', index).eq(0).click()
            }
        })
        cy.get('button[onclick="deleteElement()"]').should('not.exist')
    });
});