class Person {
    readonly birthDate: Date;

    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }
}

let person = new Person(new Date(1990, 12, 25));
// cant reassign because it is a read only property
// person.birthDate = new Date(9999, 92, 23);
