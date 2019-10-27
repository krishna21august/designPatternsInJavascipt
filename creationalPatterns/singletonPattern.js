let instance = null;

class Car {
  constructor(doors, color, engine) {
    if (!instance) {
      this.doors = doors;
      this.color = color;
      this.engine = engine;
      instance = this;
    } else {
      return instance;
    }
  }
}

const civic = new Car(4, "grey", "dsds");
const cx5 = new Car(4, "blue", "dsd");
console.log(civic);
console.log(cx5);
