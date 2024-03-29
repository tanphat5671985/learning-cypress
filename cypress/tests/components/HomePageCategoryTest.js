import DemoBlazePage from "../../models/pages/DemoBlazePage";
import { HomePageAPI } from "../../support/HomePageAPI";

describe('Homepage category Test', ()=>{
    beforeEach(()=>{
        cy.visit('/')
        HomePageAPI.waitForHomePageLoaded();
    })

    function verifyCategoryFilterBy(productName){
        cy.intercept('/bycat').as('cats')
        cy.get(`[onclick="byCat(\'${productName}\')"]`).click({force:true});
        cy.wait('@cats')
        cy.request({
            method: "POST",
            url: "https://api.demoblaze.com/bycat",
            body: {
                cat: `${productName}`
            }
        }).then(res => {
            //cy.log(JSON.stringify(res))
            let apiProductData = res.body.Items.map(item => {
                return {
                    itemName: item.title.replace('\n',''),
                    itemPrice: `$${item.price}`
                }
            })
            cy.log(JSON.stringify(apiProductData))
            new DemoBlazePage().getAllCardData().then(allCardData => {
                cy.wrap('').then(()=>{
                    expect(allCardData).to.be.eql(apiProductData);
                })
            })
        })
    }

    const SCENARIOS = ["phone", "notebook","monitor"]
    SCENARIOS.forEach(product => {
        it(`should be able to filter ${product} product`, ()=>{
            verifyCategoryFilterBy(`${product}`);
        });
    })
});