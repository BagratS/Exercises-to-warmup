const fibonacci = function(n) {
    if(typeof n === 'string') n = parseInt(n);
    if(n < 0) return 'OOPS';
    let fib1 = 1;
    let fib2 = 1;
    if(n === 1) return fib1;
    if(n === 2) return fib2;
    for (let i = 1 ; i <= n - 2 ; i ++) {
        fib2 += fib1;
        fib1 = fib2 - fib1;
    }
    return fib2;
};

// Do not edit below this line
module.exports = fibonacci;
