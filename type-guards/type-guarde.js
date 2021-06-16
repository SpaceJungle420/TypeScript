function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}
console.log(add(3, 3));
console.log(add('hello ', 'world'));
/**
 * INSTANCEOF
 */
class Customer {
    isCreditAllowed() {
        return true;
    }
}
class Supplier {
    isInShortList() {
        return true;
    }
}
function signContract(partner) {
    let message;
    if (partner instanceof Customer) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit';
    }
    if (partner instanceof Supplier) {
        message = partner.isInShortList() ? 'sign a new contract with the supplier' : 'Need to evaluate further';
    }
    return message;
}
let person = new Supplier();
console.log(signContract(person));
/**
 *  IN
 */
function signContractIn(partner) {
    let message;
    if ('isCreditAllowed' in partner) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    }
    else {
        // must be Supplier
        message = partner.isInShortList() ? 'Sign a new contract the supplier ' : 'Need to evaluate further';
    }
    return message;
}
/**
 * USER-DEFINED TYPE GUARDS
 */
function isCustomer(partner) {
    return partner instanceof Customer;
}
function signContractTwo(partner) {
    let message;
    if (isCustomer(partner)) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    }
    else {
        message = partner.isInShortList() ? 'Sign a new contract with the supplier' : 'Need to evaluate further';
    }
    return message;
}
let test = new Customer();
console.log(signContract(test));
