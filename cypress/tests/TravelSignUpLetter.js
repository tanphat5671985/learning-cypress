import TravelHomePage from '../models/pages/TravelHomePage';
describe('Travel sign up news letter', ()=>{
    it('should be able to sign up news letter', ()=>{
        const NAME = "tester1";
        const EMAIL = "test@gmail.com";
        cy.visit("/");
        let travelHomePage = new TravelHomePage();
        travelHomePage.signupTxtName.type(NAME);
        travelHomePage.signupTxtEmail.type(EMAIL);
        travelHomePage.signupBtn.click();

        //check text displays on alert
        cy.on('window:alert', (alertText)=>{
            expect(alertText).to.equal('Email Exist please use different');
        })
    });
});