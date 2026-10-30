const reverseString = function(wordToReverse) {
    let revertedString = "";
    for (let i = wordToReverse.length - 1; i >= 0; i--) {
        revertedString += wordToReverse[i];
    }
    return revertedString;
};

// Do not edit below this line
module.exports = reverseString;
