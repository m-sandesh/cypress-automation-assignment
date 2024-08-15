import LoginPage from "../pages/loginPage";

let neatCSV = require('neat-csv')

describe("Login - Demo Project Automation", () => {

    // Demo Project is unstable.

    let loginPage = new LoginPage()
    let userData

    before(() => {
        cy.visit(Cypress.env("baseURL"))
        cy.url().should('include', '/index');

        cy.fixture("userLoginData.csv").then(neatCSV).then((csvData) => {
            userData = csvData
        })
    })

    it("should not login to the sytem", () => {
        loginPage.login('noUser', 'noPassword');
        cy.url().should('include', '/login');
    });

    it("should login successfully", () => {
        loginPage.login('san', 'san');
        cy.url().should('include', '/overview');
        cy.get('#accountTable').should('exist')
    });

    it("should log out the user", ()=>{
        loginPage.logout()
        cy.get('h2').contains('Customer Login')
    });

    it("should not login using CSV users", ()=>{
        for (let i = 0; i < userData.length; i++) {
            loginPage.login(userData[i].username,userData[i].password)
            cy.contains("Error!")
        }
    })
})