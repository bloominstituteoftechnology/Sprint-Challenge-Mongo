// dependencies
import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

// components
import Home from "./components/home";
import BudgetList from "./components/budget/budgetList";
import BudgetById from "./components/budget/budgetById";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/api/budgets" component={BudgetList} />
        <Route
          path="/api/budgets/:id"
          render={props => <BudgetById {...props} />}
        />
      </div>
    );
  }
}

export default App;
