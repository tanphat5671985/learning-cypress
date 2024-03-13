import FooterComponent from "../../models/components/FooterComponent";

describe ('Footer Component Test', ()=>{
    let footerComp;
    beforeEach(()=>{
        cy.visit('/')
        footerComp = new FooterComponent();
    })

    it('Test for About Us colum', ()=>{
        const expectedAboutUsData = {
            "header":"About Us",
            "desc":"We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality."
        }
        footerComp.getAboutUsData().then(actualAboutUsData => {
            cy.wrap('').then(()=>{
                expect(actualAboutUsData).to.eql(expectedAboutUsData)
        })
    })
    });

    it('Test for Contact Us colum', ()=>{
        const expectedContactUsData = {
            header:"Get in Touch",
            address: "2390 El Camino Real",
            phone: "+440 123456",
            email: "demo@blazemeter.com"
        }
        footerComp.getContactUsData().then(actualContactUsData => {
            //cy.log(JSON.stringify(actualContactUsData))
            cy.wrap('').then(()=>{
                expect(actualContactUsData.header).to.eql(expectedContactUsData.header)
                expect(actualContactUsData.desc).to.contains(expectedContactUsData.address)
                expect(actualContactUsData.desc).to.contains(expectedContactUsData.phone)
                expect(actualContactUsData.desc).to.contains(expectedContactUsData.email)
            });
        })
    })
    it('Test for brand logo', ()=>{
        footerComp.getColumns().eq(2).within(()=>{
            footerComp.getLogoImg().should('be.visible')
            footerComp.getLogo().should('contain.text','PRODUCT STORE') 
        })
    });

});