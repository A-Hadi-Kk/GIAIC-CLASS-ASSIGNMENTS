function addNumbers(a: number, b: number): number {
    return a + b;
}
const num1: number = 10;
const num2: number = 20;
console.log(`The sum of ${num1} and ${num2} is:`, addNumbers(num1, num2));
const num3: number = 30;
const num4: number = 40;

console.log(`The sum of ${num3} and ${num4} is:`, addNumbers(num3, num4));

console.log(`The sum of ${num3} and ${num1} is:`, addNumbers(num3, num1));
