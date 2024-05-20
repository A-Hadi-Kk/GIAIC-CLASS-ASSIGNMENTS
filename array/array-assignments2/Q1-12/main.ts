let fruits: String[] =["apple", "bnana", "mango", "orange"]
let numbers: number[] =[10, 20, 30, 40]
let thirdfruit = fruits[2]
numbers[1] = 25
fruits.push("grape")
let lastFruit = fruits.pop()
let firstFruit = fruits.shift()
fruits.unshift("kiwi")
fruits.splice(1, 2)
fruits.splice(2, 0, "pineapple", "pear")
let citrusFruits = fruits.slice(0, 2)
let lastTwoFruits = fruits.slice(-2)