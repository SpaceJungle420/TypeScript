class Employee {
    constructor(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        Employee.headCount++;
    }
    static getHeadcount() {
        return Employee.headCount;
    }
}
Employee.headCount = 0;
let john = new Employee('John', 'Doe', 'Front-end Developer');
let jane = new Employee('Jane', 'Doe', 'Back-end Developer');
console.log(Employee.getHeadcount()); // 2
