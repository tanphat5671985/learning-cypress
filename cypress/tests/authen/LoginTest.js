import HeaderComponent from "../../models/components/HeaderComponent";
import LoginComponent from "../../models/components/LoginComponent";

const LOGIN_CRED = {
    username: "tun",
    password: "admin"
}

describe('Login Test', ()=>{
    let headerComp;
    let loginComp;
    beforeEach(()=>{
        cy.visit('https://www.demoblaze.com/');
        headerComp = new HeaderComponent();
        loginComp = new LoginComponent();
    })

    const login = (username, password) => {
        headerComp.getLoginLink().click();
        loginComp.getLoginModal().should('be.visible');
        loginComp.getUsername().type(`${username}`, {force: true, waitForAnimations: true});
        loginComp.getPassword().type(`${password}`, {force: true, waitForAnimations: true});
        loginComp.getLoginBtn().click({force: true});
    }

    it('should be able to login with correct username and password', ()=>{
        const {username, password} = LOGIN_CRED;
        login(username, password);
        //verify after user login button
        headerComp.getLoggedUser().should('be.visible');
        headerComp.getLoggedUser().should('contain.text', `Welcome ${LOGIN_CRED.username}`);

    });

    it('should be able to wrong username', ()=>{
        const {username, password} = LOGIN_CRED;
        login(username + "_aaa", password);
        //verify after user login button
        cy.on('window:alert', (alert)=>{
            expect(alert).to.contains("User does not exist.")
        })

    });

    it('should be able to wrong password', ()=>{
        const {username, password} = LOGIN_CRED;
        login(username, password+ "_bb");
        //verify after user login button
        cy.on('window:alert', (alert)=>{
            expect(alert).to.contains("Wrong password.")
        })

    });

});