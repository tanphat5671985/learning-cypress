const SIGNUP_TXT_NAME = "input[name='name']";
const SIGNUP_TXT_EMAIL = "input[name='email']";
const SIGNUP_BTN = "button";


class TravelHomePage {
    get signupTxtName(){
        return cy.get(SIGNUP_TXT_NAME)
    }
    get signupTxtEmail(){
        return cy.get(SIGNUP_TXT_EMAIL)
    }

    get signupBtn(){
        return cy.get(SIGNUP_BTN).contains('Signup Newsletter')
    }
}

module.exports = TravelHomePage