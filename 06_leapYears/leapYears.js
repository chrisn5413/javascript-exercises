const leapYears = function(year) {
    const DivisibleByFour = year % 4 == 0;
    const DivisibleByHundred = year % 100 == 0;
    const DivisibleByFourHundred = year % 400 == 0;

    if (DivisibleByFour && (!DivisibleByHundred || DivisibleByFourHundred)) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
