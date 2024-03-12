import HeaderComponent from "../../models/components/HeaderComponent";

describe ('Header Component Test', () => {
    
    const BRAND_TEXT = 'PRODUCT STORE';
    let headerComp;
    //run for each 'it' block
    beforeEach(()=>{
        cy.visit('/');
        headerComp= new HeaderComponent();
    })
    it('Test for branch logo', ()=>{
        headerComp.brandLogoImg().should('be.visible')
        headerComp.brandLogo().should('contain.text', BRAND_TEXT)

    });

    it('Test for header menu details', ()=>{
        const expectedMenuDetails = [
            {"text":"Home (current)","href":"index.html"},
            {"text":"Contact","href":"#"},
            {"text":"About us","href":"#"},
            {"text":"Cart","href":"cart.html"},
            {"text":"Log in","href":"#"},
            {"text":"Sign up","href":"#"}
        ]
        //verify title of menubar
        headerComp.getMenuDetails().then(actualMenuDetail => {
            cy.log(JSON.stringify(actualMenuDetail))
            cy.wrap('').then(()=>{
                expect(actualMenuDetail).to.be.deep.equal(expectedMenuDetails);
            })
        })
    });
});