import BkgStsTrendingComponent from "../../models/components/BkgStsTrendingComponent";
describe ('Testing for Booking Status Trending board', ()=>{

    let BkgStsTrending;
    beforeEach (()=>{
        cy.visit('https://chorus-dev.one-line.com/bkm/booking');
        BkgStsTrending = new BkgStsTrendingComponent();
    });

    //func for calculate current time
    const calculateCurrentTime = () => {
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

    it('should be able to default value when open page & select a spec card', ()=>{
        BkgStsTrending.getTitleBkgStsTab().should('have.text','Total Bookings by Booking Status')
        BkgStsTrending.getSelectWeek().eq(0).should('be.value', calculateCurrentTime())
        //Select a specific status card
        BkgStsTrending.getSpecSts().eq(0).click({force: true, waitForAnimations: true});
        BkgStsTrending.getSpecSts().eq(0).should('have.css', 'border-color');
        //Selec another spec status card
        BkgStsTrending.getSpecSts().eq(2).click({force: true, waitForAnimations: true});
        BkgStsTrending.getSpecSts().eq(2).should('have.css', 'border-color');
        //Deselect a specific status card
        BkgStsTrending.getSpecSts().eq(2).click({force: true, waitForAnimations: true});
        BkgStsTrending.getSpecSts().eq(2).should('not.have.css', 'not.border-color');
    })

    it('should be able to verify title bkg status block', () => {
        const statusBkgTitle = [
          {selector: 'Firm', expectedText: 'Firm'},
          {selector: 'Advance', expectedText: 'Advance'},
          {selector: 'Wait', expectedText: 'Wait'},
          {selector: 'Cancel', expectedText: 'Cancel'}
        ];
      
        statusBkgTitle.forEach(pair => {
          cy.contains(pair.selector).should('have.text', pair.expectedText);
        });
    });
     
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
            BkgStsTrending.getSpecSts().eq(0).should('have.text','Firm6374')
            BkgStsTrending.getSpecSts().eq(1).should('have.text','Advance--0')
            BkgStsTrending.getSpecSts().eq(2).should('have.text','Wait70562')
            BkgStsTrending.getSpecSts().eq(3).should('have.text','Cancel630')
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
            BkgStsTrending.getSpecSts().eq(0).should('have.text','Firm9292')
            BkgStsTrending.getSpecSts().eq(1).should('have.text','Advance--0')
            BkgStsTrending.getSpecSts().eq(2).should('have.text','Wait346346')
            BkgStsTrending.getSpecSts().eq(3).should('have.text','Cancel57')
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
            BkgStsTrending.getSpecSts().eq(0).should('have.text','Firm738832')
            BkgStsTrending.getSpecSts().eq(1).should('have.text','Advance1212')
            BkgStsTrending.getSpecSts().eq(2).should('have.text','Wait1542469')
            BkgStsTrending.getSpecSts().eq(3).should('have.text','Cancel8025')
        })
    });
});