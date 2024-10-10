const reverseString = function(string) {
    let result = "";
    let stringLengthAsNegative = -1 * string.length;
    for (let i = -1; i >= stringLengthAsNegative; i--) {
        result += string.at(i);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
