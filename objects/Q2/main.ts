type Car = {
    engine: {
      horsepower: number;
    };
    getHorsepower: () => number;
  };
  const myCar: Car = {
    engine: {
      horsepower: 2300,
    },
    getHorsepower() {
      return this.engine.horsepower;
    },
  };
  
  console.log(`${myCar.getHorsepower()} Hp`); 
  