type Product = {
    name: string;
    price: number;
    color: string;
    inventory: {
      stock: number;
      colorOptions?: string[];
      changeColor: (newColor: string) => void;
    };
  };
  const tShirt: Product = {
    name: "Balenciaga",
    price: 1700,
    color: "Skin",
    inventory: {
      stock: 7,
      colorOptions: ["white", "navy blue", "black"],
      changeColor(newColor: string) {
        if (this.colorOptions?.includes(newColor)) {
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
        } else {
          console.log("Color option not available");
        }
      }
    }
  };
  
  tShirt.inventory.changeColor("black");
  console.log(tShirt.color); 
  console.log(tShirt.price); 
  console.log(`${tShirt.inventory.stock} pieces available`)