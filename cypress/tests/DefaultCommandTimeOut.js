describe ('Explore Command Time out',{defaultCommandTimeout: 4000}, ()=>{
    //apply for 1 it
    it('should be able to apply custom default time out',{defaultCommandTimeout: 5000}, ()=>{
        cy.visit('/login')
        cy.get('#rememberchb',{timeout: 10000}).click() //apply cho 1 element

    });
});