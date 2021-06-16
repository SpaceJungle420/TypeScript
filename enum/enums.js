var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
;
var ApprobalStatus;
(function (ApprobalStatus) {
    ApprobalStatus[ApprobalStatus["draft"] = 0] = "draft";
    ApprobalStatus[ApprobalStatus["submitted"] = 1] = "submitted";
    ApprobalStatus[ApprobalStatus["approved"] = 2] = "approved";
    ApprobalStatus[ApprobalStatus["rejected"] = 3] = "rejected";
})(ApprobalStatus || (ApprobalStatus = {}));
;
function isItSummer(month) {
    var isSummer;
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
var request = {
    id: 1,
    status: ApprobalStatus.approved,
    description: 'Please approve this request'
};
if (request.status === ApprobalStatus.approved) {
    // send an email
    console.log('Send email to the Applicant...');
}
