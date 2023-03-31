const findTheOldest = function(arr) {
    return arr.reduce((oldest, person) => {
        if(person.yearOfDeath === undefined) {
            person.yearOfDeath = (new Date()).getFullYear();
        }
        const age = person.yearOfDeath - person.yearOfBirth;
        return age > (oldest.yearOfDeath - oldest.yearOfBirth) ? person : oldest;
    }, {name: 'unknown', yearOfBirth: 0, yearOfDeath: 0});
};

// Do not edit below this line
module.exports = findTheOldest;
