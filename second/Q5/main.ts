const num1: number = 20;
const num2: number = 10;
let operator: string = '+';
function calculate(num1: number, num2: number, operator: string): number {
    if (operator == '+') {
        return num1 + num2;
    } else if (operator == '-') {
        return num1 - num2;
    } else {
        throw new Error('Invalid operator');
    }
}
console.log(`Result of ${num1} ${operator} ${num2} is:`, calculate(num1, num2, operator));
operator = '-';
console.log(`Result of ${num1} ${operator} ${num2} is:`, calculate(num1, num2, operator));
