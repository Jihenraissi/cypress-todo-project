
class todoApi{
   static add(token){
        return  cy.request({
            url:'https://todo.qacart.com/api/v1/tasks',
            method:'POST',
            auth:{
               bearer: token
            },
            body:{
               item: "Learn cypress",
                isCompleted: false
            },
        })
    }
    
}
export default todoApi;