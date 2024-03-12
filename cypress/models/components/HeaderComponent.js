export default class HeaderComponent {
    brandLogo = () => cy.get('#nava')
    brandLogoImg = () => cy.get('#nava img')
    headerMenuItemList = () => cy.get('.nav-item a')

    getMenuDetails(){
        let menuDetails = [];
        //Exclude "display:none"
        this.headerMenuItemList().each($item => {
            const style = $item.attr("style")
            if (style == undefined || !style.includes('display:none')) {
                menuDetails.push({
                    text: $item.text(),
                    href: $item.attr('href')
                })
            }
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(menuDetails));
        })
    }
}