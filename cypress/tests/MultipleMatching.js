describe('Multiple elems matching interaction', ()=>{
    it('should be able to interact with list of element', ()=>{
        cy.log('2nd test')
        cy.visit("/login")
        //use eq
        cy.get("input").eq(0).type("test@gmail.com")
        cy.get("input").eq(1).type("11111")
        //use closure
        cy.get("input").then(items => {
            cy.get(items[0]).clear()
            cy.get(items[0]).type("aaaa@gmail.com")
            cy.get(items[1]).clear()
            cy.get(items[1]).type("aaaa")
        })
        cy.get("#submitBTN").click()

        cy.wait(3000)
    });

    /*
    it('should be able to interact with list of element', ()=>{
        cy.visit("/login")
        cy.get("input").each((item, index) =>{
            cy.get(item).type("something") //bug do page có tới 9 input lận, input của btn thì ko thể nhập =))
        })
        cy.get("#submitBTN").click()

        cy.wait(3000)
    });
    */
});