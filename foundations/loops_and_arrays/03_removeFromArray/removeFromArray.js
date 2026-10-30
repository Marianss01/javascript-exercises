const removeFromArray = function(array, ...args) {
    return array.filter((element) => {
        for (const value of args) {
            if (element === value) return false;
        }
        return true;
    });
};

// Do not edit below this line
module.exports = removeFromArray;
