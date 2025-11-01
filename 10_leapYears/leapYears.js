const leapYears = function(year) {

    // The 3 conditions for a given year be a leap year are:
    // The year is exactly divisible by four (with no remainder);
    // If the year is divisible by 100 (years ending in two zeros), it is not a leap, except if
    // It is also divisible by 400 (in this case it will be a leap year).

    if (
        (year % 4 == 0 && year % 100 != 0) ||
        (year % 100 == 0 && year % 400 == 0)
    ) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
