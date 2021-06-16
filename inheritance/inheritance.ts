class Person {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    describe(): string {
        return `This is ${this.firstName} ${this.lastName}`;
    }
}

class Empolyee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string) {
            // call the contructor of the Person class:
            super(firstName, lastName);
        }

        describe(): string {
            return super.describe() + ` I'm a ${this.jobTitle}. `;
        }
}


let person = new Person('Jhon', 'Doe');
console.log(person.getFullName());
console.log(person.describe());

let employee = new Empolyee('Jhon', 'Doe2', 'Web Developer');
console.log(employee.getFullName());
console.log(employee.describe());