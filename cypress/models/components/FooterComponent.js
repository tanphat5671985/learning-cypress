export default class FooterComponent{

    getColumns = () => cy.get('#fotcont .caption')
    getColumnHeader = () => cy.get('h4')
    getDesc = () => cy.get('p')
    getLogoImg = () => cy.get('img')
    getLogo = () => cy.get('h4')

    getAboutUsData(){
        let aboutUsData = {};
        this.getColumns().eq(0).within(()=>{
            this.getColumnHeader().then($header => aboutUsData.header = $header.text().trim());
            this.getDesc().then($desc => aboutUsData.desc = $desc.text().replace(/\n\s+/g, " ").trim());
        })
        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(aboutUsData))
        });
    }
    
    getContactUsData(){
        let contactUsData = {};
        this.getColumns().eq(1).within(()=>{
            this.getColumnHeader().then($header => contactUsData.header = $header.text().trim());
            this._getMultiDesc().then(desc => contactUsData.desc = desc);
        })
        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(contactUsData))
        });
    }

    _getMultiDesc(){
        let desc = "";

        this.getDesc().each($descLine => {
            desc += $descLine.text().trim() + " ";
        })
        return new Cypress.Promise(resolve => 
            cy.wrap('').then(()=>
                resolve(desc)));
    }

   getLogoImg(){
    return this.getColumns().eq(2).find(this.getLogoImg);
   }
   getLogo(){
    return this.getColumns().eq(2).find(this.getLogo);
   }
}