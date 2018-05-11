import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import BudgetCard from "./budgetCard";

export default class Budget extends Component {
  constructor() {
    super();
    this.state = {
      budget: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    axios
      .get(`http://localhost:5000/api/budgets/${id}`)
      .then(response => {
        this.setState(() => ({ budget: response.data }));
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    console.log(this.state);
    if (!this.state.budget) {
      return "Loading...";
    }
    return (
      <div>
        <br />
        <Link to="/api/budgets">
          <button>Return to list</button>
        </Link>
        <h1>Title: {this.state.budget.title}</h1>

        <div>Budget: ${this.state.budget.budgetAmount}</div>
      </div>
    );
  }
}
