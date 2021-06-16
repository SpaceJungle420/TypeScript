function add(a: number, b: number): number {
    return a + b;
}

function echo(message: string): void {
    console.log(message);
}

console.log(add(2,3));
echo(add(6,6).toString());