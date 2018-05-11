// dependencies
import React, { Component } from 'react';
import {Route} from "react-router-dom"
import './App.css';

// components
import Home from "./components/home"
import Budget from "./components/budget/budget"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/api/budgets" component={Budget} />
      </div>
    );
  }
}

export default App;
