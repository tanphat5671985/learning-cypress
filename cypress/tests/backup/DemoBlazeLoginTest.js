import DemoBlazePage from "../../models/pages/DemoBlazePage";
import { HomePageAPI } from "../../support/HomePageAPI";
describe('Login with cookie', () => {

    let apiProduct
    beforeEach(() => {
        cy.login('tun', 'admin')
        cy.visit('https://demoblaze.com/')
        HomePageAPI.getHomePageProducts().then(entries => apiProduct = entries)
    })

    it('should be able to get data from api', () => {
        let apiProductData = apiProduct.map(item => {
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