const CHECKBOXES_SEL = "[type='checkbox']";

describe('Handling checkboxes', ()=>{
    it('should be able to select/unselect a checkbox', {defaultCommandTimeout: 10000},()=>{
        //cy.visit('/flights/lhe/dxb/oneway/economy/04-03-2024/1/0/0')
        cy.visit('/flights')
        cy.get('a[href^="https://www.phptravels.net/flights/lhe/dxb/oneway/economy/"]', {timeout:100000}).click()
        //try to select a first checkbox
        cy.get(CHECKBOXES_SEL).eq(0).click();
        cy.wait(3000)
        //unselect a first checkbox
        cy.get(CHECKBOXES_SEL).eq(0).click();

        //loop over all checkboxes
        cy.get(CHECKBOXES_SEL).filter(":not([checked])").then(item =>{
            cy.get(item).click({multiple: true})
        })
        cy.wait(3000)
        //cy.get(CHECKBOXES_SEL).filter("[checked]").should("have.length", 17); ko check dc do mỗi ngày có số chuyến bay khác nhau
    });

});