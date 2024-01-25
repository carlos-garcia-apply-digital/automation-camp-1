/// <reference types = "Cypress" />

describe('DEMOQA - Checkbox', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    beforeEach(() => {
        cy.visit('https://demoqa.com/checkbox');
    });

    it('Select all items in a single click', () => {
        const itemsList = ["home","desktop","notes","commands","documents","workspace","react","angular","veu","office","public","private","classified","general","downloads","wordFile","excelFile"]
        cy.get('#tree-node-home').click({force:true})
        cy.get('#result').should('be.visible').then(() =>{
            for(const item of itemsList){
                cy.get('#result').should('contain.text', item)
            }
        })
    });

    it('Select whole sections', () => {
        cy.get("button[title='Expand all']").click()
        cy.get('#tree-node-desktop').click({force:true})
        cy.get('#result').should('be.visible').then(() =>{
            const itemsList = ["desktop","notes","commands"]
            for(const item of itemsList){
                cy.get('#result').should('contain.text', item)
            }
        })

        cy.get('#tree-node-desktop').click({force:true})
        cy.get('#result').should('not.exist')

        cy.get('#tree-node-office').click({force:true})
        cy.get('#result').should('be.visible').then(() =>{
            const itemsList = ["office","public","private","classified","general"]
            for(const item of itemsList){
                cy.get('#result').should('contain.text', item)
            }
        })
    });
    
    it('Select specific items', () => {
        const itemsList = ["notes", "angular", "general", "wordFile"]
        cy.get("button[title='Expand all']").click().then((() => {
            for(const item of itemsList){
                cy.get(`#tree-node-${item}`).click({force:true})
                cy.get('#result').should('be.visible').should('contain.text', item)
            }
        }))
    });
});