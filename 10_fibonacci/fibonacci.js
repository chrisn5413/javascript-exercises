const fibonacci = function(givenPosition) {
    if (givenPosition < 0) return "OOPS";
    if (givenPosition == 0) return 0;
    if (givenPosition < 3) return 1;

    let currentPosition = 3;
    let secondPreviousNumber = 1;
    let previousNumber = 1;
    let currentNumber = secondPreviousNumber + previousNumber;

    while (currentPosition < givenPosition) {
        currentPosition++;
        secondPreviousNumber = previousNumber;
        previousNumber = currentNumber;
        currentNumber = secondPreviousNumber + previousNumber;
    }

    return currentNumber;
};

// Do not edit below this line
module.exports = fibonacci;
