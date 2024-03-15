import ProductDetailComponent from "../../models/components/ProductDetailComponent"
import { HomePageAPI } from "../../support/HomePageAPI"

describe ('Product Detail Test', ()=>{

    before(()=>{
        cy.visit('/')
    })

    it('should be able to verify product details', ()=>{
        HomePageAPI.getHomePageProducts().then(apiData => {
            //cy.log(JSON.stringify(apiData))
            const randomProduct = apiData[Math.floor(Math.random()*apiData.length)];
            cy.log(JSON.stringify(randomProduct))
            const randonProductitle = randomProduct.title.trim().replace("\n","");
            cy.contains(randonProductitle).click();

            //verify infor
            const productDetail = new ProductDetailComponent();
            productDetail.getProductImg().should('be.visible');
            productDetail.getProductName().should('have.text', randonProductitle);
            productDetail.getProductPrice().should('contain.text', randomProduct.price);
            productDetail.getProductDes().should('not.empty');
            productDetail.getAddToCartBtn().should('be.visible');
        })
        //debug
        cy.wait(3000)
    })
})