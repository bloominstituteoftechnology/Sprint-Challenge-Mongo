import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Budget from './components/Budget/Budget';
import Category from './components/Category/Category';
import PieChart from './components/PieChart/PieChart';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C'],
      data: [40, 85, 67]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Budget Tracker</h1>
        </header>
        <div className="App-body">
          <div className="App-container">
            <Budget />
            <PieChart className="App-container"
              data={this.state.data}
              radius={ 150 }
              hole={ 0 }
              colors={this.state.colors}
              labels={ true }
              percent={ true }
              strokeWidth={ 3 }
              stroke={ '#fff' }
            />
          </div>
          <Category className="App-container"/>
        </div>
      </div>
    );
  }
}

export default App;
