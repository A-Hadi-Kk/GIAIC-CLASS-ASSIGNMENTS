type Product = {
    name: string;
    price: number;
    inventory: {
        stock: number;
        colorOptions: string[];
    };
};
const products: Product[] = [
    {
        name: "T-shirt",
        price: 2500,
        inventory: {
            stock: 7,
            colorOptions: ["blue", "grey", "skin"]
        }
    },
    {
        name: "Watch",
        price: 37000,
        inventory: {
            stock: 3,
            colorOptions: ["black", "silver", "golden"]
        }
    },
    {
        name: "Shoes",
        price: 9500,
        inventory: {
            stock: 9,
            colorOptions: ["red", "black", "green"]
        }
    }
];
function changeColor(product: Product, newColor: string){
    if (!product.inventory.colorOptions.includes(newColor)) {
        console.log(`${newColor} color is not available for ${product.name}.`);
        return;
    }
    const originalPrice = product.price;
    if (newColor == "red") {
        product.price = originalPrice * 1.10; 
    } else if (newColor == "blue") {
        product.price = originalPrice * 2.50; 
    } else {
        product.price = originalPrice; 
    }

    console.log(`You have to pay $${product.price.toFixed(2)} for the ${newColor} color ${product.name} .`);
}
function displayProducts(products: Product[]){
    products.forEach(product => {
        console.log(`Name: ${product.name}`);
        console.log(`Price: $${product.price.toFixed(2)}`);
        console.log(`Stock: ${product.inventory.stock}`);
        console.log(`Available Colors: ${product.inventory.colorOptions.join(", ")}`);
        console.log('---------------------------------');
    });
}
displayProducts(products);
changeColor(products[0], "blue");
changeColor(products[1], "golden");
changeColor(products[2], "skin");
