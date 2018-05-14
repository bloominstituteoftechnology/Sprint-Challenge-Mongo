// dependencies
import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

// components
import Home from "./components/home";
import BudgetList from "./components/budget/budgetList";
import BudgetById from "./components/budget/budgetById";
import BudgetExpend from "./components/budget/budgetExpend";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/api/budgets" component={BudgetList} />
        <Route
          exact
          path="/api/budgets/:id"
          render={props => <BudgetById {...props} />}
        />
        <Route
          path="/api/budgets/:id/expenses"
          render={props => <BudgetExpend {...props} />}
        />
      </div>
    );
  }
}

export default App;
