class Car {
  constructor(doors, color, engine) {
    this.doors = doors;
    this.color = color;
    this.engine = engine;
  }
}

class SUV extends Car {
  constructor(doors, color, engine) {
    super(doors, color, engine);
    this.wheels = 4;
  }
}

const civic = new Car(4, "grey", "dsds");
const cx5 = new SUV(4, "blue", "dsd");
console.log(civic);
console.log(cx5);
