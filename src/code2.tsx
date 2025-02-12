import React, { Component } from "react";

// Définition du type de l'état
interface CounterState {
  count: number;
}

// Définition de la classe avec le type d'état
class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0,
  };

  // Typage de la fonction
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;