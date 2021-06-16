function Person(ssn, firstName, lastName) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullname = function() {
    return `${this.firstName} ${this.lastName}`;
}

let person = new Person('171-28-0926', 'Jhon', 'doe');
console.log(person.getFullname());

// ES6 allows you to define a class
class Person2 {
    ssn: string; 
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person2 = new Person2('181-23-429', 'jhon', 'secon');
console.log(person2.getFullName());