var myCar = {
    engine: {
        horsepower: 2300,
    },
    getHorsepower: function () {
        return this.engine.horsepower;
    },
};
console.log("".concat(myCar.getHorsepower(), " Hp"));
