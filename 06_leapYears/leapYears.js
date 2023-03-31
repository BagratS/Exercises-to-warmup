const leapYears = function(date) {
    if(date % 400 === 0) return true;
    else if(date % 4 === 0 && date % 100 !== 0) return true;
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
