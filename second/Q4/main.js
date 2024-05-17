function addNumbers(a, b) {
    return a + b;
}
var num1 = 10;
var num2 = 20;
console.log("The sum of ".concat(num1, " and ").concat(num2, " is:"), addNumbers(num1, num2));
var num3 = 30;
var num4 = 40;
console.log("The sum of ".concat(num3, " and ").concat(num4, " is:"), addNumbers(num3, num4));
console.log("The sum of ".concat(num3, " and ").concat(num1, " is:"), addNumbers(num3, num1));
