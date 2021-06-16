/**
 * PRIVATE MODIFIER
 */

class Person {
    private ssn: string;
    private firstName: string;
    private lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName; 
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let personOne = new Person('134-03-234', 'jhon', 'one');
// can't acces because property is private
// console.log(personOne.ssn); 
console.log(personOne.getFullName());