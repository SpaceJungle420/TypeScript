function merge<U, V>(obj1: U,  obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}

let person = merge(
    { name: 'John' },
    { age: 25 }
);

console.log(person);