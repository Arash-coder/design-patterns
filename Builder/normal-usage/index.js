// The Builder design pattern is a creational pattern that separates the construction of a complex object from its representation, allowing you to create different representations of the same object. It's especially useful when you have an object with many optional parameters, and you want to make it easier to construct, understand, and maintain.

// Here's a step-by-step explanation of the Builder pattern and examples in JavaScript and TypeScript, along with a usage example in React.js:

// Create a Product: Start by defining the product you want to build. This can be a complex object with many attributes.

// Create a Builder Interface: Define an interface that declares methods for building each part of the product. Each method should return the builder itself, allowing for method chaining.

// Create Concrete Builders: Implement one or more concrete builders that implement the builder interface. Each builder should provide its own way to construct the product.

// Director (Optional): You can create a director class (not always necessary) that orchestrates the construction process using a specific builder. This class is responsible for defining the order and logic of the construction steps.

// Usage: Use the builder to create the product step by step, optionally with the help of a director. You can customize the product by choosing which parts to include or modify.

class Pizza {
    constructor() {
      this.toppings = [];
    }
  
    addTopping(topping) {
      this.toppings.push(topping);
    }
  
    describe() {
      return `Pizza with ${this.toppings.join(', ')} toppings`;
    }
  }
  
  class PizzaBuilder {
    constructor() {
      this.pizza = new Pizza();
    }
  
    addCheese() {
      this.pizza.addTopping('cheese');
      return this;
    }
  
    addPepperoni() {
      this.pizza.addTopping('pepperoni');
      return this;
    }
  
    addMushrooms() {
      this.pizza.addTopping('mushrooms');
      return this;
    }
  
    build() {
      return this.pizza;
    }
  }
  
  const customPizza = new PizzaBuilder()
    .addCheese()
    .addPepperoni()
    .build();
  
  console.log(customPizza.describe()); // Output: Pizza with cheese, pepperoni toppings
  