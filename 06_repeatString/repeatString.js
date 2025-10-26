const repeatString = function(str, num) {

    let repeatedString;

    if (!repeatedString && num < 0) {
        repeatedString = "ERROR"
    } else if (!repeatedString && !num) {
        repeatedString = "";
    } else if (num > 0) {
        for (let i = 0; i < num; i++) {
            if (!repeatedString) {
                repeatedString = str;
            } else {
                repeatedString += str;
            }
        }
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
