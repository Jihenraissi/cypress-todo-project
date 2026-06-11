import TodoPage from "./todoPage"
class NewTodoPage{

    getNewTodoInput(){
        return cy.get('[data-testid="new-todo"]')
    }
    getSubmitTask(){
        return cy.get('[data-testid="submit-newTask"]')
    }
    addNewTodo(item){
    this.getNewTodoInput().type(item)
    this.getSubmitTask().click()
    return new TodoPage();

    }
}
export default NewTodoPage