import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BudgetExpend from "./budgetExpend";

export default class Budget extends Component {
  constructor() {
    super();
    this.state = {
      budget: null,
      totalExpenditure: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    axios
      .get(`http://localhost:5000/api/budgets/${id}`)
      .then(response => {
        this.setState(() => ({ budget: response.data }));
        this.sumExpenditure(this.state.budget.expense);
      })
      .catch(err => {
        console.error(err);
      });
  }

  sumExpenditure = array => {
    let sumExpense = 0;

    for (let i = 0; i < array.length; i++) {
      sumExpense += array[i].amount;
    }

    return this.setState(() => ({ totalExpenditure: sumExpense }));
  };

  render() {
    console.log(this.state.budget);
    if (!this.state.budget) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

    const title = this.state.budget.budget.title;
    const budgetAmount = this.state.budget.budget.budgetAmount;
    const totalExpenditure = this.state.totalExpenditure;
    return (
      <div>
        <h1>Title: {title}</h1>

        <div>Budget Amount: ${budgetAmount}</div>
        <Link to={`/api/budgets/${this.state.budget.budget._id}/expenses`}>
          <BudgetExpend mainProps={this.props} />
          <div>Total Expenditure: ${totalExpenditure}</div>
        </Link>
        <br />

        <div>Net difference: ${budgetAmount - totalExpenditure}</div>
        <br />
        <p>Current financial situation:</p>
        {totalExpenditure > budgetAmount ? (
          <h1>YOU'RE OVERSPENDING</h1>
        ) : (
          <h3>We Good.</h3>
        )}

        <Link to="/api/budgets">
          <button>Return to list</button>
        </Link>
      </div>
    );
  }
}
