function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}

console.log(getNetPrice(200, .50, true));

// the alternative type assertin syntax
let netPrice = <number>getNetPrice(200, .10, true);

console.log(netPrice);