const palindromes = function (str) {
    const check = str.toLowerCase().replaceAll(' ', '').replaceAll(',','').replaceAll('!','').replaceAll('.','');
    for(let i = 0 ; i <= (check.length - 1) / 2 ; i ++ ) {
        if(check[i] !== check[check.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
