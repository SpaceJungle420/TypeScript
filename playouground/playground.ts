let greeting: (name: string) => string;

greeting = function (name: string) {
    console.log('greeting');
    return `Hi ${name}`;
}

console.log(`your name: ${greeting('cody')}`);
console.log('----------------------------------');

/**
 * Objects
 */
let employee: object;

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
let testData: string[] = [];
let testData2: [string, number] = ['test', 1];

testData.push('test');
testData.push('test2');
testData2.push('cody', 2);

console.log(testData);
console.log(testData2[1].valueOf());