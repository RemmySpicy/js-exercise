const palindromes = function (str) {
    // regex pattern that matches all non alphabet and underscore
    const regEx = /[\W_]/gi;

    // convert string to lower case, remove non alphabeths
    const newStr = str.toLowerCase().replace(regEx, "");

    const reversed = newStr.split('').reverse().join('');
    return newStr == reversed ? true: false;
};

// Do not edit below this line
module.exports = palindromes;
