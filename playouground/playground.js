var greeting;
greeting = function (name) {
    console.log('greeting');
    return "Hi " + name;
};
console.log("your name: " + greeting('cody'));
console.log('----------------------------------');
/**
 * Objects
 */
var employee;
employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};
console.log(employee);
/**
 * Arrays
 */
var testData = [];
var testData2 = ['test', 1];
testData.push('test');
testData.push('test2');
testData2.push('cody', 2);
console.log(testData);
console.log(testData2[1].valueOf());
