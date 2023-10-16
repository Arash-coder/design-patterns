import React from "react";

class Burger {
  constructor() {
    this.ingredients = [];
  }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
  }

  render() {
    return (
      <div>
        <div>Burger with:</div>
        <ul>
          {this.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    );
  }
}

class BurgerBuilder {
  constructor() {
    this.burger = new Burger();
  }

  addCheese() {
    this.burger.addIngredient("cheese");
    return this;
  }

  addLettuce() {
    this.burger.addIngredient("lettuce");
    return this;
  }

  addTomato() {
    this.burger.addIngredient("tomato");
    return this;
  }

  build() {
    return this.burger;
  }
}

function App() {
  const customBurger = new BurgerBuilder().addCheese().addLettuce().build();

  return (
    <div>
      <h1>Build Your Burger</h1>
      {customBurger.render()}
    </div>
  );
}

export default App;
