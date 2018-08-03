import React, { Component } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() { 
    console.log("data ", this.props.data)
    return (
      <div className={this.props.className}>
        <div className="App-title">
          Budget by Category
        </div>
        {this.props.data.map( category => <ProgressBar key={category._id} current={category.totalAmount} icon={category.icon} total={category.budget} />)}
    </div>
    )
  }
}
 
export default Category;
