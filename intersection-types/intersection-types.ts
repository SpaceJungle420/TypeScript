interface BuisnessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}

// The following defines two interssection types, when you intersect types the order doesnt matter.
type Employee = Identity & Contact;
type Customer =  BuisnessPartner & Contact;
type AllThree = BuisnessPartner & Identity & Contact;

let e: Employee = {
    id: 100,
    name: 'John Doe',
    email: 'John.doe@example.com',
    phone: '(408)-897-5684'
};

let c: Customer = {
    name: 'ABC Inc',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(407)-897-5735'
};

let f: AllThree = {
    id:100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(403)-877-4200',
    credit: 10000
}