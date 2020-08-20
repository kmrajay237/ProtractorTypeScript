import faker = require('faker');
faker.locale = 'en';
export class FakeData{
    static FirstName=faker.name.firstName();
    static LastName=faker.name.lastName();
    static ZipCode=faker.address.zipCode();
}