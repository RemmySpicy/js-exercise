const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    
    // array method
    // let result = [0, 1];

    // for (let i = 2; i <= n; i++) {
    // let a = result[i - 1];
    // let b = result[i - 2];
    // result.push(a + b);
    // }
    // return result[n];

    // recursive method
    // return "+n" incase the input is a number, so it can be converted to number first
    if (n < 2) return +n;

    return fibonacci(n - 1) + fibonacci(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;
