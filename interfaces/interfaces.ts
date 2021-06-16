interface Person {
    readonly ssn: string;
    firstName: string;
    middleName?: string;
    lastName: string;
}

interface PersonTwo {
    firstName2: string, 
    lastName2: string
}

function getFullName(person: Person) {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}

let person: Person = {
    ssn: '127-12-123',
    firstName: 'John',
    lastName: 'Doe'
};

let jane = {
    ssn: '123-123-123',
    firstName: 'Jane',
    middleName: 'k',
    lastName: 'Doe',
    age: 22
}

console.log(getFullName(person));
console.log(getFullName(jane));

/**
 * FUNCTION TYPES
 */

interface StringFormat {
    (str: string, isUpper: boolean): string
}

let format: StringFormat;
format = function (str: string, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
}

let format2: StringFormat;
format2 = function (src: string, upper: boolean) {
    return upper ? src.toLocaleUpperCase() : src.toLocaleLowerCase();
}

console.log(format('hi', true));
console.log(format2('hi', true));

let lowerCase: StringFormat;
lowerCase = function (str: string) {
    return str.toLocaleLowerCase();
}

console.log(lowerCase('Hi', false));