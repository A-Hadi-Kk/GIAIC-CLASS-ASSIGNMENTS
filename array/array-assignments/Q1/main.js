var products = [
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
function changeColor(product, newColor) {
    if (!product.inventory.colorOptions.includes(newColor)) {
        console.log("".concat(newColor, " color is not available for ").concat(product.name, "."));
        return;
    }
    var originalPrice = product.price;
    if (newColor == "red") {
        product.price = originalPrice * 1.10;
    }
    else if (newColor == "blue") {
        product.price = originalPrice * 2.50;
    }
    else {
        product.price = originalPrice;
    }
    console.log("You have to pay $".concat(product.price.toFixed(2), " for the ").concat(newColor, " color ").concat(product.name, " ."));
}
function displayProducts(products) {
    products.forEach(function (product) {
        console.log("Name: ".concat(product.name));
        console.log("Price: $".concat(product.price.toFixed(2)));
        console.log("Stock: ".concat(product.inventory.stock));
        console.log("Available Colors: ".concat(product.inventory.colorOptions.join(", ")));
        console.log('---------------------------------');
    });
}
displayProducts(products);
changeColor(products[0], "blue");
changeColor(products[1], "golden");
changeColor(products[2], "skin");
