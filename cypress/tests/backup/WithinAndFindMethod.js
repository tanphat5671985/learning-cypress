describe ('Learn about within and find method', ()=>{
    it('it should be able to check within and find method', ()=>{
        cy.visit('https://www.simplyrecipes.com/');
        //count total element with card__title
        cy.get('.card__title').each(($cardTitle, index) => {
            cy.log(index) //27 elements
        })
        //find element use within
        cy.get('.showcase__hero').within(()=>{
            cy.get('.card__title').each(($cardTitle, index)=>{
                cy.log(index) //1 element
            })
        })

    });
    it.only('find method', ()=>{
        cy.visit('https://www.simplyrecipes.com/');
        cy.get('.showcase__hero').find('.card__title').each(($cardTitle, index)=>{
            cy.log(index) //1 element
        })
    })
    
});