/**
 * TYPEOF
 */
type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric) {
    if ( typeof a === 'number' && typeof b === 'number') {
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
    isCreditAllowed(): boolean {
        return true;
    }
}

class Supplier {
    isInShortList(): boolean {
        return true;
    }
}

type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner): string {
    let message: string;
    if (partner instanceof Customer) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit';
    }

    if (partner instanceof Supplier) {
        message = partner.isInShortList() ? 'sign a new contract with the supplier' : 'Need to evaluate further';
    }

    return message;
}

let person: BusinessPartner = new Supplier();
console.log(signContract(person));

/**
 *  IN
 */
function signContractIn(partner: BusinessPartner): string {
    let message: string;
    if ('isCreditAllowed' in partner) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
        // must be Supplier
        message = partner.isInShortList() ? 'Sign a new contract the supplier ' : 'Need to evaluate further';
    }

    return message;
}

/**
 * USER-DEFINED TYPE GUARDS
 */
function isCustomer(partner: any): partner is Customer {
    return partner instanceof Customer;
}

function signContractTwo(partner: BusinessPartner): string {
    let message: string;
    if (isCustomer(partner)) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
        message = partner.isInShortList() ? 'Sign a new contract with the supplier' : 'Need to evaluate further';
    }

    return message;
}

let test: BusinessPartner = new Customer();
console.log(signContract(test));