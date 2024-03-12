import {HeroComponent} from "../components/scr/HeroComponent";

export class SRHomePage{
    
    heroComponent(){
        return new HeroComponent(cy.get(HeroComponent.COM_SEL));
    }

    
    getHeroCompTitle(){
        let title = '';
        cy.get('.showcase__hero .card__title').then($title =>{
            title = $title.text().trim();
        })
        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(title))
        })
    }
}