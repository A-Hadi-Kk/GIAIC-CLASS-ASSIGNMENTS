var num1 = 20;
var num2 = 10;
var operator = '+';
function calculate(num1, num2, operator) {
    if (operator == '+') {
        return num1 + num2;
    }
    else if (operator == '-') {
        return num1 - num2;
    }
    else {
        throw new Error('Invalid operator');
    }
}
console.log("Result of ".concat(num1, " ").concat(operator, " ").concat(num2, " is:"), calculate(num1, num2, operator));
operator = '-';
console.log("Result of ".concat(num1, " ").concat(operator, " ").concat(num2, " is:"), calculate(num1, num2, operator));
