const removeFromArray = function(array) {
    if (arguments.length == 1) return array;

    let index = array.length;

    while (index--) {
        for (let i = 1; i < arguments.length; i++) {
            if (array[index] === arguments[i]) {
                array.splice(index, 1);
                break;
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
