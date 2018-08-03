import React, { Component } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

class Budget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'empty',
      current: 0,
      icon: "face", //"account_balance"
      total: 100
    }
  }

  render() { 

    return (
      <div className={this.props.className}>
        <div className="App-title">
          Budget: {this.props.title}
        </div>
        <ProgressBar current={this.props.current} icon={this.props.icon} total={this.props.total} />
    </div>
    )
  }
}
 
export default Budget;
