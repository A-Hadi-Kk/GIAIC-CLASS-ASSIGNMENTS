var fruits = ["apple", "bnana", "mango", "orange"];
var numbers = [10, 20, 30, 40];
var thirdfruit = fruits[2];
numbers[1] = 25;
fruits.push("grape");
var lastFruit = fruits.pop();
var firstFruit = fruits.shift();
fruits.unshift("kiwi");
fruits.splice(1, 2);
fruits.splice(2, 0, "pineapple", "pear");
var citrusFruits = fruits.slice(0, 2);
var lastTwoFruits = fruits.slice(-2);