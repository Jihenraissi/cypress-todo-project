/// <reference types="cypress" />
import userApi
 from '../Api/userApi';
import todoApi from '../Api/todoApi'; 
import TodoPage
 from '../pages/todoPage';

describe("Todo test cases", () =>{
    let token;
    beforeEach( ()=>{
       userApi.register().then((response) =>{
        token = response.body.access_token
    })
    })
 it("should be able to add a todo ", () => {
    new TodoPage()
     .load()
     .addButton()
     .addNewTodo('Learn Cypress')
     .firstItemShouldHaveText('Learn Cypress')


})
it("should be able to mark a todo as completed", () => {
todoApi.add(token)
new TodoPage()
.load()
.clickChexbox()
.firstItemShouldHavebackgroundcolor('rgb(33, 76, 97)')
})
})
