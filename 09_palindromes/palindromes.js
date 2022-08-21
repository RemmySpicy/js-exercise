const palindromes = function (str) {
    const regEx = /[\W_]/gi;

    const newStr = str.toLowerCase().replace(regEx, "");

    const reversed = newStr.split('').reverse().join('')
    return newStr == reversed ? true: false;
};

// Do not edit below this line
module.exports = palindromes;
