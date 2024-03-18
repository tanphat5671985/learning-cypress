import BkgStsTrendingComponent from "../../models/components/BkgStsTrendingComponent";
describe ('Testing for Booking Status Trending board', ()=>{

    let BkgStsTrending;
    beforeEach (()=>{
        cy.visit('https://chorus-dev.one-line.com/bkm/booking');
        BkgStsTrending = new BkgStsTrendingComponent();
    });
    const calculateCurrentTime=() => {
        const today = new Date();
        cy.log(today)
        // calculate Sunday is the first
        const startOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() +1 - today.getDay());
        const startOfWeekFormatted = startOfWeek.toISOString().split('T')[0];
        // calculate Saturday is the end
        const endOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() +1 + (6 - today.getDay()));
        const endOfWeekFormatted = endOfWeek.toISOString().split('T')[0];
        const currentTime = startOfWeekFormatted + ' ~ ' + endOfWeekFormatted //YYYY-MM-DD ~ YYYY-MM-DD
        cy.log('Current Time: ' + currentTime);
        return currentTime;
    }
    
    it('should be able to select a week & verify the status card block',()=>{
        BkgStsTrending.getTitleBkgStsTab().should('have.text','Total Bookings by Booking Status')
        BkgStsTrending.getSelectWeek().eq(0).should('be.value', calculateCurrentTime())
        //select a week & verify
        BkgStsTrending.getSelectWeek().eq(0).click();
        BkgStsTrending.getYearfromDrop().click();
        BkgStsTrending.getYearSpec().click();
        BkgStsTrending.getMonthSpec().click();
        BkgStsTrending.getDateSpec().click();
        BkgStsTrending.getSelectWeek().eq(0).should('be.value', '2023-10-08 ~ 2023-10-14');
        //verify the status card
        BkgStsTrending.getStsBlock().within(()=>{
            cy.contains('Firm').should('have.text','Firm')
            cy.contains('374').should('have.text','374')
            cy.contains('Advance').should('have.text','Advance')
            cy.contains('0').should('have.text','0')
            cy.contains('Wait').should('have.text','Wait')
            cy.contains('562').should('have.text','562')
            cy.contains('Cancel').should('have.text','Cancel')
            cy.contains('30').should('have.text','30')
        })
    });

    it('should be able to select a day & verify the status card block',()=>{
        BkgStsTrending.getTitleBkgStsTab().should('have.text','Total Bookings by Booking Status')
        BkgStsTrending.getSelectWeek().eq(0).should('be.value', calculateCurrentTime())
        //select a day & verify
        BkgStsTrending.getSelectWeek().eq(0).click();
        BkgStsTrending.getSelectTimeTab().eq(0).click({force: true, waitForAnimations: true});
        BkgStsTrending.getYearfromDrop().click();
        BkgStsTrending.getYearSpec().click();
        BkgStsTrending.getMonthPicker().click();
        BkgStsTrending.getMonthSpec().click();
        cy.get('[title="2023-10-11"]').click({force: true, waitForAnimations: true});
        BkgStsTrending.getSelectDate().eq(0).should('be.value', '2023-10-11');
        //verify the status card
        BkgStsTrending.getStsBlock().within(()=>{
            cy.contains('Firm').should('have.text','Firm')
            cy.contains('92').should('have.text','92')
            cy.contains('Advance').should('have.text','Advance')
            cy.contains('0').should('have.text','0')
            cy.contains('Wait').should('have.text','Wait')
            cy.contains('346').should('have.text','346')
            cy.contains('Cancel').should('have.text','Cancel')
            cy.contains('7').should('have.text','7')
        })
    });

    it('should be able to select a month & verify the status card block',()=>{
        BkgStsTrending.getTitleBkgStsTab().should('have.text','Total Bookings by Booking Status')
        BkgStsTrending.getSelectWeek().eq(0).should('be.value', calculateCurrentTime())
        //select a month & verify
        BkgStsTrending.getSelectWeek().eq(0).click();
        BkgStsTrending.getSelectTimeTab().eq(2).click({force: true, waitForAnimations: true});
        BkgStsTrending.getPreYearBtn().click({force: true, waitForAnimations: true});
        cy.get('[title="2023-11"]').click({force: true, waitForAnimations: true});
        BkgStsTrending.getSelectMonth().eq(0).should('be.value', '2023-11');
        //verify the status card
        BkgStsTrending.getStsBlock().within(()=>{
            cy.contains('Firm').should('have.text','Firm')
            cy.contains('832').should('have.text','832')
            cy.contains('Advance').should('have.text','Advance')
            cy.contains('12').should('have.text','12')
            cy.contains('Wait').should('have.text','Wait')
            cy.contains('469').should('have.text','469')
            cy.contains('Cancel').should('have.text','Cancel')
            cy.contains('25').should('have.text','25')
        })
    });
});