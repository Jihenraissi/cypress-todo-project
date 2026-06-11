import NewTodoPage from "./newTodoPage"
class TodoPage {
    getWelcomeMessage(){
        return cy.get('[data-testid="welcome"]')
    }

    getAddButton(){
        return cy.get('.sc-idiyUo > .MuiButtonBase-root')
    }
    getFirstTodoItem(){
        return cy.get('[data-testid="todo-item"]').eq(0)
    }
    getCheckboxIcon(){
        return cy.get('[data-testid="complete-task"]').eq(0)
    }
    load(){
        cy.visit('/todo')
        return this;
    }
    addButton(){
        this.getAddButton().click()
        return new NewTodoPage();
    }
    clickChexbox(){
        this.getCheckboxIcon().click()
        return this;
    }
    firstItemShouldHaveText(text){
        this.getFirstTodoItem().should('have.text', text)
        return this;
    }
    firstItemShouldHavebackgroundcolor(color) {
        this.getFirstTodoItem().should('have.css', 'background-color', color)
        return this
    }
        welcomeMessageShouldVisible(){
        this.getWelcomeMessage().should('be.visible')
        return this;
    }
}
export default TodoPage