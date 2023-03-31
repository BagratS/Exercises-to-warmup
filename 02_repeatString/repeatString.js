const repeatString = function(str, rep) {
    let finalString = '';

    if (rep < 0) return 'ERROR';
    else if(str === finalString || rep === 0) return finalString;

    for(let i = 0 ; i < rep ; i++) finalString += str;
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
