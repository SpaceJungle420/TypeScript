var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.describe = function () {
        return "This is " + this.firstName + " " + this.lastName;
    };
    return Person;
}());
var Empolyee = /** @class */ (function (_super) {
    __extends(Empolyee, _super);
    function Empolyee(firstName, lastName, jobTitle) {
        var _this = 
        // call the contructor of the Person class:
        _super.call(this, firstName, lastName) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    Empolyee.prototype.describe = function () {
        return _super.prototype.describe.call(this) + (" I'm a " + this.jobTitle + ". ");
    };
    return Empolyee;
}(Person));
var person = new Person('Jhon', 'Doe');
console.log(person.getFullName());
console.log(person.describe());
var employee = new Empolyee('Jhon', 'Doe2', 'Web Developer');
console.log(employee.getFullName());
console.log(employee.describe());
