import React, { Component } from 'react';
import './ProgressBar.css'

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 100,
      showInputRande: false
    }
  }

  componentDidMount() {
    this.setState({value: this.props.current})

  }
  percentage() {
    let current = this.state.value,
        total   = this.props.total;
    return Math.floor( ( current / total ) * 100 );
  }

  getStyle( percentage ) {
    if ( percentage > 80  ) { return 'danger'; }
    if ( percentage >= 70 && percentage <= 80 ) { return 'warning'; }
    if ( percentage < 70  ) { return 'ok'; }
  }

  completion() {
    return `$${ this.state.value } of $${ this.props.total }`;
  }

  totalLeft() {
    return `$${ this.props.total - this.state.value} left`;
  }

  setValue = (e) => {
    this.setState({value: e.target.value});
  }

  render() { 
    let style   = this.getStyle( this.percentage() ),
        classes = `react-progress-bar ${ style }`;

    return (
      <div className="react-progress-bar-container">
        {this.state.showInputRande && <input
          ref="range"
          type="range"
          min="0"
          max="100"
          defaultValue={ this.state.value }
          onChange={ this.setValue }
        />}
        <div className="icon">
            <i className="material-icons">{this.props.icon}</i>
        </div>
        <div className={ classes }>
          <div className="labels">
            <span className="completion">{ this.completion() }</span>
            <span className="total">{ this.totalLeft() }</span>
          </div>
          <div className="bar">
            <div style={{ width: this.percentage() + "%" }} className="fill"></div>
          </div>
        </div>
      </div>
    )
  }
}
 
export default ProgressBar;