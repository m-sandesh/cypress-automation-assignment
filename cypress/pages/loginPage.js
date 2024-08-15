class loginPage {
    // Define selectors as getter methods
    get usernameField() {
        return cy.get('input[name="username"]')
    }
    get passwordField() {
        return cy.get('input[name="password"]')
    }
    get loginButton() {
        return cy.get('input[type="submit"]')
    }
    get logoutButton(){
        return cy.get('a').contains('Log Out')
    }

    // Define methods to interact with the page
    login(username, password) {
        this.usernameField.type(username);
        this.passwordField.type(password);
        this.loginButton.click();
    }
    logout(){
        this.logoutButton.click()
    }
}

export default loginPage