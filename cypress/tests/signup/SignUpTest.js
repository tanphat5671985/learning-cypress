import HeaderComponent from "../../models/components/HeaderComponent";
import SignUpComponent from "../../models/components/SignUpComponent";

const generateRandomUser = usernameLength => {
    const ALL_CHARS = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";
    const ALL_CHARS_LENGTH = ALL_CHARS.length;
    let randomUsername = '';
    for (let index = 0; index < usernameLength; index++){
        randomUsername += ALL_CHARS.charAt(Math.floor(Math.random()*ALL_CHARS_LENGTH))
    }
    return randomUsername
}

const SIGNUP_CRED = {
    username: generateRandomUser(8),
    password: "admin"
}

describe('Signup Test', ()=>{
    let headerComp;
    let signupComp;
    beforeEach(()=>{
        cy.visit('/');
        headerComp = new HeaderComponent();
        signupComp = new SignUpComponent();
    })

    const signup = (username, password) => {
        headerComp.getSignUPLink().click();
        signupComp.getSignUpModal().should('be.visible');
        signupComp.getUsername().type(`${username}`, {force: true, waitForAnimations: true});
        signupComp.getPassword().type(`${password}`, {force: true, waitForAnimations: true});
        signupComp.getSignUpBtn().click({force: true});
    }

    it('should be able to create a new user', ()=>{
        const {username, password} = SIGNUP_CRED;
        signup(username, password);
        //verify after clicking signup button
        cy.on('window:alert', (alert)=>{
            expect(alert).to.equal("Sign up successful.")
        })
    });

    it('should be able to existing username', ()=>{
        const {username, password} = SIGNUP_CRED;
        signup("tun", password);
        //verify after clicking signup button
        cy.on('window:alert', (alert)=>{
            expect(alert).to.equal("This user already exist.")
        })

    });
    //delete account after testing by using afer() func
});