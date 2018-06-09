import React, { Component } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

class Budget extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() { 
    return (
      <div className={this.props.className}>
        <div className="App-title">
          Budget
        </div>
        <ProgressBar current="40" icon="account_balance" total="100" />
    </div>
    )
  }
}
 
export default Budget;
