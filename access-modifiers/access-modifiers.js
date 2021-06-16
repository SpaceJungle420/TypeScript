/**
 * PRIVATE MODIFIER
 */
var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var personOne = new Person('134-03-234', 'jhon', 'one');
// can't acces because property is private
// console.log(personOne.ssn); 
console.log(personOne.getFullName());
