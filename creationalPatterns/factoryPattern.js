class Car {
  constructor(doors, color, engine) {
    this.doors = doors;
    this.color = color;
    this.engine = engine;
  }
}

class carFactory {
  createCar(type) {
    switch (type) {
      case "honda":
        return new Car(2, "red", "v8");
      case "civic":
        return new Car(4, "blue", "dsd");
    }
  }
}

const factory = new carFactory();
const honda = factory.createCar("honda");
console.log(honda);
