describe('Element interaction', ()=>{
    it ('should be able to complete the form', ()=>{

        //open the login form page
        cy.visit("/login")
        //find username,password,btn
        cy.get("#email").type("tester113@gmail.com")
        cy.get("#password").type("tester113@")
        cy.get("#submitBTN").click()
        //debug
        cy.wait(5000)
    });

    it ('should be able to complete the form', ()=>{

        //open the login form page
        cy.visit("/login")
        //find username,password,btn
        
        cy.get("#email").type("test.vn@gmail.com")
        cy.get("#password").type("123456789")
        cy.get("#submitBTN").click()
        //debug
        cy.wait(5000)
    });
});