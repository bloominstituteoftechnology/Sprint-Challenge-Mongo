import React, { Component } from "react";
import axios from "axios";

export default class Budget extends Component {
  constructor() {
    super();
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
        console.error("Server Error:", err);
      });
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <h1>List of Budgets:</h1>
        {this.state.budget.map(eachBudget => (
          <div key={eachBudget._id}>
            <div>{eachBudget.title}</div>
            <div>{eachBudget.budgetAmount}</div>
          </div>
        ))}
      </div>
    );
  }
}
