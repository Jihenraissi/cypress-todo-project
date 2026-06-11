/// <reference types="cypress" />
import LoginPage from "../pages/loginPage";

it("Should be able to login", () => {
    cy.env(['email', 'password']).then(({ email, password }) => {
        new LoginPage()
            .load()
            .Login(email, password)
            .welcomeMessageShouldVisible()
    })
})