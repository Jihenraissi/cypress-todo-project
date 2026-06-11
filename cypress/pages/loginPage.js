import TodoPage from "./todoPage";
class LoginPage{
    //elementes

    get emailInput(){
        return cy.get('[data-testid="email"]')
    }
    get passwordInput(){
        return cy.get('[data-testid="password"]')
    }
    get submitButton(){
        return cy.get('[data-testid="submit"]')
    }
    //methodes
    load(){
        cy.visit("/");
        return this;
    }
    Login(email, password){
      this.emailInput.type(email)
      this.passwordInput.type(password)
      this.submitButton.click()
      return new TodoPage();
    }

}
export default LoginPage