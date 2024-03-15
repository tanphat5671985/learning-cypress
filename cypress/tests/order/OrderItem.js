import { HomePageAPI } from "../../support/HomePageAPI"
import HeaderComponent from "../../models/components/HeaderComponent"
import LoginComponent from "../../models/components/LoginComponent"

describe('E2E flow purchase an product', ()=>{

    beforeEach(()=>{
        cy.visit('/')
    })

    it('purchase an product as guest', ()=>{
        purchaseItem();
    });
    it('purchase an product as logged in user', ()=>{
        const LOGIN_CRED = {
            username: "tun",
            password: "admin"
        }
        const {username, password} = LOGIN_CRED;
        login(username, password);
        purchaseItem();
    });

})

const login = (username, password) => {
    const headerComp = new HeaderComponent();
    const loginComp = new LoginComponent();

    headerComp.getLoginLink().click();
    loginComp.getLoginModal().should('be.visible');
    loginComp.getUsername().type(`${username}`, {force: true, waitForAnimations: true});
    loginComp.getPassword().type(`${password}`, {force: true, waitForAnimations: true});
    loginComp.getLoginBtn().click({force: true});
}

const purchaseItem = () =>{
    HomePageAPI.getHomePageProducts().then(apiData =>{
        const randomProduct = apiData[Math.floor(Math.random()*apiData.length)];
        const randomProductTitle = randomProduct.title.trim().replace("\n", "");
        cy.contains(randomProductTitle).click();
        //click Add to Cart Button
        cy.contains('Add to cart').click();
        //Go to Cart Page
        cy.get('#cartur').click();
        //Verify cart details

        //place order
        cy.contains('Place Order').click();
        //input order details
        cy.get('#name').type('tester');
        cy.get('#card').type('1111')
        cy.contains('Purchase').click();

        //verify after purchase to confirm infor
        cy.get('.sweet-alert h2').should('have.text', 'Thank you for your purchase!')
        cy.get('.sweet-alert .lead').then($confirmOrderDetails => {
            //cy.wrap($confirmOrderDetails).should('contain.text', randomProduct.price)
            cy.wrap($confirmOrderDetails).should('contain.text', 'Card Number: 111')
            cy.wrap($confirmOrderDetails).should('contain.text', 'Name: tester')


        })
        //continue... 
        //why price = 0??
        //e2e ko can verify ki cac step login,... tap trung verify final case
        //func login tach ra component, function roi dùng để tái sử dụng dễ dàng
        //các get element thì dùng page object for reuse
    })
}