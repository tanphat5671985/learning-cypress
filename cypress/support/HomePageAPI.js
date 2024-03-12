export class HomePageAPI {
    
    static getHomePageProducts(){
        cy.intercept('/entries').as('entries')
        cy.wait('@entries')
        return cy.get('@entries').then(entries => entries.response.body.Items)
    }
}