var inventory = [];
var product1 = { name: "Laptop", model: "XPS 13", cost: 999.99, quantity: 10 };
var product2 = { name: "Smartphone", model: "Galaxy S21", cost: 799.99, quantity: 25 };
var product3 = { name: "Headphones", model: "WH-1000XM4", cost: 349.99, quantity: 50 };
inventory.push(product1, product2, product3);
console.log("Quantity of the third product: ".concat(inventory[2].quantity));
var product4 = { name: "Tablet", model: "iPad Air", cost: 599.99, quantity: 15 };
inventory.push(product4);
console.log("Inventory after adding a new product:");
inventory.forEach(function (product, index) {
    console.log("".concat(index + 1, ". Name: ").concat(product.name, ", Model: ").concat(product.model, ", Cost: ").concat(product.cost, ", Quantity: ").concat(product.quantity));
});
