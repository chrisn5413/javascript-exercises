const repeatString = function(string, count) {

    let result = (count >= 0) ? "" : "ERROR";
    
    for (let i = 0; i < count; i++) {
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
