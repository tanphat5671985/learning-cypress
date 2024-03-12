import { SRHomePage } from "../../models/pages/SRHomePage";

describe('SR HomePage Test', ()=>{
    it('should be able to print all the titles', ()=>{
        cy.visit('https://www.simplyrecipes.com/');
        cy.get('.card__title').each(($title, index)=>{
            cy.log(index, $title.text().trim());
            //cy.log()
        })
    });
    it('should be able to interact with a component', ()=>{
        cy.visit('https://www.simplyrecipes.com/');
        const srHomePage = new SRHomePage();
        srHomePage.heroComponent().cardTitle.each(($title, index)=>{
            cy.log(index, $title.text().trim());
        })
    })

    it.only('should be able to get hero card title', () => {
        cy.visit('https://www.simplyrecipes.com/');
        new SRHomePage().getHeroCompTitle().then(title => {
            cy.log(title)
            cy.wrap('').then(()=>{
                expect(title).to.be.eq('This 100-Year-Old Cake Recipe Is Just as Delicious Today')
                //title thay đổi theo ngày nên ko thường dùng cách này=))
            })
        })
        // The Freezies Awards: The 9 Best New Frozen Finds of 2024

    });
});