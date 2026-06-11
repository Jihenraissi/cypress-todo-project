import { faker } from '@faker-js/faker';
class userApi{
    static register(){
     return cy.request({
        url: 'https://todo.qacart.com/api/v1/users/register',
        method: 'POST',
        body: {
              firstName: faker.person.firstName(),
              lastName: faker.person.lastName(),
              email: faker.internet.email(),
              password: "Jana2021@",
        }
    })
    }

}

export default userApi;