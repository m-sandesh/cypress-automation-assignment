import RegisterPage from "../pages/registerPage";

describe("Register - Demo Project Automation", () => {

    // Demo Project is unstable.

    let registerPage = new RegisterPage()
    let regData

    before(() => {
        cy.visit(Cypress.env("baseURL"))

        cy.fixture('registerUserDetails').then((data) => {
            regData = data
            console.log(regData);
        })
    })

    it("should navigate to the [Register] page", () => {
        registerPage.clickRegisterLink()
        cy.url().should('include', '/register')
    })

    it("should display validation messages upon empty fields", () => {
        registerPage.clickRegisterButton()
        cy.get('.error').should('exist')
    })

    it("should register the users to the system", () => {
        registerPage.clickRegisterLink()
        cy.url().should('include', '/register')

        registerPage.registerUser(regData.firstName, regData.lastName, regData.address, regData.city, regData.state, regData.zip, regData.phone, regData.ssn, regData.username, regData.password, regData.confirmPass)
        cy.contains("Account Services")
    })
})