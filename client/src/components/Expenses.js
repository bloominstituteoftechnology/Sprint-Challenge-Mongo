import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class category extends Component {
  state = {
    category: []
    // expenses: []
  };

  // getExpenses = () => {
  //   axios
  //     .get('http://localhost:5000/api/category/expenses')
  //     .then(response => {
  //       this.setState({ expenses: response.data });
  //     })
  //     .catch(error => {
  //       console.log('There was an error retrieving expenses');
  //     });
  // };

  getCategories = () => {
    axios
      .get('http://localhost:5000/api/category')
      .then(response => {
        this.setState({ category: response.data });
      })
      .catch(error => {
        console.log('There was an error retrieving category');
      });
  };

  componentDidMount = () => {
    // this.getExpenses();
    this.getCategories();
  };

  render() {
    return (
      <div>
        <h1 className="mt-3 mb-5">My Expenses</h1>
        <div className="mx-5">
          <Table hover bordered>
            <thead>
              <tr className="table-warning">
                <th>Category</th>
                <th>Amount</th>
                <th>Description</th>
              </tr>
            </thead>
            {this.state.category.map(category => {
              return (
                <tbody key={category.title}>
                  <tr>
                    <td>{category.title}</td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </div>
      </div>
    );
  }
}
