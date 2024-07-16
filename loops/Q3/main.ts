
let counter: number = 0;
const step: number = 10; 

do {
    console.log(`Counter: ${counter}`);
    counter += step;
    
} while (counter < 100);

console.log(`Final Counter Value: ${counter}`);
