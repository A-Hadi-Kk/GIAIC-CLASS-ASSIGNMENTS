var myArray = [];
for (var i = 1; i <= 10; i++) {
    myArray.push(i);
}
console.log('Array Contents:', myArray);
for (var index = 0; index < myArray.length; index++) {
    console.log("Index ".concat(index, ": ").concat(myArray[index]));
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var value = myArray_1[_i];
    console.log("Value: ".concat(value));
}
