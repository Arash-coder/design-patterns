// Real-World Analogy: Car Manufacturing

// Imagine a car manufacturing process where you need to produce cars of different models: Sedan and SUV. Each car model has various parts like engines, wheels, and interiors that are specific to that model.

// In this scenario:

// The AbstractFactory represents the car manufacturer's factory, which can produce different car models.
// The AbstractProductA and AbstractProductB represent the components or parts of the cars, such as engines and wheels.
// The concrete factories, e.g., SedanCarFactory and SUVCarFactory, correspond to two different car manufacturing facilities that create specific car models.
// The concrete products, e.g., SedanEngine, SedanWheels, SUVEngine, SUVWheels, represent the actual car parts.

// code

// Abstract Factory Interface
interface CarFactory {
  createEngine: () => Engine;
  createWheels(): Wheels;
}

// Abstract Product Types
interface Engine {
  start(): string;
}

interface Wheels {
  rotate(): string;
}

// Concrete Product A
class SedanEngine implements Engine {
  start(): string {
    return "Sedan engine started";
  }
}

class SUVEngine implements Engine {
  start(): string {
    return "SUV engine started";
  }
}

// Concrete Product B
class SedanWheels implements Wheels {
  rotate(): string {
    return "Sedan wheels rotating";
  }
}

class SUVWheels implements Wheels {
  rotate(): string {
    return "SUV wheels rotating";
  }
}

// Concrete Factory 1
class SedanCarFactory implements CarFactory {
  createEngine(): Engine {
    return new SedanEngine();
  }

  createWheels(): Wheels {
    return new SedanWheels();
  }
}

// Concrete Factory 2
class SUVCarFactory implements CarFactory {
  createEngine(): Engine {
    return new SUVEngine();
  }

  createWheels(): Wheels {
    return new SUVWheels();
  }
}

// Usage
function assembleCar(factory: CarFactory) {
  const engine = factory.createEngine();
  const wheels = factory.createWheels();

  console.log(engine.start());
  console.log(wheels.rotate());
}

const sedanFactory = new SedanCarFactory();
const suvFactory = new SUVCarFactory();

assembleCar(sedanFactory); // Output: Sedan engine started, Sedan wheels rotating
assembleCar(suvFactory); // Output: SUV engine started, SUV wheels rotating
