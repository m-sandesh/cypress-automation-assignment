class registerPage {
    // Selectors
    get registerLink() {
        return cy.get('a:contains("Register")')
    }
    get firstNameField() {
        return cy.get('input[name="customer.firstName"]')
    }
    get lastNameField() {
        return cy.get('input[name="customer.lastName"]')
    }
    get addressField() {
        return cy.get('input[name="customer.address.street"]')
    }
    get cityField() {
        return cy.get('input[name="customer.address.city"]')
    }
    get stateField() {
        return cy.get('input[name="customer.address.state"]')
    }
    get zipField() {
        return cy.get('input[name="customer.address.zipCode"]')
    }
    get phoneField() {
        return cy.get('input[name="customer.phoneNumber"]')
    }
    get ssnField() {
        return cy.get('input[name="customer.ssn"]')
    }
    get userNameField() {
        return cy.get('input[name="customer.username"]')
    }
    get passwordField() {
        return cy.get('input[name="customer.password"]')
    }
    get confirmPassField() {
        return cy.get('input[name="repeatedPassword"]')
    }
    get registerButton() {
        return cy.get('input[value="Register"]')
    }

    // Interaction Methods
    clickRegisterLink() {
        this.registerLink.click()
    }
    clickRegisterButton(){
        this.registerButton.click()
    }
    registerUser(firstName, lastName, address, city, state, zip, phone, ssn, username, password, confirmPass) {
        this.firstNameField.type(firstName)
        this.lastNameField.type(lastName)
        this.addressField.type(address)
        this.cityField.type(city)
        this.stateField.type(state)
        this.zipField.type(zip)
        this.phoneField.type(phone)
        this.ssnField.type(ssn)
        this.userNameField.type(username)
        this.passwordField.type(password)
        this.confirmPassField.type(confirmPass)
        this.registerButton.click()
    }
}

export default registerPage