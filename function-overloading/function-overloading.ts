function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}

console.log(add('string', 'two'));
console.log(200, 299);
console.log(2, 'toe');

// Function overloading with optional parameters
function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}

console.log(sum(1, 2 ,5));
