const palindromes = function (word) {
    let punctuation = [",",".","!"," "];
    
    word = word.toLowerCase().split("").filter((element) => !punctuation.includes(element));

    let start = 0;
    let end = word.length - 1;

    while (start <= end) {
        if (word[start] !== word[end]) return false;
        start++;
        end--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
