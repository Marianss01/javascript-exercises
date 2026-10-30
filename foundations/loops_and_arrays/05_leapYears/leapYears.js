const leapYears = function(year) {
    function divisible(year, divisor) {
        if (year % divisor === 0) return true;
        else return false;
    }
    if (divisible(year, 4) && (!divisible(year, 100) || divisible(year, 400))) return true;
    return false;
};

// Do not edit below this line
module.exports = leapYears;
