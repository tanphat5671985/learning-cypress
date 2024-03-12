import DemoBlazePage from "../models/pages/DemoBlazePage";
import products from "../tests/products";

describe('Demo Blaze Test', () => {
    it('should be able to get all elements of card', () => {
        cy.visit("https://demoblaze.com/");
        //verify data from API json file with UI
        new DemoBlazePage().getAllCardData().then(allCardData => {
            cy.wrap('').then(() => {
                //cy.log(JSON.stringify(getAllCardData))
                expect(allCardData).to.be.deep.eq(products);
            })
        })
    });

    it.only('should be able to get all elements of card from JSON', ()=>{
        cy.visit("https://demoblaze.com/");
        //inercept default homepage products
        cy.intercept('/entries').as('entries')
        cy.wait('@entries')
        cy.get('@entries').then(entries => {
            //save DATA from API
            let apiProductData = entries.response.body.Items
            apiProductData = apiProductData.map(item => {
                return {
                    itemName: item.title.replace('\n', ''),
                    itemPrice: `$${item.price}`
                }
            })
            //verify data from API & UI
            new DemoBlazePage().getAllCardData().then(allCardData => {
                cy.wrap('').then(() => {
                    expect(allCardData).to.be.deep.eq(apiProductData);
                })
            })
        })
    });
});