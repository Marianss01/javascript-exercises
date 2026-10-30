const sumAll = function(boundA, boundB) {
    if (!Number.isInteger(boundA) || !Number.isInteger(boundB)
        || boundA < 0 || boundB < 0) return "ERROR";
    let totalSum = 0;
    const inferiorBound = boundA > boundB ? boundB : boundA;
    const superiorBound = inferiorBound === boundA ? boundB : boundA;
    for (let i = inferiorBound; i <= superiorBound; i++) {
        totalSum += i;
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
