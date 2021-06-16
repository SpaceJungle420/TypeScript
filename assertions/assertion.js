function getNetPrice(price, discount, format) {
    var netPrice = price * (1 - discount);
    return format ? "$" + netPrice : netPrice;
}
console.log(getNetPrice(200, .50, true));
// the alternative type assertin syntax
var netPrice = getNetPrice(200, .10, true);
console.log(netPrice);
