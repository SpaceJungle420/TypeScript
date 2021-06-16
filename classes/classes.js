function Person(ssn, firstName, lastName) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.getFullname = function () {
    return this.firstName + " " + this.lastName;
};
var person = new Person('171-28-0926', 'Jhon', 'doe');
console.log(person.getFullname());
// ES6 allows you to define a class
var Person2 = /** @class */ (function () {
    function Person2(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person2.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person2;
}());
var person2 = new Person2('181-23-429', 'jhon', 'secon');
console.log(person2.getFullName());
