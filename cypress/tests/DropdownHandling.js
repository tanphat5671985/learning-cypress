const DROPDOWN_SEL = 'select[id="flight_type"]';


describe('Dropdown handling', ()=>{
    it('should be able to select dropdown options', ()=>{
        //visit page
        cy.visit('/');
        //verify the default option
        cy.get("select[id='flight_type'] option:selected").invoke("text").should("eq","\nEconomy");
        cy.wait(3000);
        //select by index
        cy.get(DROPDOWN_SEL).select(3);
        cy.wait(3000);
        //select by value
        cy.get(DROPDOWN_SEL).select("economy_premium");
        cy.wait(3000);
        //select by visible text
        cy.get(DROPDOWN_SEL).select("Business");
        //verify the selected current option
        cy.get("select[id='flight_type'] option:selected").invoke("text").should("eq","\nBusiness");
    });
});