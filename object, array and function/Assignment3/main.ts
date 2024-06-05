type Product = {
    name: string;
    model: string;
    cost: number;
    quantity: number;
};
let inventory: Product[] = [];
let product1: Product = { name: "Laptop", model: "XPS 13", cost: 999.99, quantity: 10 };
let product2: Product = { name: "Smartphone", model: "Galaxy S21", cost: 799.99, quantity: 25 };
let product3: Product = { name: "Headphones", model: "WH-1000XM4", cost: 349.99, quantity: 50 };
inventory.push(product1, product2, product3);
console.log(`Quantity of the third product: ${inventory[2].quantity}`);
let product4: Product = { name: "Tablet", model: "iPad Air", cost: 599.99, quantity: 15 };
inventory.push(product4);
console.log(`Inventory after adding a new product:`);
inventory.forEach((product, index) => {
    console.log(`${index + 1}. Name: ${product.name}, Model: ${product.model}, Cost: ${product.cost}, Quantity: ${product.quantity}`);
});
