import React from "react";

// Abstract Factory Interface
class CarFactory {
  createEngine() {
    throw new Error("Subclasses must implement createEngine method.");
  }

  createWheels() {
    throw new Error("Subclasses must implement createWheels method.");
  }
}

// Abstract Product Types
class Engine extends React.Component {
  render() {
    return <div>{this.props.start}</div>;
  }
}

class Wheels extends React.Component {
  render() {
    return <div>{this.props.rotate}</div>;
  }
}

// Concrete Product A
class SedanEngine extends Engine {
  render() {
    return <div>Sedan Engine: {super.render()}</div>;
  }
}

class SUVEngine extends Engine {
  render() {
    return <div>SUV Engine: {super.render()}</div>;
  }
}

// Concrete Product B
class SedanWheels extends Wheels {
  render() {
    return <div>Sedan Wheels: {super.render()}</div>;
  }
}

class SUVWheels extends Wheels {
  render() {
    return <div>SUV Wheels: {super.render()}</div>;
  }
}

// Concrete Factory 1
class SedanCarFactory extends CarFactory {
  createEngine() {
    return <SedanEngine start="Sedan engine started" />;
  }

  createWheels() {
    return <SedanWheels rotate="Sedan wheels rotating" />;
  }
}

// Concrete Factory 2
class SUVCarFactory extends CarFactory {
  createEngine() {
    return <SUVEngine start="SUV engine started" />;
  }

  createWheels() {
    return <SUVWheels rotate="SUV wheels rotating" />;
  }
}

// Usage in a React Component
function App() {
  const carModel: any = "SUV"; // You can dynamically change this model
  let carFactory;

  if (carModel === "Sedan") {
    carFactory = new SedanCarFactory();
  } else if (carModel === "SUV") {
    carFactory = new SUVCarFactory();
  }

  return (
    <div>
      {carFactory.createEngine()}
      {carFactory.createWheels()}
    </div>
  );
}

export default App;
