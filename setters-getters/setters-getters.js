var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (theAge) {
            if (theAge <= 0 || theAge >= 200) {
                throw new Error('The age is invalid');
            }
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (theFirstName) {
            if (!theFirstName) {
                throw new Error('Invalid first name.');
            }
            this._firstName = theFirstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (theLastName) {
            if (!theLastName) {
                throw new Error('Invalid last name.');
            }
            this._lastName = theLastName;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Object.defineProperty(Person.prototype, "fullName", {
        // This shows how to create a fullName gett and setter
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        set: function (name) {
            var parts = name.split(' ');
            if (parts.length != 2) {
                throw new Error('Invalid name format: first last');
            }
            this.firstName = parts[0];
            this.lastName = parts[1];
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person();
person.firstName = 'jhon';
console.log(person.firstName);
// console.log(person.getFullName());
person.fullName = 'the dude';
console.log(person.fullName);
