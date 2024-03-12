/**
 * @memberof cy
 * @method login
 */

Cypress.Commands.add('login', (username, password)=>{
    cy.request({
        url: 'https://api.demoblaze.com/login',
        method: 'POST',
        headers: {
            contentType: "application/json"
        },
        body: {
            username: 'tun', password: btoa('admin')
        }
    }).then(res => {
        const authToken = res.body.split('Auth_token: ')[1];
        cy.log(authToken)
        cy.setCookie('tokenp_', authToken)
    })
})