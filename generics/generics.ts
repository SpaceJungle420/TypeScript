function getRandomNumberElement(items: number[]): number {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numbers = [1, 5, 7, 4, 2, 9];
console.log(getRandomNumberElement(numbers));

function getRandomStringElement(items: string[]): string {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let strings = ['red', 'blue', 'orange'];
console.log(getRandomStringElement(strings));

/**
 * USING THE ANY TYPE
 */
function getRandomAnyElement(items: any[]): any{
    let randomIndex: number = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

console.log(getRandomAnyElement(numbers));
console.log(getRandomAnyElement(strings));

/**
 * TypeScript generics come to resue.
 * The following shows a generic funtion that returns the reandom element from an array of type T:
 */
function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

console.log(getRandomElement(numbers));

/**
 * Calling a generic function
 */
let randomEle = getRandomElement(numbers);
console.log(randomEle);

/**
 * Generic functions with multiple types
 */
function merge<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}

let result = merge(
    { name: 'John' },
    { jobTitle: 'Frontend Developer'}
);

console.log(result);