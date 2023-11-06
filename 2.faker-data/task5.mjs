import { faker } from '@faker-js/faker';
import fs from 'fs'

function generateUsers() {

  let users = []

  for (let id=1; id <= 100; id++) {

    let firstName = faker.person.firstName();
    let lastName = faker.person.lastName();
    let email = faker.internet.email();

    users.push({
        "id": id,
        "first_name": firstName,
        "last_name": lastName,
        "email": email
    });
  }
console.log({"data": users});
  return { "data": users }
}

let dataObj = generateUsers();

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));
