export default class ProductDetailComponent {

    getProductImg = () => cy.get('.product-image img')
    getProductName = () => cy.get('#tbodyid h2')
    getProductPrice = () => cy.get('#tbodyid h3')
    getProductDes = () => cy.get('#more-information p')
    getAddToCartBtn = () => cy.get('#tbodyid a')

}