// Define functions

function add7(num) {
    return num + 7;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function capitalize(text) {
    stringLength = text.length;

    if(stringLength > 1) {
        return text.substr(0,1).toUpperCase() + text.substr(1);
    } else if (stringLength == 1) {
        return text.toUpperCase();
    } else return text;    
}

function lastLetter(text) {
    return text.substr(-1);
}

// Test functions

console.log('Add 7 to 10: ' + add7(10));
console.log('Multiply 3 * 6: ' + multiply(3, 6));
console.log('Capitalize \"penguin\": ' + capitalize('penguin'));
console.log('Capitalize \"pEnGuIn\": ' + capitalize('pEnGuIn'));
console.log('Capitalize \"PENGUIN\": ' + capitalize('PENGUIN'));
console.log('Capitalize \"p\": ' + capitalize('p'));
console.log('Last letter of \"Old MacDonald\": ' + lastLetter('Old MacDonald'));