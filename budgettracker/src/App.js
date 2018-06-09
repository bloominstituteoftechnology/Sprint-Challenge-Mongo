import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Budget from './components/Budget/Budget';
import Category from './components/Category/Category';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Budget Tracker</h1>
        </header>
        <body className="App-body">
          <Budget className="App-container" />
          <Category className="App-container"/>
        </body>
      </div>
    );
  }
}

export default App;
