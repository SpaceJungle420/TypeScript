function getFullName(person) {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}
let person = {
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
};
console.log(getFullName(person));
console.log(getFullName(jane));
let format;
format = function (str, isUpper) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
let format2;
format2 = function (src, upper) {
    return upper ? src.toLocaleUpperCase() : src.toLocaleLowerCase();
};
console.log(format('hi', true));
console.log(format2('hi', true));
let lowerCase;
lowerCase = function (str) {
    return str.toLocaleLowerCase();
};
console.log(lowerCase('Hi', false));
