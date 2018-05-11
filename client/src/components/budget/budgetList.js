import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import BudgetCard from "./budgetCard";

export default class Budget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/budgets/")
      .then(response => {
        this.setState(() => ({ budget: response.data }));
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    if (!this.state.budget) {
      return "Loading...";
    }

    return (
      <div>
        <h1>List of Budgets:</h1>
        <Link to="/">
          <button>Return to Front Page</button>
        </Link>
        <br />
        <br />
        {this.state.budget.map(eachBudget => (
          <Link key={eachBudget._id} to={`/api/budgets/${eachBudget._id}`}>
            <div>
              <BudgetCard mainProp={eachBudget} />
            </div>
          </Link>
        ))}
      </div>
    );
  }
}
