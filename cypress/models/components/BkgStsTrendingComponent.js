export default class BkgStsTrendingComponent {
    
    getTitleBkgStsTab = () => cy.get('#rc-tabs-0-tab-booking-status');
    getSelectWeek = () => cy.get('[placeholder="Select week"]');
    getSelectDate = () => cy.get('[placeholder="Select date"]');
    getSelectMonth = () => cy.get('[placeholder="Select month"]');
    
    getYearfromDrop = () => cy.get('.ant-picker-year-btn');
    getYearSpec = () => cy.get('[title="2023"]');
    getMonthSpec =() => cy.get('[title="2023-10"]');
    getDateSpec = () => cy.get('[title="2023-10-08"]');
    
    getSelectTimeTab = () => cy.get('.ant-menu-overflow-item.ant-menu-item');
    getMonthPicker = () => cy.get('.ant-picker-month-btn');
    getPreYearBtn = () => cy.get('.ant-picker-header-super-prev-btn');
    //get Status Block Area (4 status)
    getStsBlock = () => cy.get('#rc-tabs-0-panel-booking-status');

    //get a Status Block (8 block).eq(0,1,2,...)
    getSpecSts = () => cy.get('div[class*="rounded bg-white w-[8.75rem]"]');
}