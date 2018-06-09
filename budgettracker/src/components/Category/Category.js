import React, { Component } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  

  render() { 
    return (
      <div className={this.props.className}>
        <div className="App-title">
          Budget by Category
        </div>
        <ProgressBar current="40" icon="directions_car" total="100" />
        <ProgressBar current="85" icon="local_grocery_store" total="100" />
        <ProgressBar current="67" icon="restaurant_menu" total="100" />

    </div>
    )
  }
}
 
export default Category;
