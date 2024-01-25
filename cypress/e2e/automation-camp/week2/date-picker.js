/// <reference types = "Cypress" />

describe('DEMOQA - Date Picker', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    beforeEach(() => {
        cy.visit('https://demoqa.com/date-picker');
    });
    const month = 'December'
    const day = '31'
    const year = '2040'
    const time = '01:30'
    const expectedDate = '12/31/1990'
    const expectedDateTime = 'December 31, 2040 1:30 AM'
    
    it('Input value in Select Date field', () => {
        cy.get('#datePickerMonthYearInput').click()
        cy.get('.react-datepicker__year-select').select(year)
        cy.get('.react-datepicker__month-select').select(month)
        cy.get('div.react-datepicker__day:not(.react-datepicker__day--outside-month)').contains(day).click()
        cy.get('#datePickerMonthYearInput').should('have.value', expectedDate)
    });

    it.only('Input value in Date And Time field', () => {
        //reference for this approach
        //https://www.youtube.com/watch?v=5Z8BaPNDfvA&t=230s
        const changeMonth = (buttonText) => {
            cy.contains(buttonText).click()
            cy.get('.react-datepicker__current-month').invoke('text').then((currentDateYear) => {
                if(currentDateYear.includes(year)){
                    cy.log('We are on the right year')
                    return
                }
                changeMonth(buttonText)
            })
        }

        const changeYearDropdown = (buttonClass, index) => {
            cy.get(buttonClass).click()
            cy.get('.react-datepicker__year-option').eq(index).invoke('text').then((currentYear) => {
                if(currentYear == year){
                    cy.get('.react-datepicker__year-option').contains(year).click()
                    return
                }
                changeYearDropdown(buttonClass, index)
            })
        }
        cy.get('#dateAndTimePickerInput').click()
        //select year
        // //approach 1
        // cy.get('.react-datepicker__current-month').then(($element) => {
        //     const currentYearStr = $element.text().substring($element.text().indexOf(' ') + 1)
        //     const currentYearNum = Number(currentYearStr)
        //     const desiredYear = Number(year)
        //     let arrowText = ''
        //     if(desiredYear > currentYearNum){
        //         arrowText = 'Next Month'
        //     }else if(desiredYear < currentYearNum){
        //         arrowText = 'Previous Month'
        //     }
        //     if(arrowText != ''){
        //         changeMonth(arrowText)
        //     }
        // })
        //approach 2
        cy.get('.react-datepicker__year-dropdown-container').click()
        cy.get('.react-datepicker__year-option').eq(1).then(($element) => {
            const highestYearOption = Number($element.text())
            const desiredYear = Number(year)
            if(highestYearOption < desiredYear){
                changeYearDropdown('.react-datepicker__navigation--years-upcoming', 1)
            }else{
                cy.get('.react-datepicker__year-option').eq(11).then(($element) => {
                    const lowestYearOption = Number($element.text())
                    if(lowestYearOption > desiredYear){
                        changeYearDropdown('.react-datepicker__navigation--years-previous', 11)
                    }else{
                        cy.get('.react-datepicker__year-option').contains(year).click()
                    }
                })
            }
        })
        cy.get('.react-datepicker__month-dropdown-container').click()
        cy.get('.react-datepicker__month-option').contains(month).click()
        cy.get('div.react-datepicker__day:not(.react-datepicker__day--outside-month)').contains(day).click()
        cy.get('.react-datepicker__time-list-item ').contains(time).scrollIntoView().click()
        cy.get('#dateAndTimePickerInput').should('have.value', expectedDateTime)
    });
});