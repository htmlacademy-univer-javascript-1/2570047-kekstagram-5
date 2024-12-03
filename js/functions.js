function checkLength(string, maxLength) {
    return string.length <= maxLength;
}

console.log('Ожидаю "true", получаю', checkLength('sivbifb', 20));
console.log('Ожидаю "true", получаю', checkLength('sivbifbrr', 9));
console.log('Ожидаю "false", получаю', checkLength('sivbifbegievnepemwwwc', 16));


function isPalindrome(string) {
    const changedString = string.replaceAll(' ','').toLowerCase;
    let newString = '';
    for (let i = (changedString.Length - 1); i == 0; i--) {
        newString += at(i);
    }

    if (newString === string) {
        return true
    } else {
        return false
        }
}

console.log('Ожидаю "true", получаю', isPalindrome('Аша'));
console.log('Ожидаю "true", получаю', isPalindrome('КаБАк'));
console.log('Ожидаю "false", получаю', isPalindrome('Найк'));


function extractNumber(arg) {
    const string = arg.toString();
    let result;
    for (let i = 0; i < string.length; i++) {
        if (!Number.isNaN(parseInt(string[i], 10))) {
            result += string[i];
        }
    }

    return parseInt(result, 10);
}

console.log('Ожидаю "2023", получаю', extractNumber('2023 год'));
console.log('Ожидаю "2022", получаю', extractNumber('ECMAScript 2022'));
console.log('Ожидаю "105", получаю', extractNumber('1 кефир 0.5 кефира'));
console.log('Ожидаю "NaN", получаю', extractNumber('а я человек'));