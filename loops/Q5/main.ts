let myArray: number[] = [];
for (let i = 1; i <= 10; i++) {
    myArray.push(i);
}
console.log('Array Contents:', myArray);

for (let index = 0; index < myArray.length; index++) {
    console.log(`Index ${index}: ${myArray[index]}`);
}
for (const value of myArray) {
    console.log(`Value: ${value}`);
}