var Person = /** @class */ (function () {
    function Person(birthDate) {
        this.birthDate = birthDate;
    }
    return Person;
}());
var person = new Person(new Date(1990, 12, 25));
// cant reassign because it is a read only property
// person.birthDate = new Date(9999, 92, 23);
