var tShirt = {
    name: "Balenciaga",
    price: 1700,
    color: "Skin",
    inventory: {
        stock: 7,
        colorOptions: ["white", "navy blue", "black"],
        changeColor: function (newColor) {
            var _a;
            if ((_a = this.colorOptions) === null || _a === void 0 ? void 0 : _a.includes(newColor)) {
                switch (newColor) {
                    case "white":
                        tShirt.price *= 1.10;
                        tShirt.inventory.stock = 3;
                        break;
                    case "navy blue":
                        tShirt.price *= 0.95;
                        tShirt.inventory.stock = 5;
                        break;
                    case "black":
                        tShirt.price *= 2.50;
                        tShirt.inventory.stock = 2;
                        break;
                    default:
                        break;
                }
                tShirt.color = newColor;
            }
            else {
                console.log("Color option not available");
            }
        }
    }
};
tShirt.inventory.changeColor("black");
console.log(tShirt.color);
console.log(tShirt.price);
console.log("".concat(tShirt.inventory.stock, " pieces available"));
