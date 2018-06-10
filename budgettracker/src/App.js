import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Budget from './components/Budget/Budget';
import Category from './components/Category/Category';
import PieChart from './components/PieChart/PieChart';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import { connect } from 'react-redux';
import { getBudgets } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C'],
      data: [40, 85, 67]
    }
  }
  componentDidMount() {
    this.props.getBudgets();
  }
  render() {
    if(!this.props.fetched)
      return (
        <div className="App-content-container"> 'Loading...' </div>
      )
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Budget Tracker</h1>
        </header>
        <div className="App-body">
          <div className="App-container">
            <Budget
              title={this.props.budget.title}
              icon="account_balance"
              current={ this.props.budget.current }
              total={ this.props.budget.total }
            />
            <PieChart className="App-container"
              data={this.props.budgetsCategory.map((category) => {return category.totalAmount})}
              radius={ 150 }
              hole={ 0 }
              colors={this.state.colors}
              labels={ true }
              percent={ true }
              strokeWidth={ 3 }
              stroke={ '#fff' }
            />
          </div>
          <Category className="App-container" data={this.props.budgetsCategory}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps App ", state);
  const props = state;
  return props;
}

export default connect(mapStateToProps, { getBudgets })(App);