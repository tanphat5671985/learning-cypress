describe('Click btn and find element in new page',()=>{
    it('should be able to apply custom default timeout', ()=>{
        cy.visit("/")
        cy.get('a[href="https://www.phptravels.net/flights"]').click()
        cy.location('pathname', {timeout:5000}).should("eq","/flights")
        
    });
});