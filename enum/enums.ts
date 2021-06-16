enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};

enum ApprobalStatus {
    draft, 
    submitted,
    approved,
    rejected
};

function isItSummer(month: Month) {
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}

console.log(isItSummer(Month.Jun));

const request = {
    id: 1,
    status: ApprobalStatus.approved,
    description: 'Please approve this request'
};

if(request.status === ApprobalStatus.approved) {
    // send an email
    console.log('Send email to the Applicant...');
}
